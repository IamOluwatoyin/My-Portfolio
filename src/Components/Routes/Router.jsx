import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import RecruitmentEmailAutomation from '../CaseStudy/RecruitmentEmailAutomation.jsx'
import ConferenceRegistration from '../CaseStudy/ConferenceRegistration.jsx'
import WebsiteFAQAssistant from '../CaseStudy/WebsiteFAQAssistant.jsx'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/case-study/recruitment-email-automation',
    element: <RecruitmentEmailAutomation />
  },
  {
    path: '/case-study/conference-registration',
    element: <ConferenceRegistration />
  },
  {
    path: '/case-study/website-faq-assistant',
    element: <WebsiteFAQAssistant />
  }
])



