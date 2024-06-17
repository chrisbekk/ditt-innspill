import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function NavbarLink({ path, linkTo, setIsVisible, children }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsVisible(false);
    navigate(path);
  };
  return (
    <motion.div className="flex items-center gap-2  border-b group hover:bg-neutral-100 transition-colors">
      {children}
      <button onClick={handleClick} className="p-3 w-full">
        <p className="text-xl text-start group-hover:text-custom_green">
          {linkTo}
        </p>
      </button>
    </motion.div>
  );
}
