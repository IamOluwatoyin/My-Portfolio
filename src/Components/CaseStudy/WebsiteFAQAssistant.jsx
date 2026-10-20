import React from "react";
import CaseStudy from "../CaseStudy/CaseStudy";

const WebsiteFAQAssistant = () => {
  const data = {
    title: "Website FAQ Assistant",
    subtitle: "Building an AI-powered chatbot for instant customer support",
    problem:
      "Businesses receive repetitive questions from visitors and customers, which consume support team time and lead to slow response rates. Static FAQ pages are often hard to navigate and don't provide personalized answers to specific user queries.",
    solution:
      "I developed an AI-powered FAQ assistant using Voiceflow that understands natural language queries and provides instant, accurate responses. The chatbot is trained on company knowledge base content and can handle multiple conversation flows.",
    role:
      "I designed the conversation flows, configured the AI training data, built the chatbot interface, and integrated it seamlessly into the website. I also set up analytics to track common questions and improve responses over time.",
    impact: [
      "60% reduction in repetitive support tickets",
      "24/7 instant response for common questions",
      "Improved user satisfaction with faster resolution times",
      "Support team able to focus on complex, high-value inquiries",
    ],
    videoUrl: null,
  };

  return <CaseStudy {...data} />;
};

export default WebsiteFAQAssistant;
