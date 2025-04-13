import { useState } from 'react';
import data from '../data/toShare.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import chaosBg from "../assets/img/background/chaos.svg";

export default function ToShare() {
    const [activeCategory, setActiveCategory] = useState(data[0].category);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const categories = data.map((section) => section.category);
    const currentItems = data.find((section) => section.category === activeCategory)?.items || [];

    const visibleCount = 4;
    const totalItems = currentItems.length;

    const next = () => {
        setCarouselIndex((prev) => (prev + 1) % totalItems);
    };

    const prev = () => {
        setCarouselIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    const visibleItems = Array.from({ length: visibleCount }, (_, i) => {
        const index = (carouselIndex + i) % totalItems;
        return currentItems[index];
    });

    return (
        <section
            id="toShare"
            className=" text-white py-24 px-6"
            style={{
                backgroundColor: '#0f0f0f',
                backgroundImage: `url(${chaosBg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: '1000px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">À partager</h2>

                {/* Boutons de filtre */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setCarouselIndex(0); // Reset carousel on category change
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === cat
                                ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold'
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Carrousel */}
                <div className="relative flex items-center justify-center">
                    <button
                        onClick={prev}
                        className="absolute left-0 z-20 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <div className="overflow-hidden w-full max-w-6xl">
                        <div className="flex transition-transform duration-500 ease-in-out">
                            {visibleItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 rounded-xl p-4 backdrop-blur-md shadow-md flex flex-col items-start w-[280px] shrink-0 mx-2"
                                >
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                    )}
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                                    {item.url && (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-block text-cyan-400 text-sm hover:underline"
                                        >
                                            Voir plus ↗
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={next}
                        className="absolute right-0 z-20 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}
