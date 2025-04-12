import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";
import nodemailer from "nodemailer";

// Define validation schema
const contactSchema = Yup.object({
  firstName: Yup.string().required("First Name is required").min(2).max(50),
  lastName: Yup.string().required("Last Name is required").min(2).max(50),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone Number is required"),
  companyName: Yup.string().required("Company Name is required"),
  companyIndustry: Yup.string().required("Company Industry is required"),
  projectDetails: Yup.string()
    .required("Project Details are required")
    .min(10, "Please provide more details"),
  projectBudget: Yup.string().required("Project Budget is required"),
  services: Yup.array().of(Yup.string()).min(1, "Select at least one service"),
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
   
    await contactSchema.validate(req.body, { abortEarly: false });

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      companyIndustry,
      projectDetails,
      projectBudget,
      services,
    } = req.body;
    const emailTemplate = `
      <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
          body {
            font-family: 'Poppins', sans-serif;
            background-color: #000;
            color: #fff;
            padding: 40px;
            text-align: center;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #111;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
          }
          .logo {
            width: 150px;
            margin-bottom: 20px;
          }
            p {
            margin: 8px 0;
            font-size: 16px;
            color: #fff;
            }
          .title {
          text-align: center;
            font-size: 24px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 20px;
          }
          .details {
            text-align: left;
            padding: 20px;
            background: #222;
            border-radius: 10px;
          }
          .details p {
            margin: 8px 0;
            font-size: 16px;
          }
          .highlight {
            color: #ff4d4d;
            font-weight: 600;
          }
          .footer {
            margin-top: 20px;
            font-size: 14px;
            opacity: 0.8;
            text-align: center;
            color: #fff;
            margin-bottom: 20px;
          }
            .main-title {
            font-size: 24px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 20px;
            }
        </style>
      </head>
      <body>
        <div class="container">
        <h2 class="title">🍒  Cherry.design</h2>
        <h1 class="main-title">New Contact Form Submission </h1>
          <p>Someone just submitted the contact form on your website. Here are the details:</p>
          <div class="details">
            <p><span class="highlight">Name:</span> ${firstName} ${lastName}</p>
            <p><span class="highlight">Email:</span> ${email}</p>
            <p><span class="highlight">Phone Number:</span> ${phoneNumber}</p>
            <p><span class="highlight">Company Name:</span> ${companyName}</p>
            <p><span class="highlight">Industry:</span> ${companyIndustry}</p>
            <p><span class="highlight">Project Budget:</span> ${projectBudget}</p>
            <p><span class="highlight">Services Interested:</span> ${services.join(", ")}</p>
            <p><span class="highlight">Project Details:</span> ${projectDetails}</p>
          </div>

          <p class="footer">Cherry.design </p>
        </div>
      </body>
      </html>
    `;

    // Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: "shadab28696@gmail.com", 
      subject: "New Contact Form Submission - Cherry.design 🍒",
      html: emailTemplate,
    };
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Form submitted successfully and email sent!" });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return res.status(400).json({ errors: error.errors });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
