export interface ContactLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const contactLinks: ContactLink[] = [
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
    },
    {
      id: "location",
      name: "Location",
      url: "Singapore, SG",
      icon: "location"
    }
  ];