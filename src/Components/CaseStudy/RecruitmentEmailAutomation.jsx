import React from "react";
import CaseStudy from "../CaseStudy/CaseStudy";

const RecruitmentEmailAutomation = () => {
  const data = {
    title: "Recruitment Email Automation",
    subtitle: "Streamlining the hiring process with automated email workflows",
    problem:
      "Recruitment teams often spend hours manually sending emails to candidates at various stages of the hiring process. This leads to delays, inconsistent communication, and a poor candidate experience. Important follow-ups get missed, and the overall hiring timeline extends unnecessarily.",
    solution:
      "I built an automated email workflow using n8n that triggers personalized emails based on candidate status changes. The system automatically sends application confirmations, interview invitations, rejection notices, and offer letters with appropriate templates and timing.",
    role:
      "As the automation builder, I designed the workflow logic, integrated the email templates, configured the trigger conditions, and tested the entire system to ensure reliable delivery and proper personalization.",
    impact: [
      "80% reduction in manual email handling time",
      "Faster candidate response times",
      "Consistent and professional communication",
      "Improved candidate experience and employer brand",
    ],
    videoUrl: null,
  };

  return <CaseStudy {...data} />;
};

export default RecruitmentEmailAutomation;
