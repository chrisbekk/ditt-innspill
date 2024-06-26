import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsMenu({
  toggleMenu,
  setToggleMenu,
  data,
  pending,
  fetchError,
}) {
  const menuVariants = {
    initial: { scaleY: 0, originY: 1 },
    show: {
      scaleY: 1,
      originY: 1,
      transition: { type: 'ease' },
    },
    exit: {
      scaleY: 0,
      originY: 1,
      transition: { type: 'ease' },
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
          className="absolute bottom-0 md:hidden h-full w-full pb-16"
        >
          <div className="px-2 py-1 bg-custom_yellow h-full overflow-y-scroll">
            {data.map(project => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
