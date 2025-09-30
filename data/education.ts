export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "panimalar",
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Panimalar Engineering Colleage",
      location: "Chennai, India",
      startDate: "October 2011",
      endDate: "May 2015",
      gpa: "6.8/10.00"
    }
  ];