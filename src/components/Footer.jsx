import { FaEnvelope, FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import footerLogo from "../assets/footer-logo.svg";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/animation";

const Footer = () => {
  return (
    <footer className="p-12 bg-gray-100 px-8">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8"
      >
        <div className="space-y-6 mr-14">
          <div className="flex items-center space-x-2 ">
            <img src={footerLogo} alt="footer logo" className="w-32 h-auto" />
          </div>
          <p className="text-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis eos, inventore.
          </p>
          <div className="flex space-x-4">
            <a
              href=""
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center 
                        justify-center hover:bg-primary hover:text-white"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href=""
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center 
                        justify-center hover:bg-primary hover:text-white"
            >
              <AiFillInstagram className="text-xl" />
            </a>
            <a
              href=""
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center 
                        justify-center hover:bg-primary hover:text-white"
            >
              <FaXTwitter className="text-xl" />
            </a>
            <a
              href=""
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center 
                        justify-center hover:bg-primary hover:text-white"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:underline text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline text-gray-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonial" className="hover:underline text-gray-700">
                Testimonial
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline text-gray-700">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-700">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700">
                Support Center
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-primary" />
              <p className="text-gray-700">Beirut, Lebanon</p>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <p className="text-gray-700">(+961) 71 111 111</p>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <p className="text-gray-700">info@company.com</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
