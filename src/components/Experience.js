import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{education.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {education.role} -{" "}
                <span className="text-sm text-stone-500">
                  {education.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{education.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
