import React from "react";
import "./Loader.css";
import { motion } from "framer-motion";
export const Loader = () => {
  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex flex-col mt-5 justify-center bg-white mx-auto shadow-lg w-5/6 md:w-5/12"
    >
      <div className="lds-facebook place-self-center">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.div>
  );
};
