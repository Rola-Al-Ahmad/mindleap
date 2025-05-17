import { Tab, Tabs, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

const Services = () => {
  const services = [
    {
      title: "Couple Counseling",
      desc: "Couple counseling helps partners improve communication, resolve conflicts, and reconnect emotionally. It provides a safe space to explore issues and strengthen the foundation of the relationship.",
      benifits: [
        "Improve Communication and Conflict Resolution",
        "Rebuild Trust and Intimacy",
        "Understand Each Other’s Needs and Emotions",
        "Strengthen the Relationship Bond",
      ],
      img: serviceImg1,
    },
    {
      title: "Parenting Skills",
      desc: "This program offers guidance and practical strategies to help parents build healthy relationships with their children, manage behavior, and foster a supportive home environment.",
      benifits: [
        "Learn Effective Discipline Techniques",
        "Improve Parent-Child Communication",
        "Build a Nurturing and Supportive Environment",
        "Understand Child Development Stages",
      ],
      img: serviceImg2,
    },
    {
      title: "Feeling Stuck",
      desc: "If you're feeling unmotivated, lost, or uncertain about your direction in life, this support helps you identify the root cause and develop actionable steps toward clarity and purpose.",
      benifits: [
        "Gain Clarity and Direction",
        "Break Negative Thought Patterns",
        "Set Achievable Personal Goals",
        "Regain Motivation and Energy",
      ],
      img: serviceImg3,
    },
    {
      title: "Self-Confidence",
      desc: "This journey helps you overcome self-doubt, embrace your strengths, and build the confidence needed to thrive in personal and professional areas of life.",
      benifits: [
        "Understand Your Own Strengths and Weaknesses",
        "Develop a Plan to Overcome Challenges",
        "Build Self-Esteem and Confidence",
        "Practice Self-Care and Relaxation",
      ],
      img: serviceImg4,
    },
  ];
  return (
    <section id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            inventore sint, temporibus enim magnam quod. Dignissimos, nobis et.
          </p>
        </motion.div>
        {/* Service Cat. */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 justify-between items-center md:gap-8 gap-4"
            >
              {services.map((service, index) => {
                return <Tab key={index}>{service.title}</Tab>;
              })}
            </motion.TabList>

            {services.map((service, index) => {
              return (
                <TabPanel key={index}>
                  <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flex flex-col md:flex-row gap-8 mt-8"
                  >
                    <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                      <h3 className="text-3xl font-semibold mb-4 text-primary">
                        {service.title}
                      </h3>
                      <p className="mb-8">{service.desc}</p>
                      <h4 className="text-xl font-medium text-black mb-4">
                        Benifits
                      </h4>
                      <ul className="list-disc list-inside space-y-3">
                        {service.benifits.map((benifit, index) => {
                          return <li key={index}>{benifit}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src={service.img}
                        alt={`${service.title} Image`}
                        className="w-full md:h-[446px] h-auto rounded-2xl object-cover"
                      />
                    </div>
                  </motion.div>
                </TabPanel>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
