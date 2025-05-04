import { useState } from "react";
import { project } from "../../data/data";
import { Heading } from "../common/Heading";

const allCategory = ["all", ...new Set(project.map((item) => item.category))];

export const Project = () => {
  const [list, setLists] = useState(project);
  const [category] = useState(allCategory);

  const filterItems = (category) => {
    setLists(
      category === "all"
        ? project
        : project.filter((item) => item.category === category)
    );
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 pb-6 bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-6">
          <Heading title="Projects" />
        </div>

        {/* Category Buttons - Centered */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {category.map((cat, i) => (
            <button
              key={i}
              onClick={() => filterItems(cat)}
              data-aos="zoom-out-down"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid - Increased Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-full sm:max-h-[75vh] overflow-y-auto">
          {list.map((value) => (
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg h-auto sm:h-56" // Responsive height: auto on small screens, fixed on sm+
              data-aos="fade-up"
              key={value.id}
            >
              <img
                src={value.cover}
                alt={`Cover for ${value.title}`}
                className="w-full h-full object-cover" // Changed to h-full to fill container
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <span className="text-sm mb-4">{value.name}</span>
                {value.link ? (
                  <a
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition"
                  >
                    View Project
                  </a>
                ) : (
                  <button
                    disabled
                    className="bg-gray-400 px-4 py-2 rounded-full text-sm cursor-not-allowed"
                  >
                    No Link
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
