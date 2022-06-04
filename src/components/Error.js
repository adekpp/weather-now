import React from "react";
import "./Error.css";
import { motion } from "framer-motion";
const Error = () => {
  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      exit={{ scale: 0.5, opacity: 0 }}
    >
      <div className="flex flex-row w-full mt-5  justify-center place-items-center">
        <div className=" text-center font-semibold text-red-500 py-6 px-6 bg-white shadow-lg  w-5/12">
          <h1>City not found</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Error;
