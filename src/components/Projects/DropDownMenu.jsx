import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

const kommuner = [
  {
    id: 1,
    name: 'Stavanger',
    crest: 'https://kommuneinfoprod.blob.core.windows.net/crests/1103',
  },
  {
    id: 2,
    name: 'Hustadvika',
    crest: 'https://kommuneinfoprod.blob.core.windows.net/crests/1579',
  },
  {
    id: 3,
    name: 'Røros',
    crest: 'https://kommuneinfoprod.blob.core.windows.net/crests/5025',
  },
  {
    id: 4,
    name: 'Os',
    crest: 'https://kommuneinfoprod.blob.core.windows.net/crests/3430',
  },
  {
    id: 5,
    name: 'Tysvær',
    crest: 'https://kommuneinfoprod.blob.core.windows.net/crests/1146',
  },
];

export default function DropDownMenu({ activeKommune, setActiveKommune }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleActiveKommune = id => {
    const updatedKommune = kommuner.find(kommune => kommune.id === id);
    setActiveKommune(updatedKommune);
    setIsVisible(false);
  };
  const menuVariants = {
    initial: { scaleY: 0, originY: 0, opacity: 0 },
    show: { scaleY: 1, originY: 0, opacity: 1 },
    hide: { scaleY: 0, originY: 0, opacity: 0 },
  };
  return (
    <>
      <div className="w-full flex justify-end mt-8">
        <div className="flex gap-2 items-center">
          <p className="text-base">Velg kommune:</p>
          <div className="relative ">
            <button
              onClick={() => setIsVisible(prev => !prev)}
              className={`border border-neutral-300 h-12 w-52 flex ${activeKommune ? 'justify-between' : 'justify-end'} items-center pr-4 hover:border-2 hover:border-custom_green`}
            >
              {activeKommune && (
                <div className="h-full flex gap-2 items-center p-3 ">
                  <img
                    src={activeKommune?.crest}
                    className="size-6 object-contain"
                  />
                  <p>{activeKommune?.name}</p>
                </div>
              )}

              {isVisible ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  variants={menuVariants}
                  initial="inital"
                  animate="show"
                  exit="hide"
                  className="absolute -bottom-[h-full] shadow-md w-full px-1 border z-50"
                >
                  <ul className="bg-slate-50">
                    <li
                      className="h-full p-3 hover:bg-neutral-200 hover:cursor-pointer transition-colors"
                      onClick={() => {
                        setActiveKommune(null);
                        setIsVisible(false);
                      }}
                    >
                      <p>Ingen</p>
                    </li>
                    {kommuner.map(kommune => (
                      <li
                        key={kommune.name}
                        className={`h-full flex gap-2 items-center p-3 hover:bg-neutral-200 hover:cursor-pointer transition-colors ${activeKommune?.name === kommune.name ? 'bg-green-200' : ''} `}
                        onClick={() => handleActiveKommune(kommune.id)}
                      >
                        <img
                          src={kommune?.crest}
                          className="size-6 object-contain"
                        />
                        <p>{kommune.name}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
