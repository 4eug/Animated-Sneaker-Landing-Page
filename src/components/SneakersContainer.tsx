import { motion } from "framer-motion";
import { sneakerWrapper, sneaker } from "variants";

const SneakersContainer = () => {
  return (
    <motion.div
      variants={sneakerWrapper}
      initial="initial"
      animate="animate"
      className="bottleWrapper"
    >
      <motion.img
        variants={sneaker}
        initial="initial"
        animate="animate"
        src="/images/sneakers.png"
        className="bottle"
      />
    </motion.div>
  );
};

export default SneakersContainer;
