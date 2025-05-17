import { BsChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Maya El Khoury",
      image: review1,
      review:
        "After months of anxiety and emotional stress, I finally found the support I needed. The care, professionalism, and understanding I received made a huge difference in my life. I’m truly grateful for this journey.",
      location: "Achrafieh, Beirut, Lebanon",
    },
    {
      name: "Karim Hassan",
      image: review2,
      review:
        "I was going through a period of burnout and felt completely lost. The sessions helped me reconnect with myself and regain balance in my life. I highly recommend their services to anyone feeling overwhelmed.",
      location: "Hamra, Beirut, Lebanon",
    },
  ];
  return (
    <section id="testimonial" className="bg-[#f7f8fc] py-12">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto pb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">
            We pride ourselves on providing exceptional support and care to our
            clients. Here are a few testimonials from our satisfied customers.
          </p>
        </div>

        <div className="flex flex-col md:w-5/6 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsChatQuoteFill className="size-12 text-primary" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="lg:text-lg mb-3">{testimonial.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
