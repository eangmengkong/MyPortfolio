import { Heading } from "../common/Heading";
import { FaFacebook, FaTelegram, FaGithub } from "react-icons/fa";
import myPhoto from "../../assets/images/myphoto1.png";
import ProgressBar from "react-progressbar";

const Resume = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 70 },
    { name: "Tailwind", level: 80 },
    { name: "C", level: 40 },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-4 px-4 sm:px-6 md:px-8 pb-12 bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {" "}
          {/* Changed to items-stretch */}
          {/* Image Card - Increased Height */}
          <div className="w-full md:w-2/5 min-h-[320px] rounded-3xl shadow-xl overflow-hidden">
            {" "}
            {/* Increased height */}
            <div
              className="h-64 md:h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${myPhoto})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-black bg-opacity-60 h-full p-6 flex flex-col justify-between text-white">
                <div>
                  <h1 className="text-3xl font-bold mb-1">Mengkong</h1>
                  <span className="text-base">Web Developer</span>
                </div>
                <div className="flex space-x-4 text-xl">
                  <a
                    href="https://www.facebook.com/share/161uQ4N9HN/?mibextid=kFxxJD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300 transition-transform hover:scale-110"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://github.com/eangmengkong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300 transition-transform hover:scale-110"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://t.me/MengkongEang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300 transition-transform hover:scale-110"
                  >
                    <FaTelegram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Content Section */}
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            {" "}
            {/* Added flex centering */}
            <Heading title="Resume" />
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <span>Frontend Developer</span>
                <span>UX/UI Designer</span>
                <span>IT Supporter</span>
              </div>

              <p className="text-sm leading-tight text-gray-800">
                Motivated web development student seeking a frontend internship
                to improve my skills. Passionate about creating user-friendly
                and interactive websites.
              </p>

              <hr className="border-indigo-200 my-2" />

              <div>
                <h2 className="text-xl font-bold mb-3">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-xs font-medium text-indigo-700">
                        {skill.name}
                      </p>
                      <ProgressBar
                        completed={skill.level}
                        bgColor="#6366f1"
                        baseBgColor="#d1d5db"
                        height="8px"
                        labelAlignment="center"
                        labelColor="#ffffff"
                        labelSize="8px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
