import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaRobot,
} from "react-icons/fa6";
import { FcTwoSmartphones } from "react-icons/fc";
import { GrMapLocation } from "react-icons/gr";
import { TbMessages } from "react-icons/tb";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import BackToTopButton from "../BackToTopButton";

const RESUME_URL =
  "/documents/Oluwatoyin_Olatorera_Solomon_Automation_Engineer_CV.pdf";

const rotatingTitles = [
  "Automation Engineer",
  "Frontend Developer",
  "Workflow Automation Specialist",
  "Problem Solver",
];

const frontendProjects = [
  {
    title: "RefillXpress",
    description:
      "A platform connecting customers to nearby gas refill vendors, with role-based experiences for customers, vendors and riders, live delivery updates and online payments.",
    image: "/Images/heroImage.png",
    tools: ["React", "Context API"],
    link: "https://refill-xpress.vercel.app/",
  },
  {
    title: "Dawn Eats",
    description:
      "A breakfast ordering experience for busy professionals, offering flexible delivery and pickup options from local restaurants.",
    image: "/Images/dawnEats.png",
    tools: ["React", "Axios", "REST APIs"],
    link: "https://dawn-eats-break-fast-website.vercel.app/",
  },
  {
    title: "CryptoScope",
    description:
      "A responsive cryptocurrency dashboard that presents live market data, gainers, losers and market statistics in a clear interface.",
    image: "/Images/crypto-alert-app.png",
    tools: ["React", "REST APIs"],
    link: "https://crypto-alert-theta.vercel.app/",
  },
];

const automationProjects = [
  {
    title: "Recruitment Email Automation",
    tools: "n8n · Email · Conditional logic",
    description:
      "Automates candidate communication by sending personalised follow-ups and screening messages based on application status.",
    route: "/case-study/recruitment-email-automation",
  },
  {
    title: "Conference Registration & Reminder System",
    tools: "Zapier · Forms · Email reminders",
    description:
      "Captures registrations, organises attendee information and sends scheduled reminders to reduce manual coordination and no-shows.",
    route: "/case-study/conference-registration",
  },
  {
    title: "Website FAQ Assistant",
    tools: "Voiceflow · Conversational AI",
    description:
      "An AI-assisted website chatbot that answers frequent questions and helps visitors find information without waiting for manual support.",
    route: "/case-study/website-faq-assistant",
  },
];

const skillGroups = [
  {
    title: "Automation & AI",
    skills: [
      "n8n",
      "Zapier",
      "Workflow Design",
      "API & Webhook Integration",
      "Email Automation",
      "Voiceflow",
      "Claude Code",
      "AI-assisted Workflows",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "TanStack Query",
      "Axios",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & Integrations",
    skills: [
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Webhooks",
      "n8n Cloud",
      "Vercel",
      "Git & GitHub",
    ],
  },
  {
    title: "Product & Operations",
    skills: [
      "Process Mapping",
      "Requirements Gathering",
      "User Research",
      "Recruitment Operations",
      "Stakeholder Coordination",
      "Technical Documentation",
      "Business Process Improvement",
      "Product Thinking",
    ],
  },
];

const Body = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTextIndex((current) => (current + 1) % rotatingTitles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    emailjs.init("P460QdZPZnwVrI4Cw");
  }, []);

  const submit = async (data) => {
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      await emailjs.send("service_urshq6v", "template_ru2v9kg", {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        time: new Date().toLocaleString(),
      });

      setStatus("Message sent successfully!");
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again later.");
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main>
        <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[#FEEAC9] pt-16 sm:pt-20">
          {/* Original curved desktop/tablet hero */}
          <div className="relative hidden min-h-[calc(100svh-5rem)] items-center md:flex">
            <div className="absolute inset-y-0 left-0 w-[56%] rounded-r-[45%] bg-white" />

            <div className="portfolio-container relative z-20 grid min-h-[calc(100svh-5rem)] grid-cols-[minmax(0,1.3fr)_minmax(0,.85fr)] items-center gap-6 lg:gap-12">
              <div className="order-2 col-start-2 row-start-1 min-w-0 max-w-xl py-12">
                <p className="text-2xl font-bold text-yellow-500">Hi there, I’m</p>
                <h1 className="mt-3 text-5xl font-bold leading-[1.04] tracking-tight lg:text-7xl">
                  Torera<br />Solomon
                </h1>

                <div className="relative mt-5 h-12 overflow-hidden">
                  {rotatingTitles.map((title, index) => (
                    <span
                      key={title}
                      className={`absolute inset-y-0 left-0 flex items-center text-2xl font-semibold text-yellow-500 transition-all duration-500 lg:text-3xl ${
                        index === textIndex
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      {title}
                    </span>
                  ))}
                </div>

                <p className="mt-4 max-w-lg text-base leading-7 text-slate-700 lg:text-lg">
                  I build workflow automations and responsive web applications that
                  reduce repetitive work and turn complex processes into practical
                  digital experiences.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#featured-work" className="primary-link">View my work <FaArrowRight /></a>
                  <a href={RESUME_URL} className="secondary-link">View résumé</a>
                </div>

                <div className="mt-7 flex gap-3">
                  <a className="account-icon" href="https://github.com/IamOluwatoyin" aria-label="Oluwatoyin on GitHub"><FaGithub /></a>
                  <a className="account-icon" href="https://www.linkedin.com/in/oluwatoyin-olatorera-solomon-38b6291b3" aria-label="Oluwatoyin on LinkedIn"><FaLinkedinIn /></a>
                  <a className="account-icon" href="mailto:toyinsolomon4@gmail.com" aria-label="Email Oluwatoyin"><FaEnvelope /></a>
                </div>
              </div>

              <img
                src="/Images/toreraCorporateshot.png"
                alt="Oluwatoyin Olatorera Solomon"
                className="pointer-events-none order-1 col-start-1 row-start-1 block h-[calc(92svh-5rem)] min-h-[30rem] w-full min-w-0 self-end object-contain object-bottom"
              />
            </div>
          </div>

          {/* Original mobile photograph and glass panel */}
          <div className="relative min-h-[calc(100svh-4rem)] md:hidden">
            <img
              src="/Images/toreraCorporateshot.png"
              alt="Oluwatoyin Olatorera Solomon"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-3 bottom-4 rounded-3xl border border-white/25 bg-black/45 p-5 text-center text-white shadow-2xl backdrop-blur-md sm:inset-x-6 sm:p-7">
              <p className="text-base font-bold text-yellow-400">Hi there, I’m</p>
              <h1 className="mt-1 text-4xl font-bold leading-tight">Torera Solomon</h1>

              <div className="relative mx-auto mt-2 h-10 max-w-sm overflow-hidden">
                {rotatingTitles.map((title, index) => (
                  <span
                    key={title}
                    className={`absolute inset-0 flex items-center justify-center text-lg font-semibold text-yellow-400 transition-all duration-500 ${
                      index === textIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {title}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                <a href="#featured-work" className="primary-link w-full">View my work <FaArrowRight /></a>
                <a href={RESUME_URL} className="secondary-link w-full">View résumé</a>
              </div>

              <div className="mt-4 flex justify-center gap-3">
                <a className="account-icon" href="https://github.com/IamOluwatoyin" aria-label="Oluwatoyin on GitHub"><FaGithub /></a>
                <a className="account-icon" href="https://www.linkedin.com/in/oluwatoyin-olatorera-solomon-38b6291b3" aria-label="Oluwatoyin on LinkedIn"><FaLinkedinIn /></a>
                <a className="account-icon" href="mailto:toyinsolomon4@gmail.com" aria-label="Email Oluwatoyin"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="about-me" className="bg-white py-16 sm:py-20">
          <div className="portfolio-container grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="section-label">About me</p>
              <h2 className="section-title max-w-3xl">
                I connect people, processes and technology.
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-slate-700 sm:text-lg">
                <p>
                  My background in human resources and operations taught me how
                  business problems affect both people and performance. I moved into
                  technology to build practical solutions to those problems.
                </p>
                <p>
                  Today, I combine frontend development, workflow automation, APIs
                  and AI tools to create intuitive applications and reduce repetitive
                  work. I enjoy translating real business needs into systems that are
                  clear, reliable and easy to use.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={RESUME_URL} className="primary-link">
                  View résumé
                </a>
                <a href="#contact" className="secondary-link">
                  Contact me
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-[#FEEAC9] shadow-xl">
              <img
                src="/Images/hoodieImage.png"
                alt="Oluwatoyin working in technology"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="featured-work" className="bg-[#FEEAC9] py-16 sm:py-20">
          <div className="portfolio-container">
            <p className="section-label">Featured project</p>
            <h2 className="section-title">GrowthLens 360</h2>

            <article className="mt-9 overflow-hidden rounded-3xl border border-yellow-200 bg-[#FFF8E8] shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#eab308] focus-within:-translate-x-1 focus-within:-translate-y-1 focus-within:shadow-[12px_12px_0_0_#eab308] motion-reduce:transform-none motion-reduce:transition-none">
              <div className="flex min-w-0 flex-col">
                <div className="min-w-0 border-b border-yellow-200 bg-[#FEEAC9] p-3 sm:p-6">
                  <img
                    src="/Images/growthlens-dashboard.png"
                    alt="GrowthLens 360 dashboard"
                    className="block h-auto w-full max-w-full rounded-xl object-contain shadow-lg"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                  <span className="w-fit rounded-full bg-green-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    Full-stack diagnostic and automation platform
                  </span>
                  <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                    Clear perspectives. Better business decisions.
                  </h3>
                  <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                    GrowthLens 360 helps small-business owners compare how they view
                    their business with what customers and employees experience. It
                    calculates perspective gaps, produces AI-assisted insights,
                    recommends practical actions and tracks progress.
                  </p>
                  <ul className="mt-6 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
                    <li>• Multi-perspective assessments</li>
                    <li>• Automated email workflows</li>
                    <li>• AI-generated business analysis</li>
                    <li>• Recommendations and action tracking</li>
                    <li>• In-app notifications</li>
                    <li>• Secure role-based access</li>
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {["React", "TypeScript", "Supabase", "n8n", "AI", "Vercel"].map((tool) => (
                      <span key={tool} className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-bold text-white">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="https://growthlens360.vercel.app" className="primary-link">
                      View live project <FaArrowRight />
                    </a>
                    <a href="https://github.com/IamOluwatoyin/Growthlens360" className="secondary-link">
                      View source <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="automations" className="bg-white py-20 sm:py-24">
          <div className="portfolio-container">
            <p className="section-label">Automation case studies</p>
            <h2 className="section-title">Workflows built around real business needs</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              These projects show how I analyse a manual process, map its decisions
              and build a reliable workflow around the people using it.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {automationProjects.map((project) => (
                <article key={project.title} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#eab308] focus-within:-translate-x-1 focus-within:-translate-y-1 focus-within:shadow-[12px_12px_0_0_#eab308] motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
                  <p className="text-sm font-bold text-green-700">{project.tools}</p>
                  <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-700">{project.description}</p>
                  <Link to={project.route} className="mt-7 inline-flex items-center gap-2 font-bold text-yellow-600 hover:text-yellow-700">
                    View case study <FaArrowRight />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#FEEAC9] py-20 sm:py-24">
          <div className="portfolio-container">
            <p className="section-label">Frontend projects</p>
            <h2 className="section-title">Responsive products and interfaces</h2>

            <div className="mt-10 grid gap-7 lg:grid-cols-3">
              {frontendProjects.map((project) => (
                <article key={project.title} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#eab308] focus-within:-translate-x-1 focus-within:-translate-y-1 focus-within:shadow-[12px_12px_0_0_#eab308] motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="h-56 w-full overflow-hidden bg-[#FEEAC9] sm:h-64 lg:h-56">
                    <img src={project.image} alt={`${project.title} interface`} className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800">{tool}</span>
                      ))}
                    </div>
                    <a href={project.link} className="mt-5 inline-flex items-center gap-2 font-bold text-yellow-600 hover:text-yellow-700">
                      View project <FaArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="portfolio-container">
            <p className="section-label !text-yellow-400">Experience</p>
            <h2 className="section-title !text-white">Where I have applied these skills</h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-yellow-400">
                  July 2026 – Present
                </p>
                <h3 className="mt-3 text-2xl font-bold">Countryside / BlowPay</h3>
                <p className="mt-1 font-semibold text-white/70">
                  Frontend Development & Digital Operations
                </p>
                <p className="mt-5 leading-7 text-white/75">
                  Support responsive product interfaces, digital processes and
                  operational improvements while collaborating across business and
                  technical requirements.
                </p>
              </article>

              <article className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-yellow-400">
                  May 2025 – November 2025
                </p>
                <h3 className="mt-3 text-2xl font-bold">The Curve Africa</h3>
                <p className="mt-1 font-semibold text-white/70">Frontend Developer</p>
                <p className="mt-5 leading-7 text-white/75">
                  Built and refined responsive web experiences, worked with APIs and
                  translated interface designs into accessible, reusable components.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-white py-20 sm:py-24">
          <div className="portfolio-container min-w-0 max-w-full">
            <div className="text-center">
              <p className="section-label">Skills and tools</p>
              <h2 className="section-title">A practical, connected toolkit</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                I combine automation, frontend development and operational thinking
                to deliver complete solutions and connected workflows.
              </p>
            </div>

            <div className="mt-12 grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">
              {skillGroups.map((group, index) => {
                const SkillIcon = [FaRobot, FaCode, FaDatabase, FaBriefcase][index];

                return (
                  <article key={group.title} className="flex min-w-0 flex-col gap-4 rounded-3xl border border-yellow-200 bg-white p-5 shadow-sm sm:flex-row sm:gap-5 sm:p-8">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-2xl text-white">
                      <SkillIcon />
                    </span>
                    <div className="min-w-0 flex-1 [overflow-wrap:anywhere]">
                      <h3 className="text-xl font-bold text-green-800 sm:text-2xl">{group.title}</h3>
                      <p className="mt-4 leading-8 text-slate-700">
                        {group.skills.map((skill, skillIndex) => (
                          <React.Fragment key={skill}>
                            <span className="font-semibold">{skill}</span>
                            {skillIndex < group.skills.length - 1 && (
                              <span className="mx-2 text-yellow-500">•</span>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#FEEAC9] py-20 sm:py-28">
          <div className="portfolio-container">
            <div className="text-center">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Get in Touch</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-700">
                Interested in discussing how my skills can benefit your team?
                <br className="hidden sm:block" /> Reach out via the form or my contact details.
              </p>
            </div>

            <div className="mt-12 grid min-w-0 items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
              <form className="min-w-0 rounded-2xl bg-white p-6 shadow-lg sm:p-8" onSubmit={handleSubmit(submit)}>
                <div className="grid gap-5">
                  <label className="font-semibold">
                    <span className="sr-only">Name</span>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name", { required: "Name is required" })}
                      className="mt-2 w-full rounded-lg border border-slate-300 p-4 outline-none focus:border-yellow-500"
                    />
                    {errors.name && <span className="mt-1 block text-sm text-red-600">{errors.name.message}</span>}
                  </label>
                  <label className="font-semibold">
                    <span className="sr-only">Email</span>
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" },
                      })}
                      className="mt-2 w-full rounded-lg border border-slate-300 p-4 outline-none focus:border-yellow-500"
                    />
                    {errors.email && <span className="mt-1 block text-sm text-red-600">{errors.email.message}</span>}
                  </label>
                </div>

                <label className="mt-5 block font-semibold">
                  <span className="sr-only">Subject</span>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: "Subject is required" })}
                    className="mt-2 w-full rounded-lg border border-slate-300 p-4 outline-none focus:border-yellow-500"
                  />
                  {errors.subject && <span className="mt-1 block text-sm text-red-600">{errors.subject.message}</span>}
                </label>

                <label className="mt-5 block font-semibold">
                  <span className="sr-only">Message</span>
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                    className="mt-2 w-full resize-y rounded-lg border border-slate-300 p-4 outline-none focus:border-yellow-500"
                  />
                  {errors.message && <span className="mt-1 block text-sm text-red-600">{errors.message.message}</span>}
                </label>

                <button type="submit" disabled={isSubmitting} className="primary-link mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
                {status && <p className="mt-4 text-center text-sm font-semibold text-slate-700" aria-live="polite">{status}</p>}
              </form>

              <aside className="min-w-0 text-slate-950">
                <p className="text-lg leading-8 sm:text-xl">
                  I’m looking forward to exploring potential opportunities and
                  collaborations. Feel free to reach out!
                </p>

                <div className="mt-8 space-y-5 text-base sm:text-lg">
                  <div className="flex items-start gap-4">
                    <GrMapLocation className="mt-1 shrink-0 text-2xl text-yellow-500" aria-hidden="true" />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <a href="mailto:toyinsolomon4@gmail.com" className="flex items-start gap-4 transition hover:text-yellow-600">
                    <TbMessages className="mt-1 shrink-0 text-2xl text-yellow-500" aria-hidden="true" />
                    <span className="min-w-0 [overflow-wrap:anywhere]">toyinsolomon4@gmail.com</span>
                  </a>
                  <a href="tel:+2349136309700" className="flex items-start gap-4 transition hover:text-yellow-600">
                    <FcTwoSmartphones className="mt-1 shrink-0 text-2xl" aria-hidden="true" />
                    <span>+234 913 630 9700</span>
                  </a>
                </div>

                <div className="mt-9 flex gap-3">
                  <a className="account-icon" href="https://github.com/IamOluwatoyin" aria-label="GitHub profile"><FaGithub /></a>
                  <a className="account-icon" href="https://www.linkedin.com/in/oluwatoyin-olatorera-solomon-38b6291b3" aria-label="LinkedIn profile"><FaLinkedinIn /></a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
    </>
  );
};

export default Body;
