import { motion, AnimatePresence, delay } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectsMenu({ toggleMenu, setToggleMenu }) {
  const menuVariants = {
    initial: { scaleY: 0, originY: 1 },
    show: {
      scaleY: 1,
      originY: 1,
      transition: { type: 'easeInOut', delay: 0.15 },
    },
    exit: {
      scaleY: 0,
      originY: 1,
      transition: { type: 'easeInOut', delay: 0.125 },
    },
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggleMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [toggleMenu]);
  return (
    <AnimatePresence>
      {toggleMenu && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="show"
          exit="exit"
          className="bg-purple-400 absolute bottom-0 md:hidden h-full w-full"
        >
          sss
        </motion.div>
      )}
    </AnimatePresence>
  );
}
