
export const globalConfig = {
  site: {
    name: "Kersoan | AI & GenAI Portfolio",
    author: "Kersoan",
    description:
      "AI & Data Science professional focused on Generative AI, Machine Learning, RAG, and Computer Vision.",
    url: "/",
  },

  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Projects",
        href: "/projects",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Certifications",
        href: "/certifications",
      },
      {
        title: "Posts",
        href: "/posts",
      },
    ],
  },

  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Kersoan. All rights reserved.",
    social: {
      linkedin: "https://www.linkedin.com/in/kersoan-plasis/",
      github: "https://github.com/Kersoan",
      medium: "https://medium.com/@kersoan.plasis.2003",
      email: "kersoan.plasis.2003@gmail.com",
    },
  },
} as const;
