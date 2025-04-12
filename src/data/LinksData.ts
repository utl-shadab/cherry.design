

// Type for a single navigation link
export type NavLink = {
    id: number;
    label: string;
    href: string;
  };
;
  
  // Main navigation links data
  export const navLinks: NavLink[] = [
    { id: 1, label: "Works", href: "/projects" },
    { id: 2, label: "Services", href: "/services" }, 
    { id: 3, label: "About", href: "/about" },
    { id: 4, label: "Blogs", href: "/blog" },
  ];
  
  export const startProjectLink: NavLink = {
    id: 5,
    label: "Start a Project",
    href: "/contact",
  };