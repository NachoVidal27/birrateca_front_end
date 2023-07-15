import { motion } from "framer-motion";
import React from "react";
import logo from "../assets/logoBirrateca.png";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3 }}
      className="splash"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <motion.img
        initial={{ scale: 4 }}
        animate={{ scale: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 70,
        }}
        className="splash-logo"
        src={logo}
        alt=""
        style={{ width: "60%" }}
      />
    </motion.div>
  );
}

export default Loader;
