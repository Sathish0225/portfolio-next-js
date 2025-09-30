export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "iSecure360",
    title: "iSecure360",
    description:
      "iSecure360 simplifies security workforce and operations management with an intuitive interface, available on both mobile and web platforms. Its multi-tenant setup ensures isolated data for each client while maintaining a single codebase for efficient maintenance.",
    longDescription:
      "iSecure360 is a comprehensive security management platform designed to streamline guard attendance, patrol monitoring, incident reporting, and visitor tracking. It replaces manual logbooks with real-time insights, automated workflows, and customizable reports—empowering organizations to improve safety, compliance, and operational efficiency. With both web and mobile support, iSecure360 ensures seamless communication and accountability across security teams.",
    technologies: [
      "Laravel PHP",
      "MySQL",
      "Bootstrap 4",
      "jQuery",
      "Flutter (Mobile App)",
    ],
    achievements: [
      "Deployed across multiple client sites with 500+ active security staff managed daily",
      "Reduced incident reporting time by 40% through real-time mobile app submissions",
      "Enabled offline guard tour logging with auto-sync, ensuring 100% data accuracy even in low-connectivity environments",
      "Improved visitor management efficiency by 60% using QR-based check-in and pre-registration workflows",
    ],
    image: "/images/projects/iSecure360.png",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "iSecureVMS",
    title: "iSecureVMS",
    description:
      "iSecureVMS streamlines visitor and contractor management with a secure, user-friendly platform available on both web and mobile. It enhances workplace safety and efficiency through digital workflows and real-time monitoring.",
    longDescription:
      "iSecureVMS is a modern visitor management system designed for offices, factories, and secure facilities. It replaces manual logbooks with digital pre-registration, QR-based check-in/out, real-time notifications, and customizable reports. The system supports both visitor and contractor flows, integrates with access control devices, and provides mobile app functionality for seamless on-site operations. With a multi-tenant setup, each client has isolated data security while sharing a single, easily maintainable codebase.",
    technologies: [
      "Laravel PHP",
      "MySQL",
      "Bootstrap 4",
      "jQuery",
      "Flutter (Mobile App)",
    ],
    achievements: [
      "Deployed across 20+ client facilities with thousands of monthly visitor check-ins",
      "Reduced lobby congestion by 50% using QR code–based fast check-in/out",
      "Automated email and SMS notifications, improving visitor communication efficiency",
      "Enhanced compliance by digitizing visitor logs and enabling customizable reporting",
    ],
    image: "/images/projects/iSecureVMS.png",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "avms",
    title: "AVMS",
    description:
      "AVMS is a comprehensive Access Control and Visitor Management System for condos, offices, and secure facilities, combining visitor, vehicle, and facility management in one seamless platform across web and mobile.",
    longDescription:
      "AVMS is an integrated platform designed for residential condos, offices, and high-security facilities. It goes beyond visitor management by offering modules for Vehicle Registration, Access Control, Facility Booking, Feedback, and E-Forms. The system streamlines daily operations with digital pre-registration, QR-based check-in/out, license plate recognition (LPR) for vehicles, and real-time notifications. Residents and administrators benefit from a unified web and mobile solution powered by React.js, Flutter, and MySQL. With a secure multi-tenant architecture, each property enjoys isolated data security while sharing a single, maintainable codebase.",
    technologies: [
      "React.js",
      "TypeScript",
      "Shadcn/UI",
      "Tailwind CSS",
      "MySQL",
      "Laravel PHP (Backend)",
      "Flutter (Mobile App)",
      "Node.js",
    ],
    achievements: [
      "Deployed across 20+ condominium and corporate facilities with thousands of monthly visitor and vehicle check-ins",
      "Reduced lobby and gate congestion by 50% with QR-based and LPR-based fast access",
      "Automated notifications (email, SMS, and push), improving communication with residents and visitors",
      "Enhanced compliance and audit readiness with digital visitor logs, vehicle access history, and facility booking reports",
      "Enabled residents to seamlessly book facilities, submit feedback, and complete e-forms through mobile apps",
      "Strengthened security with centralized Access Control Module integrating with turnstiles, barriers, and ANPR cameras",
    ],
    image: "/images/projects/avms.png",
    github: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "vrs",
    title: "VRS (Vehicle Registration System)",
    description:
      "VRS is a Windows-based Vehicle Registration System designed to log visitor and resident vehicle movement with integrated live video feed and automatic license plate recognition (ANPR).",
    longDescription:
      "The Vehicle Registration System (VRS) is a desktop application tailored for condominiums, offices, and secure facilities to streamline vehicle entry and exit management. Built using C# WinForms and integrated with Hikvision ANPR cameras, the system automatically captures license plate numbers and logs vehicle movement in real time. Security staff can monitor live video feeds directly from the application, while all vehicle activity is securely stored in a MySQL database for reporting and auditing. The solution enhances gate security, reduces manual entry errors, and ensures accurate visitor and resident vehicle tracking.",
    technologies: [
      "C# WinForms",
      "Hikvision ANPR API",
      "MySQL",
      "Windows Desktop Application",
    ],
    achievements: [
      "Successfully deployed across multiple condominiums and corporate sites for vehicle access control",
      "Automated license plate recognition reduced manual entry errors and improved gate processing efficiency",
      "Integrated live video feed allowed security teams to verify vehicle entry in real time",
      "Maintained accurate and searchable records of vehicle entry/exit for compliance and security audits",
      "Improved visitor vehicle tracking and reduced gate congestion by automating the registration process",
    ],
    image: "/images/projects/vehicle-registration-system.png",
    github: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "lpr-announcement",
    title: "LPR & Announcement System",
    description:
      "A Windows-based License Plate Recognition and Announcement System using Dahua ANPR cameras, C#, and MySQL to automate vehicle logging and provide real-time text-to-speech announcements.",
    longDescription:
      "The LPR & Announcement System is a desktop application built with C# to enhance vehicle access management in schools, condominiums, offices, and gated communities. Integrated with Dahua ANPR cameras, the system automatically captures and logs license plates into a MySQL database. It features real-time text-to-speech (TTS) announcements to alert security staff or residents of vehicle entry and exit events. The system ensures seamless monitoring of vehicle movement, reduces manual workload for security teams, and improves overall site security by providing both visual and audio confirmation of entries.",
    technologies: [
      "C# WinForms",
      "Dahua ANPR Camera API",
      "Text-to-Speech (TTS)",
      "MySQL",
      "Windows Desktop Application",
    ],
    achievements: [
      "Successfully deployed for automated vehicle entry logging and announcement at secure facilities",
      "Integrated with Dahua ANPR cameras for accurate, real-time license plate recognition",
      "Implemented text-to-speech announcements to notify security and residents during vehicle entry",
      "Reduced manual effort of guards by automating both logging and audio confirmation processes",
      "Ensured reliable vehicle tracking with centralized storage of all entry/exit events in MySQL",
    ],
    image: "/images/projects/lpr-announcement.png",
    github: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "idata-label-printer",
    title: "iData Label Printer (Flutter Plugin)",
    description:
      "A custom Flutter plugin for Android that enables seamless Bluetooth connectivity with iData thermal and label printers for on-demand printing.",
    longDescription:
      "The iData Label Printer plugin is a Flutter package designed to simplify integration with iData thermal and label printers over Bluetooth. Built for Android, it allows developers to easily print text, barcodes, and labels directly from their Flutter applications without relying on third-party SDKs. The plugin manages Bluetooth discovery, pairing, and communication with the printer, ensuring fast and reliable print operations. It is optimized for enterprise use cases such as inventory management, logistics, and visitor management systems requiring portable label printing.",
    technologies: [
      "Flutter",
      "Dart",
      "Bluetooth API (Android)",
      "iData Printer SDK",
    ],
    achievements: [
      "Developed a reusable Flutter plugin for Android supporting iData label and thermal printers",
      "Enabled seamless Bluetooth pairing and printing of text, barcodes, and QR codes from mobile apps",
      "Optimized for enterprise scenarios such as inventory labeling, logistics, and visitor badge printing",
      "Reduced integration complexity by abstracting low-level printer SDK details into simple Flutter APIs",
    ],
    image: "/images/projects/iDataLabelPrinter.png",
    github: "https://github.com/Sathish0225/idata_label_printer",
    liveUrl: "https://pub.dev/packages/idata_label_printer",
    featured: false,
  },
  {
    id: "srm",
    title: "SRM (Service Report Management System)",
    description:
      "A Service Report Management System built with CodeIgniter 4, Bootstrap 4, and MySQL, with a companion Flutter app for field technicians to manage service reports on the go.",
    longDescription:
      "SRM is a complete Service Report Management System designed to streamline service operations for organizations. The web platform, built with CodeIgniter 4, Bootstrap 4, and MySQL, provides administrators with tools to manage clients, service requests, and reports through an intuitive CRUD interface. The companion Flutter mobile app empowers technicians to log service activities, capture client signatures, and update report statuses in real time. This unified solution improves efficiency, reduces paperwork, and ensures timely and accurate service reporting across teams.",
    technologies: [
      "CodeIgniter 4 (PHP)",
      "Bootstrap 4",
      "MySQL",
      "CRUD Operations",
      "Flutter (Mobile App)",
    ],
    achievements: [
      "Developed a full-stack service management system with web and mobile integration",
      "Enabled technicians to log reports and capture client signatures directly from the Flutter app",
      "Reduced paperwork and manual errors by digitizing service reports",
      "Implemented CRUD-based workflows for managing clients, services, and reports",
      "Improved operational efficiency by synchronizing mobile updates with the web system in real time",
    ],
    image: "/images/projects/service_order.png",
    github: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    description:
      "A web-based Inventory Management System built with Core PHP, MySQL, and HTML to track, manage, and update stock efficiently.",
    longDescription:
      "The Inventory Management System is a simple yet effective web application designed to help businesses manage stock and inventory operations. Built using Core PHP and MySQL, the system provides full CRUD functionality for products, categories, suppliers, and stock entries. A clean HTML-based interface allows users to easily add, edit, delete, and view inventory items. The system ensures accurate tracking of stock levels, reduces manual errors, and provides a foundation for small to medium-sized business inventory management.",
    technologies: ["Core PHP", "MySQL", "HTML", "CRUD Operations"],
    achievements: [
      "Developed a full CRUD-based inventory management application using Core PHP and MySQL",
      "Enabled businesses to efficiently track stock levels, categories, and suppliers",
      "Provided a clean HTML interface for easy product and stock management",
      "Reduced manual errors and improved accuracy of inventory records",
      "Created a lightweight system suitable for small to medium-sized enterprises",
    ],
    image: "/images/projects/inventory_system.png",
    github: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "code-editor-io",
    title: "Code Editor io",
    description:
      "An online code and markdown editor built with React.js, featuring live preview, GitHub Flavored Markdown (GFM) support, and local auto-save.",
    longDescription:
      "Code Editor io is a web-based tool designed for developers to quickly prototype websites and write markdown documents. The code editor supports HTML, CSS, and JavaScript with instant live preview of changes, making it easy to test and visualize ideas in real time. The markdown editor supports GitHub Flavored Markdown (GFM), custom HTML tags, and includes a toolbar for formatting with an instant preview panel. Both editors feature auto-save functionality powered by Local Storage, ensuring users never lose their work. The platform is ideal for building README files, testing code snippets, or learning web development basics.",
    technologies: ["React.js", "HTML", "CSS", "Local Storage API"],
    achievements: [
      "Built a dual-mode editor for both code and markdown with real-time preview",
      "Implemented GitHub Flavored Markdown (GFM) support with custom HTML tag rendering",
      "Added a rich toolbar to simplify markdown editing for non-technical users",
      "Enabled offline persistence with auto-save using browser Local Storage",
      "Created a lightweight, browser-based alternative to desktop editors for quick prototyping",
    ],
    image: "/images/projects/code-editor-io.png",
    github: "https://github.com/Sathish0225/code-editor",
    liveUrl: "https://code-editor-sigma-one.vercel.app/",
    featured: false,
  },
  {
    id: "shareease",
    title: "ShareEase",
    description:
      "ShareEase is a secure and user-friendly file sharing platform designed for easy and efficient exchange of files.",
    longDescription:
      "ShareEase is an intuitive web application that enables users to upload, manage, and share files of various types and sizes with ease. Built with Node.js, Express, React.js, and MongoDB, the platform ensures secure storage and fast file delivery. Real-time collaboration is powered by Socket.IO, allowing instant updates and notifications when files are shared. With its responsive Bootstrap-based design, ShareEase provides a simple yet robust solution for both personal and team-based file sharing.",
    technologies: [
      "Node.js",
      "Express",
      "React.js",
      "Bootstrap",
      "MongoDB",
      "Socket.IO",
    ],
    achievements: [
      "Built a full-stack file sharing application with secure file handling",
      "Integrated real-time notifications and updates using Socket.IO",
      "Designed a responsive and intuitive UI with Bootstrap and React",
      "Implemented scalable storage and retrieval using MongoDB",
      "Enhanced collaboration by allowing quick file exchange between users",
    ],
    image: "/images/projects/shareease.png",
    github: "https://github.com/Sathish0225/shareease",
    liveUrl: "https://shareease.vercel.app/",
    featured: false,
  },
  {
    id: "todo-app",
    title: "Todo App",
    description:
      "A simple yet powerful to-do list app to manage tasks, deadlines, and priorities efficiently.",
    longDescription:
      "The Todo App is designed to help users stay organized and improve productivity. With an intuitive interface built using React.js, tasks can be easily added, updated, or removed. Users can set deadlines and prioritize tasks to focus on what matters most. The backend powered by Node.js ensures scalability, while a lightweight frontend built with HTML and CSS provides a smooth user experience.",
    technologies: ["Node.js", "React.js", "HTML", "CSS"],
    achievements: [
      "Developed a clean and user-friendly task management app",
      "Enabled deadline tracking and task prioritization",
      "Simplified collaboration with task lists accessible via the web",
      "Improved productivity for personal and team use",
    ],
    image: "/images/projects/todo-list-app.png",
    github: "https://github.com/Sathish0225/todo-list-app",
    liveUrl: "https://todo-list-app-three-theta.vercel.app/",
    featured: false,
  },
  {
    id: "old-portfolio",
    title: "Old Portfolio",
    description:
      "A professional portfolio website to showcase skills, projects, and achievements.",
    longDescription:
      "The Old Portfolio was a personal website designed to highlight projects, professional achievements, and technical skills. Built with React.js, TailwindCSS, HTML, and CSS, it featured a responsive and modern design that helped in connecting with potential employers and clients. The portfolio showcased creativity and technical expertise while leaving a lasting impression.",
    technologies: ["React.js", "HTML", "CSS", "TailwindCSS"],
    achievements: [
      "Created a personal portfolio website to showcase work and achievements",
      "Implemented a responsive design using TailwindCSS",
      "Enhanced professional visibility and networking opportunities",
      "Served as a foundation for later upgraded portfolio projects",
    ],
    image: "/images/projects/portfolio-old.png",
    github: "https://github.com/Sathish0225/portfolio-website",
    liveUrl: "",
    featured: false,
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    description:
      "A web-based Sudoku solver that instantly solves valid puzzles entered by the user.",
    longDescription:
      "Sudoku Solver is a React.js application designed to assist users in solving Sudoku puzzles quickly. Users can input any valid Sudoku configuration, and the app instantly calculates and displays the solution. Built with React, HTML, and CSS, the tool is lightweight, fast, and a great learning exercise in algorithm implementation.",
    technologies: ["React.js", "HTML", "CSS"],
    achievements: [
      "Built a functional Sudoku solving application using React",
      "Implemented efficient backtracking algorithm for solving puzzles",
      "Created a clean and responsive UI for user-friendly puzzle input",
      "Helped users solve challenging Sudoku puzzles within seconds",
    ],
    image: "/images/projects/sudoku-solver.png",
    github: "https://github.com/Sathish0225/sudoku-solver",
    liveUrl: "https://sudoku-solver-gilt-eight.vercel.app/",
    featured: false,
  },
  {
    id: "small-workouts",
    title: "Small Workouts",
    description:
      "A collection of short coding challenges to strengthen understanding of JavaScript functions.",
    longDescription:
      "Small Workouts is a set of bite-sized exercises designed to improve programming fundamentals, especially function logic in JavaScript. These challenges are implemented in plain HTML, CSS, and JavaScript, focusing on core problem-solving skills without external libraries. The project serves as a learning tool to sharpen coding abilities through hands-on practice.",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Designed multiple small exercises to reinforce JavaScript concepts",
      "Strengthened understanding of functions and logic building",
      "Provided a lightweight environment for quick coding practice",
      "Helped in improving problem-solving and algorithmic thinking",
    ],
    image: "/images/projects/small-workouts.jpg",
    github: "https://github.com/Sathish0225/codeExamples",
    liveUrl: "",
    featured: false,
  },
];
