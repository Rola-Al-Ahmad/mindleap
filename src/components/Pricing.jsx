import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

const Pricing = () => {
  const plans = [
    {
      name: "Bronze Package",
      price: "99",
      desc: "Ideal for small teams or startups taking their first step toward employee wellness. Offers essential support to build a healthy work environment.",
      features: [
        "Access to our mental health resource library",
        "Monthly group wellness webinar",
        "Email support for general mental health inquiries",
        "One guided meditation session per month",
      ],
    },
    {
      name: "Silver Package",
      price: "199",
      desc: "A balanced plan for mid-sized teams that want to enhance employee mental health with more personalized and interactive support options.",
      features: [
        "Everything in Bronze Package",
        "Two private therapy sessions per employee per month",
        "Priority email and chat support",
        "Quarterly mental health assessment reports",
      ],
    },
    {
      name: "Gold Package",
      price: "299",
      desc: "Our most comprehensive plan, designed for larger businesses or teams that prioritize proactive, ongoing mental wellness for every employee.",
      features: [
        "Everything in Silver Package",
        "Unlimited therapy sessions (fair usage policy applies)",
        "Dedicated mental health advisor for your team",
        "Customized workshops and wellness programs",
      ],
    },
  ];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className="bg-[#f7f8fc] pt-32">
      <div className="container mx-auto px-8 pb-12">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-secondary mb-4">
            Perfect for Small & Large Businesses
          </h2>
          <p className="text-lg md:w-2/3 w-full mx-auto">
            Whether you&apos;re a growing startup or an established enterprise,
            our flexible pricing plans are designed to meet your unique needs.
            Get access to professional mental health support for your team with
            scalable solutions that prioritize well-being and performance.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="flex flex-col md:w-5/6 mx-auto lg:flex-row gap-8 mt-12 lg:mt-12">
          {plans.map((plan, index) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={`relative bg-white text-center rounded-lg p-6 flex-1 shadow-lg ${
                index === 1 ? "lg:scale-110" : ""
              }`}
              key={index}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <hr className="w-24 border text-primary border-primary mx-auto mb-2" />
              <p className="text-3xl font-bold mb-4">
                ${plan.price} <span className="text-lg font-normal">/mo</span>
              </p>
              <p className="text-lg mb-4">{plan.desc}</p>

              <ul className="list-disc list-inside text-left space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <button
                onClick={handleScrollToContact}
                className="bg-primary text-white px-8 py-3 rounded-full mt-8"
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
