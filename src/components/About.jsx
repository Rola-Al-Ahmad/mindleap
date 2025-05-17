import { useState } from "react";
import thumnailImg from "../assets/video-thumbnail.webp";
import { BsPlayCircleFill } from "react-icons/bs";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left  */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {/* {!isVideoPlaying && ( */}
            <div className="relative group" onClick={handleVideoPlay}>
              <img
                src={thumnailImg}
                alt="thumnailImg"
                className="w-full md:h-[446px] h-auto rounded-lg object-cover cursor-pointer 
                            grayscale-[20%] blur-[1px] transition duration-300
                            group-hover:grayscale-0 group-hover:blur-0"
              />
              <button
                className="absolute top-1/2 left-1/2 transform 
                          -translate-x-1/2 -translate-y-1/2 p-3"
              >
                <BsPlayCircleFill className="text-primary size-10" />
              </button>
            </div>
            {/* // )} */}
          </div>
          {/* Right */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
              Invidual Consult And Therapy
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              Personalized one-on-one therapy sessions designed to help you
              explore your thoughts, navigate emotional challenges, and build
              practical strategies for personal growth and mental well-being.
              Discover a safe space to heal, reflect, and move forward with
              clarity and confidence.
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded hover:bg-primary/90">
              <a href="#contact" className="flex items-center gap-1">
                <span>Get Started</span> <IoArrowForwardCircleSharp />
              </a>
            </button>
          </div>
        </div>

        {/* Video Player */}

        {isVideoPlaying && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
            onClick={handleVideoPlay}
          >
            <div className="relative w-full h-full flex items-center justify-center z-50">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-Ol3PQDS_ow?si=LlFXq5Gfo_MEyFib"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <button
                onClick={handleVideoPlay}
                className="absolute top-20 right-4 text-white text-2xl cursor-pointer z-100"
              >
                X
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default About;
