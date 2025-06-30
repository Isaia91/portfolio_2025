import Navbar from "../components/Navbar.jsx";
import HeroDark from "../components/HeroDark.jsx";
import data from "../data/stack.json";
import StackTabs from '../components/StackTabs';
import chaosBg from '../assets/img/background/chaos.svg';
import About from "../components/About";
import ProjectCard from "../components/ProjectCard.jsx";
import ToShare from "../components/ToShare.jsx";
import ContactForm from "../components/ContactForm";

export default function Home() {
    return (
        <>
            <Navbar /> {/* Maintenant la navbar est bien fixée tout en haut */}
            {/* Séparateur flouté élégant */}
            <div className="w-full h-[2px] bg-gradient-to-r from-[#00ffd0]/30 via-[#7f00ff]/50 to-[#00ffd0]/30 backdrop-blur-sm" />

            <HeroDark />
            {/* Séparateur flouté élégant */}
            <div className="w-full h-[2px] bg-gradient-to-r from-[#00ffd0]/30 via-[#7f00ff]/50 to-[#00ffd0]/30 backdrop-blur-sm" />

            <About />
            {/* Séparateur flouté élégant */}
            <div className="w-full h-[2px] bg-gradient-to-r from-[#00ffd0]/30 via-[#7f00ff]/50 to-[#00ffd0]/30 backdrop-blur-sm" />


            {/* Section Stack */}
            <section
                id="stack"
                className="text-white py-24 px-6"
                style={{
                    backgroundColor: '#0f0f0f',
                    backgroundImage: `url(${chaosBg})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: '1000px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
                        Stack
                    </h2>
                    <StackTabs data={data} />
                </div>
            </section>

            {/* Séparateur flouté élégant */}
            <div className="w-full h-[2px] bg-gradient-to-r from-[#00ffd0]/30 via-[#7f00ff]/50 to-[#00ffd0]/30 backdrop-blur-sm" />

            {/* Section Projets */}
            <ProjectCard />

            {/* Séparateur flouté élégant */}
            <div className="w-full h-[2px] bg-gradient-to-r from-[#00ffd0]/30 via-[#7f00ff]/50 to-[#00ffd0]/30 backdrop-blur-sm" />

            <ToShare />

            <section id="contact" className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
                <div className="container mx-auto px-4">
                    <ContactForm />
                </div>
            </section>

        </>
    );
}
