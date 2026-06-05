import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { TbMessages } from "react-icons/tb";
import { FcTwoSmartphones } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import BackToTopButton from "../BackToTopButton"


const Body = () => {
  const Content = [
    {
      span: "Frontend Developer",
    },

    {
      span: "Building of things that matter",
    },

    {
      span: "Problem Solver",
    },
  ];

  const projectCards = [
    {
      id: 1,
      title: "RefillXpress",
      description:
        " A web app connecting users to nearby gas refill stations with real-time prices, live delivery tracking, and in-app payment. Users can signup as customers, vendors, or riders, enjoying features like vendor price setting, delivery updates, and seamless transactions and all in one platform.",
      logo: "/Images/heroImage.png",
      language: ["React", "Context-API"],
      details: "View Project",
      link: "https://refill-xpress.vercel.app/",
    },
    {
      id: 2,
      title: "Dawn Eats",
      description:
        "A web app for busy professionals to order breakfast from local restaurants, with flexible options for delivery or pickup. Skip the morning rush and fuel your day.",
      logo: "/Images/dawnEats.png",
      language: ["React.js", "Axios", "APIs"],
      details: "View Project",
      link: "https://dawn-eats-break-fast-website.vercel.app/",
    },
    {
      id: 3,
      title: "CryptoScope",
      description:
        "A cryptocurrency dashboard that fetches a real-time cryptocurrency data and displays it in a structured UI. It highlights key market insights like top gainers and losers, overall market stats, and a detailed table of coins. It also supports refreshing data for better user experience.",
        logo:"/Images/crypto-alert-app.png",
      language: ["React.js", "APIs"],
      details: "View Project",
      link: "https://crypto-alert-theta.vercel.app/",
    },
  ];

  const skillsData = [
  { name: "ReactJS", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", category: "frontend" },
  { name: "JavaScript (ES6+)", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", category: "frontend" },
  { name: "Git & GitHub", icon: ["https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"], category: "tools" },
  { name: "Figma/Design", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", category: "tools" },
  { name: "Webpack/Vite", icon: ["https://webpack.js.org/assets/icon-square-big.svg", "https://vitejs.dev/logo.svg"], category: "tools" },
];

  const [textIndex, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Content.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("")
  
 const submit = async (data) => {
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_urshq6v",
        "template_ru2v9kg",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          time: new Date().toLocaleString(),
        },
        "P460QdZPZnwVrI4Cw"
      );

      setStatus("Message Sent Successfully!");
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

  useEffect(() => {
    emailjs.init("P460QdZPZnwVrI4Cw");
  }, []);

  
  return (
    <>
      <section
        id="home"
        data-aos="fade-up"
        className="relative min-h-screen pt-[5rem]   overflow-hidden"
      >
        <div className="flex items-center pt-[6rem] hidden lg:flex">
          <div className="absolute inset-0 bg-[#FEEAC9] pointer-events-none z-0" />

          
          <div className="absolute inset-y-0 left-0 w-full md:w-[calc(50%+96px)] z-10 pointer-events-none hidden md:block">
            <div className="absolute inset-0 bg-white rounded-r-[500px] rounded-tr-[400px]" />
          </div>

          
          <div className="relative z-20 flex flex-col md:flex-row w-full">
           
            <div
              className="
    w-full md:w-[45%]
    flex flex-col justify-center
    px-6 md:px-0
    gap-4 md:gap-6
    order-2 md:order-1

    md:ml-[calc(50%+96px)]
    xl:pl-[4rem] 
    
  "
            >
              <h2 className="text-3xl md:text-5xl font-bold font-body md:ml-10 text-center md:text-left text-yellow-500">
                Hi there, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold font-body md:ml-10 text-center md:text-left">
                Torera <br />
                Solomon
              </h1>
              <div className="relative h-[2.5rem] md:h-[3rem] flex justify-center md:justify-start md:ml-10">
                {Content.map((item, i) => (
                  <span
                    key={i}
                    className={`absolute text-3xl md:text-4xl font-semibold font-body transition-opacity duration-500 text-yellow-500 text-center md:text-left ${i === textIndex ? "opacity-100" : "opacity-0"}`}
                  >
                    {item.span}
                  </span>
                ))}
              </div>
              <div className="flex justify-center md:justify-start md:ml-10 gap-8 md:gap-15 text-3xl md:text-4xl mt-4">
                <a
                  className="account-icon w-16 h-16 md:w-20 md:h-20"
                  href="https://github.com/IamOluwatoyin"
                  
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="account-icon w-16 h-16 md:w-20 md:h-20"
                  href="https://www.linkedin.com/in/oluwatoyin-olatorera-solomon-38b6291b3"
                  
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="account-icon w-16 h-16 md:w-20 md:h-20"
                  href="https://www.instagram.com/_olatorera?igsh=MXcwNXpxYTNwb3lqcg%3D%3D&utm_source=qr"
                 
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          {/* Hero Image for desktop (1024px and above) */}
          <img
            src="/Images/toreraCorporateshot.png"
            alt="Torera corporate"
            className="
    hidden md:block
    absolute
    right-[40%] lg:right-[52%]
    top-[2rem]
    z-10
    w-[40rem]
    max-w-[70%]
    h-full
    object-contain
    contrast-110
    brightness-105
    saturate-105
    overflow-hidden
    pointer-events-none
  "
          />
        </div>
        {/* Tablet Hero */}
        <div className="hidden md:flex lg:hidden relative min-h-screen overflow-hidden">
          {/* Tablet background image */}
          <img
            src="/Images/toreraCorporateshot.png"
            alt="Torera corporate"
            className="w-full h-full object-cover object-center contrast-110 brightness-105 saturate-105"
          />

          {/* Center transparent card */}
          <div className="absolute inset-0 flex items-end px-3 justify-center z-10">
            <div className="w-full bg-black/30 backdrop-blur-md p-8 flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold font-body text-center text-yellow-500">
                Hi there, I'm
              </h2>
              <h1 className="text-5xl font-bold font-body text-center text-white">
                Torera <br /> Solomon
              </h1>
              <div className="relative h-[5rem] md:h-[4rem] flex justify-center ">
                {Content.map((item, i) => (
                  <span
                    key={i}
                    className={`
        absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        text-yellow-400 font-semibold
         bg-black/50 backdrop-blur-md
         px-4 py-2
        rounded-xl
        text-3xl md:text-4xl
        whitespace-nowrap
        font-body
        transition-opacity duration-500
        ${i === textIndex ? "opacity-100" : "opacity-0"}
      `}
                  >
                    {item.span}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-8 text-2xl mt-4">
                <a
                  className="account-icon w-16 h-16"
                  href="https://github.com/IamOluwatoyin"
                  
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="account-icon w-16 h-16"
                  href="https://www.linkedin.com/in/oluwatoyin-olatorera-solomon-38b6291b3"
                 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="account-icon w-16 h-16"
                  href="https://www.instagram.com/_olatorera?igsh=MXcwNXpxYTNwb3lqcg%3D%3D&utm_source=qr"
                  
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden relative min-h-screen overflow-hidden">
          {/* Mobile image */}
          <img
            src="/Images/toreraCorporateshot.png"
            alt="Torera corporate"
            className="w-full h-full object-cover object-center contrast-110 brightness-105 saturate-105"
          />
          {/* center card */}
          <div className="absolute inset-0 flex items-end  pb-5 justify-center z-10 ">
            {/* Transparent mobile text card */}
            <div className="w-full  bg-black/30 backdrop-blur-md p-8 flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold font-body text-center text-yellow-500">
                Hi there, I'm
              </h2>
              <h1 className="text-5xl font-bold font-body text-center text-white">
                Torera <br />
                Solomon
              </h1>
            <div className="relative h-[5rem] md:h-[4rem] flex justify-center">
  {Content.map((item, i) => (
    <span
      key={i}
      className={`
        absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        px-4 py-2
        rounded-xl
        bg-black/50 backdrop-blur-md
        text-yellow-400
        font-semibold font-body
        text-[clamp(1.1rem,5vw,2.5rem)]
        whitespace-nowrap
        transition-all duration-500
        ${i === textIndex
          ? "opacity-100 scale-105"
          : "opacity-0 scale-95"}
      `}
    >
      {item.span}
    </span>
  ))}
</div>


              <div className="flex justify-center gap-8 text-2xl mt-4">
                <a
                  className="account-icon w-16 h-16"
                  href="https://github.com/IamOluwatoyin"
                  
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="account-icon w-16 h-16"
                  href="https://www.linkedin.com/in/oluwatoyin-olatorera-solomon-38b6291b3"
                  
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="account-icon  w-16 h-16"
                  href="https://www.instagram.com/_olatorera?igsh=MXcwNXpxYTNwb3lqcg%3D%3D&utm_source=qr"
                  
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <Header />
      </div>
     <section
  className="w-full min-h-screen flex flex-col lg:flex-row justify-center gap-20 mt-10 px-6 pb-20 md:px-10 lg:px-8 xl:px-10"
  id="about-me"
  data-aos="fade-right"
>


        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-body font-bold leading-snug lg:leading-tight">
  With every line of <br /> code, I make the <br /> world a little better!
</h1>

        <p className="text-base sm:text-lg lg:text-xl mt-4 lg:mt-6 font-body leading-snug sm:leading-relaxed lg:leading-relaxed">
  As a career shifter from HR to tech, I'm excited to build, learn,
  <br /> and create digital experiences that make a difference.
  <br /> My focus is on crafting scalable applications and exploring
  startup growth,
  <br /> with a passion for finding creative solutions that simplify
  and add meaning to people's lives
</p>


          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">

            <a
              className="
          bg-green-700 text-white
          px-6 py-3
          rounded-full
          text-xl
          hover:bg-yellow-500
          hover:text-white
          transition-colors
          duration-300
          font-body
          font-semibold
        "
              href="https://drive.google.com/file/d/1zQV1rksCCfsfOruO6-4gQnG7vemTTnH9/view?usp=sharing"
              rel="noopener noreferrer"
            >
              View Resume
            </a>

            <button
              className="
          bg-white text-black
          px-6 py-3
          text-xl
          font-bold
          rounded-full
          hover:bg-yellow-500
          hover:text-white
          transition-colors
          duration-300
          font-body
         
        "
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me Now
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[40%] mt-10 lg:mt-0 rounded-xl shadow-lg overflow-hidden flex justify-center">

          <img
            src="/Images/hoodieImage.png"
            alt="techImage"
            className="
        w-full h-full
        object-cover
        contrast-110
        brightness-105
        saturate-105
      "
          />
        </div>
      </section>
<section
  id="skills"
  data-aos="fade-left"
  className="w-full py-16 px-6 sm:px-10 flex flex-col items-center gap-10 bg-[#FEEAC9]"
>
  
  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-center">
    Skills
  </h1>

 
  <p className="max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl font-body text-center leading-relaxed lg:leading-loose">
  Here's a look at my skill set. The tech world changes every moment, and
  that's what makes it exciting. I constantly keep my knowledge up to date
  and enjoy exploring new technologies to keep growing.
</p>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-6">
  {skillsData.map((skill, index) => (
    <div
      key={index}
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-3
        p-6
        rounded-xl
        bg-white
        border-2 border-[#D1E0D1]
        backdrop-blur-md
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Icon(s) */}
      <div className="flex items-center gap-3">
        {Array.isArray(skill.icon) ? (
          skill.icon.map((iconSrc, i) => (
            <img
              key={i}
              src={iconSrc}
              alt={`${skill.name} icon`}
              className="w-10 h-10 object-contain"
            />
          ))
        ) : (
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="w-12 h-12 object-contain"
          />
        )}
      </div>

      {/* Skill name */}
      <p className="text-sm sm:text-base font-body font-semibold text-center">
        {skill.name}
      </p>
    </div>
  ))}
</div>

</section>

      <section
        className="bg-white w-full flex flex-col items-center p-10 gap-10 overflow-x-hidden"
        id="projects"
        data-aos="fade-up"
      ><h1 className="text-3xl sm:text-5xl font-heading font-bold text-center whitespace-nowrap lg:whitespace-normal lg:text-left">
  What have I created?
</h1>

<p className="text-base lg:text-xl font-body text-center leading-relaxed max-w-full lg:max-w-none">
  Creating isn't just part of my work, it's part of my life. I've always tried
  to keep that <br /> spark of building alive and never lose the joy of bringing ideas to life. Here you can <br /> explore the projects I've built with a team of collaborators who shared my vision and passion.
</p>


        <div className="flex flex-col lg:flex-row flex-wrap w-full gap-20 items-center justify-center mt-10">
          {projectCards.map((card, i) => (
            <div
              key={i}
              className="relative w-full md:w-[45%] lg:w-[27%] group cursor-pointer h-[600px] "
            >
              {/* Overlay / plate */}
              <div
                className="
          absolute
          inset-0
          bg-yellow-500
          rounded-xl
          translate-x-4
          translate-y-4
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-x-6
          group-hover:translate-y-6
        "
              />

              {/* Main card */}
              <div
                className="
          relative
          z-10
          w-full
          h-full
          bg-[#FEEAC9]
          rounded-xl
          transition-all
          duration-300
          group-hover:-translate-y-4
          group-hover:-translate-x-2
          flex  flex-col gap-6 
        "
              >
                <div className="w-full  overflow-hidden flex-shrink-0 top-0">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="w-full h-auto object-contain  block"
                  />
                </div>
                <h2 className="text-yellow-500 text-4xl pl-5 font-heading ">
                  {card.title}
                </h2>
                <p className=" pl-5 font-body">{card.description}</p>
                <div className="flex flex-wrap gap-3 pl-5">
                  {card.language.map((lang, idx) => (
                    <span
                      key={idx}
                      className="
        px-4
        py-1
        font-body
        font-semibold
        rounded-full
        bg-yellow-500
        text-white
      "
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <a
                  href={card.link}
                  rel="noopener noreferrer"
                  className="
    inline-flex
    items-center
    gap-2
    text-yellow-500
    px-6
    py-3
    text-xl
    font-bold
    rounded-[3px]
    hover:text-gray-950
    transition-colors
    duration-300
    font-body
    
  "
                >
                  {card.details}
                  <FaArrowRight className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="bg-[#FEEAC9] w-full py-20 px-10"
        id="contact"
        data-aos="fade-right"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
         
          <div className="text-center">
  <h1 className="text-3xl sm:text-5xl font-bold font-heading mb-2 sm:mb-4">
    Get in Touch
  </h1>
  <p className="text-base sm:text-2xl font-heading leading-snug">
    Interested in discussing how my skills can benefit your team?
    <br /> Reach out via the form or my contact details.
  </p>
</div>


          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
  <form
    className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col gap-4 sm:gap-6 font-body font-semibold"
    onSubmit={handleSubmit(submit)}
  >
    <input
      type="text"
      {...register("name", { required: "Name is required" })}
      placeholder="Your Name"
      className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-yellow-500 text-base sm:text-lg"
    />
    {errors.name && (
      <p className="text-red-500 text-sm sm:text-base">{errors.name.message}</p>
    )}

    <input
      type="email"
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Invalid email address",
        },
      })}
      placeholder="Your Email"
      className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-yellow-500 text-base sm:text-lg"
    />
    {errors.email && (
      <p className="text-red-500 text-sm sm:text-base">{errors.email.message}</p>
    )}

    <input
      type="text"
      placeholder="Subject"
      {...register("subject", { required: "Subject is required" })}
      className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:border-yellow-500 text-base sm:text-lg"
      required
    />
    {errors.subject && (
      <p className="text-red-500 text-sm sm:text-base">{errors.subject.message}</p>
    )}

    <textarea
      placeholder="Your Message"
      rows={5}
      className="border border-gray-300 p-3 sm:p-4 rounded-lg resize-none focus:outline-none focus:border-yellow-500 text-base sm:text-lg"
      {...register("message", { required: "Message is required" })}
    />
    {errors.message && (
      <p className="text-red-500 text-sm sm:text-base">{errors.message.message}</p>
    )}

    <button
      type="submit"
      className="bg-yellow-500 text-white py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-lg hover:bg-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Sending.." : "Contact Me"}
    </button>
  </form>

  <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 sm:gap-8">
    <p className="text-lg sm:text-2xl font-heading text-center md:text-left">
      I'm looking forward to exploring potential opportunities and collaborations. Feel free to reach out!
    </p>

    <ul className="flex flex-col gap-4 sm:gap-6 font-body text-center md:text-left">
      <li className="text-lg sm:text-2xl flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
        <GrMapLocation className="text-yellow-500 text-2xl sm:text-3xl" />
        Lagos, Nigeria
      </li>

      <li className="text-lg sm:text-2xl flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
        <TbMessages className="text-yellow-500 text-2xl sm:text-3xl" />
        toyinsolomon4@gmail.com
      </li>

      <li className="text-lg sm:text-2xl flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
        <FcTwoSmartphones className="text-2xl sm:text-3xl" />
        +234 913 630 9700
      </li>
    </ul>
         

            </div>
          </div>
        </div>
      </section>
      <BackToTopButton/>
    </>
  );
};
 
export default Body;
