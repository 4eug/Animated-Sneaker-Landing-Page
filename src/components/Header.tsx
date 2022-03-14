import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Header = () => {
  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="header"
    >
      <span className="header-logo">
        WeSneakez<span>.</span>
      </span>
      <span className="header-menu">Menu</span>
      <span className="header-menu2">Menu</span>
    </motion.nav>
  );
};

export default Header;
