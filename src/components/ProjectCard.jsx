import { useState, useEffect } from 'react';
import projects from '../data/projects.json';
import infiniteDestroy from '../assets/img/background/infiniteDestroy.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Gradients aléatoires pour chaque carte
const gradients = [
    'linear-gradient(315deg, hsl(270, 73%, 53%), hsl(162, 100%, 58%))',
    'linear-gradient(315deg, hsl(162, 100%, 58%), #000000)',
    'linear-gradient(315deg, hsl(270, 73%, 53%), #1f1f1f)',
    'linear-gradient(315deg, #1f1f1f, hsl(162, 100%, 58%))',
    'linear-gradient(315deg, #ffffff10, hsl(270, 73%, 53%))',
    'linear-gradient(315deg, hsl(270, 73%, 53%), #4b0082)',
];

function getRandomGradient() {
    return gradients[Math.floor(Math.random() * gradients.length)];
}

const CARD_WIDTH = 280 + 16; // largeur carte + marge

const ProjectCard = ({ project }) => {
    const gradient = getRandomGradient();

    return (
        <div
            className="relative overflow-hidden rounded-xl p-6 backdrop-blur-md bg-white/5 text-white w-[280px] shrink-0 mx-2"
        >
            <div
                className="absolute inset-0 z-0"
                style={{ background: gradient, filter: 'blur(80px)' }}
            ></div>
            <div className="relative z-10">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="mt-2 text-sm">{project.description}</p>
                {project.techs.length > 0 && (
                    <p className="text-xs text-gray-200 mt-3 italic">
                        {project.techs.join(' · ')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(getVisibleCount());

    function getVisibleCount() {
        if (typeof window !== 'undefined' && window.innerWidth < 768) return 1;
        return 4;
    }

    useEffect(() => {
        const handleResize = () => setVisibleCount(getVisibleCount());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, projects.length - visibleCount);

    const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

    return (
        <section
            id="projects"
            className="bg-[#0f0f0f] text-white py-24 px-6 bg-no-repeat bg-[length:100%] bg-left"
            style={{ backgroundImage: `url(${infiniteDestroy})` }}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Projets</h2>

                <div className="relative flex items-center justify-center">
                    {/* Bouton gauche */}
                    <button
                        onClick={prev}
                        className="absolute left-0 z-20 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    {/* Carrousel */}
                    <div className="overflow-hidden w-full max-w-6xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
                        >
                            {projects.map((project, i) => (
                                <ProjectCard project={project} key={i} />
                            ))}
                        </div>
                    </div>

                    {/* Bouton droit */}
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
