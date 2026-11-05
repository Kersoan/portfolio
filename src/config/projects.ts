
export const projectsConfig = {
  title: "My Projects",
  description:
    "Explore my AI, Generative AI, Machine Learning, and Computer Vision projects, built to solve practical problems.",
  noProjects: "Projects coming soon.",
  items: [
    {
      title: "GenRAG-PDF",
      description:
        "An AI-powered multi-PDF chat application using Retrieval-Augmented Generation (RAG), LangChain, FAISS, Google Gemini, and Streamlit.",
      href: "https://github.com/Kersoan/GenRAG-PDF",
      imageUrl: "/assets/images/projects/project1.png"
    },
    {
      title: "IT Support Ticket Classification",
      description:
        "An ML and NLP application that classifies IT support tickets into categories such as network, database, security, and application issues.",
      href: "https://github.com/Kersoan/IT_Ticket_Classification",
      imageUrl: "/assets/images/projects/project2.png"
    },
    {
      title: "Vehicle Speed Detection",
      description:
        "A computer vision project using Python and OpenCV to detect moving vehicles and estimate their speed from video footage.",
      href: "https://github.com/Kersoan/Real-Time-Vehicle-Speed-Detection-Using-Computer-Vision.git",
      imageUrl: "/assets/images/projects/project3.png"
    },
    {
      title: "Lane Detection for Autonomous Vehicles",
      description:
        "A computer vision project using color masking, region-of-interest selection, Canny edge detection, and the Hough transform to identify road lanes.",
      href: "https://github.com/Kersoan/Enhanced-Lane-Detection-for-Autonomous-Vehicles.git",
      imageUrl: "/assets/images/projects/project4.png"
    }
  ]
} as const;
