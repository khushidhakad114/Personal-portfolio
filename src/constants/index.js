import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";

export const HERO_CONTENT = `I am a passionate Full Stack Developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, Redux, Tailwind, DaisyUi, shadcn/ui as well as back-end technologies like Node.js, Firebase and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Redux, Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2022 - Present",
    role: "B.Tech Student - Computer Science and Engineering",
    company: "Madhav Institute of Technology & Science, Gwalior",
    description: `Currently pursuing my Bachelor's in Technology (B.Tech) in the Computer Science and Engineering (CSE) branch. Focused on developing a strong foundation in software development, algorithms, data structures, and various technologies related to web development and computer science.`,
  },
  {
    year: "2021 - 2022",
    role: "Senior Secondary (12th Grade)",
    company: "Model Convent High School",
    description: `Completed my Senior Secondary Education (12th grade) with a focus on science. Developed an understanding of the core subjects like Physics, Chemistry, and Mathematics, which laid the foundation for my future studies in computer science.`,
  },
  {
    year: "2019 - 2020",
    role: "Secondary (10th Grade)",
    company: "Model Convent High School",
    description: `Completed my Secondary Education (10th grade) with a strong academic performance and a focus on building a strong understanding of core subjects. This phase marked the beginning of my interest in technology and programming.`,
  },
];

export const PROJECTS = [
  {
    title: "Restaurant Website",
    image: project1,
    description:
      "A fully functional Restaurant website with features like product listing restaurants with configue driven UI, add to cart dishes, and user authentication.",
    technologies: ["React", "Tailwind", "Redux", "DaisyUi", "Firebase"],
    liveLink: "https://github.com/khushidhakad114/React",
  },
  {
    title: "Weather Web-App",
    image: project2,
    description:
      "An application for checking live weather updates with features like location search, weather forecast.",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: "https://weather-six-beta-57.vercel.app/",
  },
];

export const CONTACT = {
  address: "45, New Indra Nagar Thatipur, Gwalior, MP, India",
  phoneNo: "+91 6264487893 ",
  email: "khushidhakad2003@gmail.com",
};
