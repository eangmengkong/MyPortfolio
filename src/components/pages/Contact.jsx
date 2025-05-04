import { Heading } from "../common/Heading";
import { contact } from "../../data/data";
import {
  FaAddressBook,
  FaTelegram,
  FaFacebook,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const icons = {
    address: <FaAddressBook />,
    email: <IoIosMail />,
    telegram: <FaTelegram />,
    phoneNumber: <FaPhoneAlt />,
    github: <FaGithub />,
    facebook: <FaFacebook />,
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center py-6 px-4 sm:px-6 md:px-8 pb-12 text-white overflow-hidden
    bg-gradient-to-br from-gray-900 to-teal-900"
    >
      {" "}
      {/* Changed background gradient to a rich dark gray to teal */}
      <div
        className="absolute inset-0
      bg-gradient-to-br from-gray-950 to-teal-950 opacity-90 -z-10"
      >
        {" "}
        {/* Changed background gradient overlay to a darker version */}
      </div>
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <Heading title="Keep In Touch" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Form Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg p-6 md:p-8 border border-white border-opacity-20">
            <form
              action="https://formsubmit.co/eangmengkong21@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    aria-label="Your Name"
                    required
                    className="peer w-full bg-transparent border border-white border-opacity-30 rounded-xl px-4 py-3 placeholder-transparent text-white focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-2 text-white text-opacity-70 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:text-opacity-40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400"
                  >
                    Name
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    aria-label="Your Email"
                    required
                    className="peer w-full bg-transparent border border-white border-opacity-30 rounded-xl px-4 py-3 placeholder-transparent text-white focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-white text-opacity-70 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:text-opacity-40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder=" "
                  aria-label="Subject"
                  required
                  className="peer w-full bg-transparent border border-white border-opacity-30 rounded-xl px-4 py-3 placeholder-transparent text-white focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-2 text-white text-opacity-70 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:text-opacity-40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400"
                >
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder=" "
                  aria-label="Message"
                  required
                  className="peer w-full bg-transparent border border-white border-opacity-30 rounded-xl px-4 py-3 placeholder-transparent text-white resize-none focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-white text-opacity-70 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:text-opacity-40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400"
                >
                  Message
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  // Kept the button gradient as it provides a nice accent
                  className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 font-semibold text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            {contact.map((item) =>
              Object.keys(item).map((key) => {
                const value = item[key];
                const isLink = key === "github" || key === "facebook";
                return (
                  <div
                    key={key}
                    className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg p-4 flex items-center space-x-4 border border-white border-opacity-20 hover:bg-opacity-20 transition"
                    data-aos="zoom-in"
                  >
                    <span className="text-pink-400 text-2xl">{icons[key]}</span>
                    {isLink ? (
                      <a
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-sm hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-sm">
                        {value}
                      </p>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
