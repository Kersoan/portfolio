
import { Post } from '@/types/post';

export const postsConfig = {
  title: "Blog Posts",
  description: "Technical articles and insights on Generative AI, RAG, and intelligent applications.",
  backButton: "Back to Home",
  noPosts: "No posts found matching your search.",
  searchPlaceholder: "Search posts by title...",
  pagination: {
    previous: "Previous",
    next: "Next",
  },
  posts: [
    {
      title: "GenRAG-PDF: AI-Powered Conversational PDF Query System Using LangChain and Gemini-Pro",
      description:
        "Explore how I built an AI-powered multi-PDF question-answering system using Retrieval-Augmented Generation (RAG), LangChain, FAISS, Google Gemini, and Streamlit.",
      date: "2025-10-11",
      image: "/assets/images/posts/post1.jpg",
      slug: "genrag-pdf",
      url: "https://medium.com/@kersoan.plasis.2003/genrag-pdf-ai-powered-conversational-pdf-query-system-using-langchain-and-gemini-pro-dc994b5c47a8",
      tags: [
        "Generative AI",
        "RAG",
        "LangChain",
        "Google Gemini",
        "FAISS",
        "Streamlit",
      ],
      author: "Kersoan",
      readTime: "4",
      content:
        "An AI-powered conversational PDF query system that allows users to upload multiple PDF documents and ask questions using Retrieval-Augmented Generation (RAG). Built with LangChain, FAISS, Google Gemini, and Streamlit.",
      html:
        "<h1>GenRAG-PDF: AI-Powered Conversational PDF Query System</h1><p>An AI-powered multi-PDF question-answering system using Retrieval-Augmented Generation (RAG), LangChain, FAISS, Google Gemini, and Streamlit.</p>",
    },
  ],
} as const;
