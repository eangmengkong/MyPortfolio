import clsx from "clsx";

// eslint-disable-next-line react/prop-types
export const Heading = ({ title }) => {
  return (
    <>
      <h2
        className={clsx(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8",
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
          "bg-clip-text text-transparent",
          "drop-shadow-md",
          "tracking-wide",
          "select-none",
          "transition-transform duration-300 ease-in-out hover:scale-105",
          "cursor-default"
        )}
        data-aos="zoom-in-down"
      >
        {title}
      </h2>
    </>
  );
};
