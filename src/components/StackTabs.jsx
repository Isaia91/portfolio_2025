import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from './Card';

const StackTabs = ({ data }) => {
    const categories = [...new Set(data.map(item => item.subtitle))];
    const [activeTab, setActiveTab] = useState(categories[0]);
    const visibleCards = data.filter(item => item.subtitle === activeTab);
    const scrollRef = useRef(null);

    const scrollAmount = 1.5; // pixels per tick
    const intervalDelay = 30; // ms
    const cardWidth = 260; // largeur estimée d'une carte

    useEffect(() => {
        if (visibleCards.length <= 4) return;

        const scrollContainer = scrollRef.current;

        const interval = setInterval(() => {
            if (scrollContainer) {
                const { scrollLeft } = scrollContainer;
                const loopTriggerPoint = (visibleCards.length * cardWidth);

                if (scrollLeft >= loopTriggerPoint) {
                    scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
                } else {
                    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, intervalDelay);

        return () => clearInterval(interval);
    }, [activeTab, visibleCards.length]);


    return (
        <div className="space-y-10">
            {/* Onglets */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(cat)}
                        className={`px-4 py-2 rounded-full border transition ${
                            activeTab === cat
                                ? 'bg-violet-600 text-white border-violet-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'

                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Carrousel auto défilant */}
            <div className="relative px-10 flex items-center">
                <div
                    ref={scrollRef}
                    className="overflow-x-auto hide-scrollbar scroll-smooth max-w-screen-xl mx-auto"
                >
                    <div
                        className={`flex gap-6 px-12 py-2 ${visibleCards.length <= 4 ? 'justify-center' : ''} w-max`}
                    >
                        {/* Cartes visibles */}
                        {visibleCards.map((tech, index) => (
                            <div key={index} className="shrink-0" style={{ width: cardWidth }}>
                                <Card {...tech} />
                            </div>
                        ))}

                        {/* Clone pour scroll infini seulement si plus de 4 cartes */}
                        {visibleCards.length > 4 &&
                            visibleCards.map((tech, index) => (
                                <div key={`clone-${index}`} className="shrink-0" style={{ width: cardWidth }}>
                                    <Card {...tech} />
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StackTabs;
