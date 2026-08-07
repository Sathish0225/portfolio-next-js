// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  companyWebsite?: string;
  employmentType: "Full-time" | "Contract" | "Internship";
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string;
  techStack?: string[];
  achievements: string[];
  type: "work" | "research" | "education" | "leadership";
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export const experiences: Experience[] = [
  // Regular job positions
  {
    id: "software-developer",
    title: "Software Developer",
    company: "Pedro",
    employmentType: "Full-time",
    location: "Singapore",
    startDate: "2020-09",
    endDate: "",
    isCurrent: true,
    description:
      "Developed and maintained full-stack enterprise applications for web and mobile platforms.",
    techStack: ["Laravel", "React", "Flutter", "MySQL", "AWS", "TypeScript"],
    achievements: [
      "Designed and implemented a comprehensive security workforce management solution (iSecure360) using Laravel PHP for the web and Flutter for the mobile app.",
      "Developed a Visitor Management System (VMS) with QR-based check-in/out, preregistration, and real-time notifications for web and mobile platforms.",
      "Built a full-featured inventory management system for web and mobile, integrating authentication, role-based access, and reporting functionalities.",
      "Managed deployment of all solutions on AWS with high availability, scalability, and secure infrastructure.",
      "Optimized mobile apps for offline functionality and seamless data synchronization once online.",
    ],
    type: "work",
    order: 1,
  },
  {
    id: "avms",
    title: "Lead Developer & Technical Owner",
    company: "Pedro",
    employmentType: "Full-time",
    location: "Singapore, SG",
    startDate: "2025-03",
    endDate: "2025-04",
    techStack: [
      "React.js",
      "TypeScript",
      "Shadcn/UI",
      "Tailwind CSS",
      "MySQL",
      "Laravel PHP (Backend)",
      "Flutter (Mobile App)",
      "Node.js",
      "AWS",
    ],
    description:
      "Led the development of AVMS, a comprehensive Access Control and Visitor Management System for condos, offices, and secure facilities, delivering a seamless web and mobile platform within 2 months.",
    achievements: [
      "Deployed the platform across 20+ condominium and corporate facilities with thousands of monthly visitor and vehicle check-ins.",
      "Reduced lobby and gate congestion by 50% using QR-based and LPR-based fast access.",
      "Automated notifications (email, SMS, and push), improving communication with residents and visitors.",
      "Enhanced compliance and audit readiness with digital visitor logs, vehicle access history, and facility booking reports.",
      "Enabled residents to seamlessly book facilities, submit feedback, and complete e-forms via mobile apps.",
      "Strengthened security with a centralized Access Control Module integrating with turnstiles, barriers, and ANPR cameras.",
    ],
    type: "leadership",
    order: 2,
  },
  {
    id: "isecure360",
    title: "Lead Developer & Technical Owner",
    company: "Pedro",
    employmentType: "Full-time",
    location: "Singapore, SG",
    startDate: "2025-06",
    endDate: "2025-08",
    techStack: [
      "Laravel PHP (Backend)",
      "MySQL",
      "Flutter (Mobile App)",
      "AWS",
    ],
    description:
      "Led the design and implementation of a comprehensive security workforce management solution for both web and mobile platforms, overseeing architecture, development, and deployment.",
    achievements: [
      "Designed and implemented the full-stack application using Laravel PHP for web and Flutter for mobile.",
      "Developed key modules including security guard attendance tracking, incident reporting, guard tour management, supervisory checklist management, and leave management.",
      "Implemented offline mode for guard tour functionality, ensuring seamless data synchronization when the connection is restored.",
      "Ensured application security through best practices for authentication, authorization, and data encryption.",
      "Performed performance tuning and optimization to maintain fast, reliable, and scalable application performance.",
    ],
    type: "leadership",
    order: 3,
  },
  {
    id: "isecurevms",
    title: "Lead Developer & Technical Owner",
    company: "Pedro",
    employmentType: "Full-time",
    location: "Singapore, SG",
    startDate: "2023-11",
    endDate: "2023-12",
    techStack: [
      "Laravel PHP (Backend)",
      "MySQL",
      "Flutter (Mobile App)",
      "AWS",
    ],
    description:
      "Directed the development of a robust visitor management system to enhance security and streamline visitor processes across web and mobile platforms.",
    achievements: [
      "Architected and implemented web and mobile applications using Laravel PHP and Flutter.",
      "Developed visitor and contractor check-in functionalities to ensure smooth and efficient operations.",
      "Implemented preregistration features with automated email notifications to improve security and operational efficiency.",
      "Integrated QR-based check-in and check-out functionality for fast and secure visitor processing.",
      "Ensured application security with best practices for authentication, authorization, and data encryption.",
      "Optimized performance to deliver a reliable and responsive user experience.",
    ],
    type: "leadership",
    order: 4,
  },
  {
    id: "it-engineer",
    title: "IT Engineer",
    company: "Pedro",
    employmentType: "Full-time",
    location: "Singapore, SG",
    startDate: "2020-09",
    endDate: "2021-11",
    description:
      "Managed IT infrastructure including on-premises email and web servers, and configured firewall devices to ensure high security for corporate systems.",
    achievements: [
      "Configured and maintained on-premises email servers and web servers, ensuring reliable and secure internal communications.",
      "Implemented and managed firewall devices and network security policies to protect corporate assets and sensitive data.",
      "Monitored and optimized IT infrastructure performance, ensuring minimal downtime and robust security compliance.",
    ],
    type: "work",
    order: 5,
  },
  {
    id: "digital-alarm-it-support",
    title: "IT Support Engineer",
    company: "Digital Alarm Technologies",
    employmentType: "Full-time",
    location: "Singapore",
    startDate: "2018-03",
    endDate: "2020-07",
    description:
      "Provided IT support and infrastructure management for hardware, software, and network systems, ensuring seamless operations and minimal downtime.",
    achievements: [
      "Acted as primary contact for computer hardware, software issues, and network emergencies.",
      "Managed installation, configuration, maintenance, upgrades, and backups of Windows and Linux-based server machines.",
      "Rolled out servers and software updates/patches, resolving complex IT issues.",
      "Migrated services from Windows Server 2008 to Windows Server 2016.",
      "Set up and configured new hire PCs, laptops, and office hardware using deployment console images.",
    ],
    type: "work",
    order: 6,
  },
  {
    id: "hinduja-global-support",
    title: "Support Engineer",
    company: "Hinduja Global Solutions",
    employmentType: "Full-time",
    location: "Bangalore, Karnataka, India",
    startDate: "2016-06",
    endDate: "2018-01",
    description:
      "Provided technical support for hardware, software, and network issues, while managing server systems and onboarding new hires.",
    achievements: [
      "Troubleshot and resolved hardware, software, and network-related issues.",
      "Set up and configured new hire PCs, laptops, and office hardware using deployment console images.",
      "Installed and configured software applications and peripheral devices.",
      "Managed installation, configuration, maintenance, upgrades, and backups of Windows and Linux-based servers.",
    ],
    type: "work",
    order: 7,
  },
  {
    id: "kbg-services-support",
    title: "Support Engineer",
    company: "KBG Services",
    employmentType: "Full-time",
    location: "Hosur, Tamil Nadu, India",
    startDate: "2015-06",
    endDate: "2016-05",
    description:
      "Managed IT infrastructure, ensuring compliance with organizational standards, and resolved network and server issues for a regional retail chain.",
    achievements: [
      "Managed installation, configuration, maintenance, upgrades, and backups of Windows-based servers and workstations.",
      "Ensured hardware, operating systems, software, and procedures aligned with organizational standards and strategic business plan.",
      "Resolved recurring network failures by troubleshooting LAN/WAN connections across multiple stores.",
    ],
    type: "work",
    order: 8,
  },
];
