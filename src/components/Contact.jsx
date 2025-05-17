import { useState } from "react";
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

const Contact = () => {
  const makeAppointment = [
    {
      title: "24/7 Availability",
      description:
        "We’re here for you around the clock—anytime you need support, guidance, or someone to talk to.",
      icon: <FaUserAlt className="text-primary" />,
    },
    {
      title: "Expert Therapists",
      description:
        "Our licensed and experienced therapists are committed to helping you navigate life’s challenges with care and professionalism.",
      icon: <FaEnvelope className="text-primary" />,
    },
    {
      title: "High-Quality Care",
      description:
        "We provide evidence-based therapeutic methods and personalized treatment plans tailored to your needs.",
      icon: <FaPhoneAlt className="text-primary" />,
    },
    {
      title: "Trusted by Clients",
      description:
        "Our clinic is known for its compassion, confidentiality, and commitment to your mental well-being.",
      icon: <FaGlobe className="text-primary" />,
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      country,
      message,
    };
    console.log(data);

    if (
      data.name === "" ||
      data.email === "" ||
      data.phone === "" ||
      data.country === "" ||
      data.message === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    setShowModal(true);

    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };
  return (
    <section
      id="contact"
      className="bg-heroBg flex items-center justify-center py-28 px-8"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left */}

          <div className="space-y-8 text-white">
            <h2 className="text-4xl font-bold font-secondary mb-4">
              Make an Appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {makeAppointment.map((item, index) => {
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}

          <div className="space-y-8 p-8 bg-white shadow-xl rounded-md">
            <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="flex lg:flex-row flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex lg:flex-row flex-col gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                />
              </div>
              <textarea
                rows={5}
                placeholder="Write your message...."
                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary text-white rounded-md hover:bg-primary/90 
                py-4 font-medium transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">
              Thank you, <span className="font-semibold">{name}</span>, for
              getting in touch. <br />
              We&apos;ll reach out to you shortly.
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
