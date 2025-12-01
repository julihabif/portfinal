export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;

}

export const jobs: Job[] = [
  {
    company: "Paisanos.io",
    role: "Product Manager",
    period: "Present",
    description: "Leading team to develop innovative solutions for small and big businesses, overseeing product lifecycle from ideation to launch."
  },
  {
    company: "UADE",
    role: "University Professor",
    period: "Present",
    description: "Teaching courses on product management, mentoring students, and guiding them through real-world projects to enhance their practical skills.",
   
  },
  {
    company: "Insside",
    role: "Product Owner",
    period: "2024 November - 2025 August",
    description: "Leading the development of a Compliance and Security Management SaaS product, coordinating cross-functional teams to deliver high-quality solutions that meet market needs.",
  },
  {
    company: "Orbith",
    role: "Product Analyst",
    period: "2023 May - 2024 October",
    description: "Conducted market research and data analysis to inform product development strategies, contributing to the successful launch of new features that enhanced user engagement.",
  },
  {
    company: "SAP",
    role: "Product Owner Intern",
    period: "2020 June - 2023 April",
    description: "Assisted in managing product backlogs and coordinating with development teams to ensure timely delivery of features, gaining hands-on experience in agile methodologies and product lifecycle management.",
  }
];
