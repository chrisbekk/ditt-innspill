import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { MdHome } from 'react-icons/md';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { CiMap } from 'react-icons/ci';

import NavbarLink from './NavbarLink';
import { useEffect } from 'react';

export default function NavbarMenu({ isVisible, setIsVisible }) {
  const overlayVariants = {
    initial: { opacity: 0 },
    show: { opacity: 1, transition: { type: 'ease' } },
    hide: { opacity: 0, transition: { type: 'ease', delay: 0.25 } },
  };
  const menuVariants = {
    initial: { x: '-100%' },
    show: {
      x: 0,
      transition: { type: 'ease', delay: 0.425, staggerChildren: 0.6 },
    },
    hide: { x: '-100%', transition: { delay: 0.125 } },
  };

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="show"
          exit="hide"
          onClick={handleClose}
          className="absolute font-figTree inset-0 bg-black bg-opacity-50 z-[999] md:hidden hover:cursor-pointer"
        >
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="show"
            exit="hide"
            className="h-screen w-52 bg-white px-4 pt-10"
          >
            <h1 className="text-2xl underline mb-5">DittInnspill</h1>
            <nav>
              <NavbarLink
                path={'/'}
                linkTo={'Hjem'}
                setIsVisible={setIsVisible}
              >
                <MdHome className="text-xl group-hover:text-custom_green" />
              </NavbarLink>
              <NavbarLink
                path={'/projects'}
                linkTo={'Prosjekter'}
                setIsVisible={setIsVisible}
              >
                <CiMap className="text-xl group-hover:text-custom_green" />
              </NavbarLink>
              <NavbarLink
                path={'about'}
                linkTo={'Om'}
                setIsVisible={setIsVisible}
              >
                <FaRegQuestionCircle className="text-xl group-hover:text-custom_green" />
              </NavbarLink>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('navbarMenu'),
  );
}
