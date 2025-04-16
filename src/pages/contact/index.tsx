"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
export default function ContactPage() {
  // const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const services = [
    "Branding", "Web Design", "App Design",
    "2D Illustration", "Motion Graphics",
    "Graphic Design",  "Development",
  ];

  const budgetOptions = ["Under $5k", "$5k-$10k", "$10k-$15k", "$20k+"];

  const validationSchema = Yup.object({
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
    services: Yup.array().min(1, "Select at least one service"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companyIndustry: "",
      projectDetails: "",
      projectBudget: "",
      services: [] as string[],
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
  
        const data = await response.json();
        if (response.ok) {
          setToastMessage("Form submitted successfully! 🎉");
          resetForm();
        } else {
          setToastMessage(`Error: ${data.errors?.join(", ") || data.error}`);
        }
      } catch (error) {
        setToastMessage("Something went wrong, please try again later.");
      }
      setLoading(false);
      setTimeout(() => setToastMessage(null), 4000); 
    },
  });

  const toggleService = (service: string) => {
    const newServices = formik.values.services.includes(service)
      ? formik.values.services.filter((s) => s !== service)
      : [...formik.values.services, service];
    formik.setFieldValue("services", newServices);
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="flex  flex-col md:flex-row w-full mx-auto min-h-screen">
        {/* Left Side - Fixed Text (35%) */}
        <div className="w-full hidden md:flex md:w-[45%] bg-white  items-center justify-center sticky top-0 h-auto md:h-screen p-8">
          <div className="max-w-md">
            <p className="text-gray-500 mb-4">
              Tell us your project details and we'll get back to you ASAP
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-black">
              Let's Partner Up!
            </h2>
            <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className="text-gray-500">Book a call:</p>
                <Link href="tel:+919756188580" className="text-[#C1141D] hover:underline">
                        +91 97561 88580
                    </Link>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-500">Contact Us:</p>
                <Link
                  href="mailto:shadab28696@gmail.com"
                  className="text-[#C1141D] hover:underline"
                >
                  shadab28696@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Scrollable Form (65%) */}
        <div className="w-full md:w-[55%] bg-white overflow-y-auto p-8">
          <form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto space-y-6">
            {/* Personal Details */}
            <div>
              <label className="block text-lg font-semibold mb-4">
                Tell us about your details*
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...formik.getFieldProps("firstName")}
                    className={`w-full p-3 border rounded ${
                      formik.touched.firstName && formik.errors.firstName
                        ? "border-[#C1141D]"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...formik.getFieldProps("lastName")}
                    className={`w-full p-3 border rounded ${
                      formik.touched.lastName && formik.errors.lastName
                        ? "border-[#C1141D]"
                        : "border-gray-300"
                    }`}
                  />
                </div>
              </div>

              <input
                type="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
                className={`w-full p-3 border rounded mt-4 ${
                  formik.touched.email && formik.errors.email
                    ? "border-[#C1141D]"
                    : "border-gray-300"
                }`}
              />

              <input
                type="text"
                placeholder="Phone Number"
                {...formik.getFieldProps("phoneNumber")}
                className={`w-full p-3 border rounded mt-4 ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "border-[#C1141D]"
                    : "border-gray-300"
                }`}
              />

              <input
                type="text"
                placeholder="Company Name"
                {...formik.getFieldProps("companyName")}
                className="w-full p-3 border rounded mt-4"
              />

              <input
                type="text"
                placeholder="Company Industry"
                {...formik.getFieldProps("companyIndustry")}
                className="w-full p-3 border rounded mt-4"
              />
            </div>

            {/* Project Budget */}
            <div>
              <p className="text-lg font-semibold mb-4">Project Budget (USD)*</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => formik.setFieldValue("projectBudget", budget)}
                    className={`p-3 rounded-full border ${
                      formik.values.projectBudget === budget
                        ? "bg-[#C1141D] text-white"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <textarea
                placeholder="Your Project Details"
                {...formik.getFieldProps("projectDetails")}
                className="w-full p-3 border rounded h-32"
              />
            </div>

            {/* Services */}
            <div>
              <p className="text-lg font-semibold mb-4">How we can help you?*</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`p-3 rounded-full border ${
                      formik.values.services.includes(service)
                        ? "bg-[#C1141D] text-white"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            {/* <button type="submit" className="w-full bg-[#C1141D] text-white p-4 rounded-full hover:bg-[#C1141D] transition">
              Submit Inquiry
            </button> */}
            <button type="submit" disabled={loading}
              className="w-full bg-[#C1141D] text-white p-4 rounded-full hover:bg-[#A10F18] transition flex items-center justify-center">
              {loading ? <span className="loader"></span> : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-5 right-5 bg-black text-white px-6 py-3 rounded-lg shadow-lg"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
      <ContactSection />
    </>
  );
}
