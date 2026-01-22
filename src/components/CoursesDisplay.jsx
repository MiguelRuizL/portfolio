import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CertificateCard, BaseCard } from './Cards';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function CoursesDisplay({ courses = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const children = Array.from(container.children);
      const centerPoint = scrollPosition + containerWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(centerPoint - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current && index >= 0 && index < courses.length) {
      const container = scrollRef.current;
      const targetChild = container.children[index];
      const containerWidth = container.offsetWidth;
      const childWidth = targetChild.offsetWidth;
      const targetScroll = targetChild.offsetLeft - (containerWidth / 2) + (childWidth / 2);

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  // centro 2da card al cargar
  useEffect(() => {
    const timer = setTimeout(() => scrollTo(1), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <BaseCard 
        title="Cursos y Certificaciones" 
        subtitle='Conocimientos adquiridos a través de cursos y boosters' 
        className="bg-transparent shadow-none dark:bg-gray-900"
      >
        <div className="relative group/container px-0 md:px-4">
          <button 
            onClick={() => scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full 
                       bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700
                       transition-all duration-300 hover:scale-110 active:scale-95
                       ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <FaChevronLeft className="text-green-600" />
          </button>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-10 
                       px-6 md:px-[20%] lg:px-[30%]"
            style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollPadding: '0 20px'
            }}
          >
            {courses.map((course, index) => (
              <div 
                key={index}
                className="min-w-full md:min-w-[450px] snap-center transition-transform duration-500"
                style={{
                    transform: activeIndex === index ? 'scale(1.02)' : 'scale(0.95)',
                    opacity: activeIndex === index ? 1 : 0.6
                }}
              >
                <CertificateCard course={course} />
              </div>
            ))}
          </div>

          {/* Botón Derecho: Oculto en mobile (hidden), visible en md (md:flex) */}
          <button 
            onClick={() => scrollTo(activeIndex + 1)}
            disabled={activeIndex === courses.length - 1}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full 
                       bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700
                       transition-all duration-300 hover:scale-110 active:scale-95
                       ${activeIndex === courses.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <FaChevronRight className="text-green-600" />
          </button>

          <div className="flex justify-center items-center gap-3 mt-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="relative h-3 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    width: activeIndex === index ? 24 : 8,
                    backgroundColor: activeIndex === index ? '#16a34a' : '#d1d5db',
                  }}
                  className="h-2 rounded-full cursor-pointer transition-all duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </BaseCard>
    </div>
  );
}