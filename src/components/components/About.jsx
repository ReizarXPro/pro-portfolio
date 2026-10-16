
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/app/stylejs/style";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        My experience in dynamic startup environments has shaped a diverse skill set across full-stack development, user-centric design, embedded systems, robotics, and network administration. I build efficient products, MVPs, and interactive experiences that solve real-world problems with speed and quality.
        <br /><br />
        I work comfortably with JavaScript, TypeScript, Next.js, React, Three.js, Node, HTML, CSS, Tailwind, Docker, Web3, React Native, C/C++, Python, ROS2, and network tools including DHCP, subnetting, IPv4/IPv6, routing, ARP, Ethernet, and Cisco Packet Tracer. I enjoy combining software, hardware, and practical infrastructure knowledge to create modern, reliable solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
