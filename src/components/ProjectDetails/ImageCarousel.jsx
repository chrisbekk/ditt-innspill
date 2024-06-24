import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const arrayLength = images?.length;
  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(arrayLength - 1);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };
  const nextImage = () => {
    if (currentIndex === arrayLength - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const closeModal = e => {
    if (e.target === e.currentTarget) {
      setFullscreen(false);
    }
  };

  return (
    <div className="md:mx-auto w-full max-w-[730px] md:max-h-[540px] relative">
      <div className="absolute h-full w-10 left-0 z-50 flex items-center">
        <button
          onClick={prevImage}
          className="size-10 bg-white bg-opacity-85 rounded-full flex items-center justify-center hover:bg-opacity-100 border border-black"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute h-full w-10 right-0 z-50 flex items-center">
        <button
          onClick={nextImage}
          className="size-10 bg-white bg-opacity-85 rounded-full flex items-center justify-center hover:bg-opacity-100 border border-black "
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="w-full h-full flex overflow-hidden">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image.src}
            onClick={() => setFullscreen(true)}
            className={`${index === currentIndex ? '' : 'opacity-70'} w-full h-auto hover:cursor-pointer `}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transitionDuration: '500ms',
            }}
          />
        ))}
      </div>
      <div className="w-full flex gap-2 justify-center mt-4">
        {images?.map((image, index) => (
          <span
            key={image?.src}
            className={`${currentIndex === index ? 'bg-opacity-100' : 'bg-opacity-50'} bg-black rounded-full size-3`}
          ></span>
        ))}
      </div>
      {fullscreen &&
        createPortal(
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-black bg-opacity-35 z-[999] flex items-center justify-center"
          >
            <div className="bg-white w-11/12 max-w-[1024px] p-10 h-auto">
              <div className="relative">
                <div className="absolute h-full w-10 left-0 z-50 flex items-center">
                  <button
                    onClick={prevImage}
                    className="size-10 bg-white bg-opacity-85 rounded-full flex items-center justify-center hover:bg-opacity-100 border border-black"
                  >
                    <FaChevronLeft />
                  </button>
                </div>
                <div className="absolute h-full w-10 right-0 z-50 flex items-center">
                  <button
                    onClick={nextImage}
                    className="size-10 bg-white bg-opacity-85 rounded-full flex items-center justify-center hover:bg-opacity-100 border border-black "
                  >
                    <FaChevronRight />
                  </button>
                </div>

                <div className="w-full h-full flex overflow-hidden">
                  {images?.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      className={`${index === currentIndex ? '' : 'opacity-70'} w-full h-auto`}
                      style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transitionDuration: '500ms',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
