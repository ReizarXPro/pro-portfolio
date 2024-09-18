"use client"; // This ensures the component runs on the client side

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css"; // Make sure this CSS file is loaded correctly
import { styles } from "@/app/stylejs/style"; // Adjust the path if necessary
import { experiences } from "@/constants"; // Ensure the path to constants is correct
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion"; // Ensure motion utility path is correct
import { useInView } from "react-intersection-observer";
import { zoomIn } from "@/utils/motion";

const ExperienceCard = ({ experience }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    
  });
  return(
    <section ref={ref} style={{margin:"15px"}} >
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }} // Card background and text color
    contentArrowStyle={{ borderRight: "15px solid #232631" }} // Arrow style
    date={experience.date} // Experience date
    iconStyle={{ background: experience.iconBg }} // Icon background color
    visible={ inView }
    icon={
      <div className='flex justify-center items-center w-full h-full '>
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain ' />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
  </section>
);}

const Experience = () => (
  <>
    <motion.div variants={textVariant(1)}>
      <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
    </motion.div>
    <div className='mt-20 flex flex-col '>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
