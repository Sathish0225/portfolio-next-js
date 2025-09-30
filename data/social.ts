export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/Sathish0225",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sathishkumar-ranganathan-a96626105/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:rssathishkumar@icloud.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+6588788304",
      icon: "phone"
    }
  ];