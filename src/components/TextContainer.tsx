import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="textContainer"
    >
      {/* upper */}
      <div className="textContainer-top">
        <motion.span
          variants={fadeIn()}
          className="text-black font-bold text-2xl"
        >
          Get Your Favorite
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-5xl">
          2 /4
        </motion.span>
      </div>
      {/* //text */}
      <div className="textContainer-middle">
        <motion.span variants={fadeIn()} initial="initial" animate="animate">
          SNEAKERS
        </motion.span>
      </div>
      {/* lower */}
      <div className="textContainer-bottom ">
        <motion.button variants={fadeIn()}>show all sneakers</motion.button>
        <motion.p variants={fadeIn()}>
          Affordable <span> Sneakers </span> <br /> you can buy
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextContainer;
