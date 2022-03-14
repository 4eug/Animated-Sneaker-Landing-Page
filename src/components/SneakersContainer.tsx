import { motion } from "framer-motion";
import { sneakerWrapper, sneaker } from "variants";

const SneakersContainer = () => {
  return (
    <motion.div
      variants={sneakerWrapper}
      initial="initial"
      animate="animate"
      className="sneakersWrapper"
    >
      <motion.img
        variants={sneaker}
        initial="initial"
        animate="animate"
        src="/images/sneakers.png"
        className="sneakers"
      />
    </motion.div>
  );
};

export default SneakersContainer;
