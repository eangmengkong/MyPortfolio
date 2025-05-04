import { about } from "../../data/data";
import { Heading } from "../common/Heading";

const About = () => {
  const handleDownload = () => {
    const cvUrl = "/MengkongCv1.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "EangMengkong_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 pb-6 bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto w-full">
        {" "}
        {/* Reduced max-width */}
        {about.map((value, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-6" // Reduced padding and shadow
          >
            <div className="w-full md:w-2/5">
              <img
                src={value.cover}
                alt="About me"
                className="rounded-xl shadow-md object-cover w-full max-w-xs border-2 border-indigo-300" // Smaller image styling
              />
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left space-y-4">
              {" "}
              {/* Reduced spacing */}
              <Heading title="About Me" />
              <div className="space-y-3 text-sm text-gray-800">
                {" "}
                {/* Smaller text */}
                <p>{value.desc}</p>
                <p>{value.desc1}</p>
              </div>
              <button
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 text-sm" // Smaller button
                onClick={handleDownload}
              >
                Download CV
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
