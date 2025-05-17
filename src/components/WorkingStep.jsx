import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

const WorkingStep = () => {
  const steps = [
    {
      title: "Fill a Form",
      desc: "Start by completing a simple form to tell us about your needs, preferences, and goals. This helps us understand how to best support you.",
    },
    {
      title: "Get Matched",
      desc: "We’ll connect you with a qualified therapist or counselor that fits your specific situation and preferences, ensuring personalized care.",
    },
    {
      title: "Schedule",
      desc: "Choose a time that works best for you and begin your journey toward clarity and healing through scheduled one-on-one sessions.",
    },
  ];
  return (
    <section className="relative bg-cover bg-center py-12 bg-working-img">
      <div className="absolute inset-0 bg-heroBg bg-opacity-85 "></div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative container mx-auto px-4 py-20"
      >
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">
            Getting started is simple. Just fill out a quick form, get matched
            with the right therapist for your needs, and schedule a session at
            your convenience. We’re here to support your journey every step of
            the way.
          </p>
        </div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          {steps.map((step, index) => {
            return (
              <div
                className="relative bg-white text-center rounded-lg p-6 flex-1"
                key={index}
              >
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-primary rounded-full text-white size-14 flex items-center justify-center"
                >
                  {index + 1}
                </div>
                <h3 className="text-lg font-medium mt-8">{step.title}</h3>
                <p className="my-2">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkingStep;
