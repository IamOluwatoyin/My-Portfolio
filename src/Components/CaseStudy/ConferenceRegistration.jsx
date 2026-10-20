import React from "react";
import CaseStudy from "../CaseStudy/CaseStudy";

const ConferenceRegistration = () => {
  const data = {
    title: "Conference Registration and Reminder System",
    subtitle: "Automating event registration and attendee engagement",
    problem:
      "Managing conference registrations manually involves repetitive data entry, sending individual confirmation emails, and tracking attendee responses. This process is time-consuming and often leads to missed reminders and low attendance rates.",
    solution:
      "I created an automated system using Zapier that handles registration form submissions, sends instant confirmation emails, and schedules timed reminders before the event. The system also tracks responses and sends follow-up materials automatically.",
    role:
      "I designed the end-to-end automation workflow, configured the Zapier integrations between form tools and email services, set up conditional logic for different ticket types, and ensured reliable delivery of all automated communications.",
    impact: [
      "100% automated registration confirmation process",
      "40% reduction in no-show rates with timely reminders",
      "Seamless attendee experience from registration to event day",
      "Team freed up to focus on event logistics instead of admin tasks",
    ],
    videoUrl: null,
  };

  return <CaseStudy {...data} />;
};

export default ConferenceRegistration;
