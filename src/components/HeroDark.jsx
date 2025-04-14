import heroImg from "../assets/img/hero/netero.webp";
import {FaLinkedin, FaGithub, FaEnvelope, FaYoutube} from "react-icons/fa";
import bgChaos from "../assets/img/background/chaos.svg";


export default function HeroDark() {
    return (
        <section
            id="home"
            className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{
                backgroundImage: `url(${bgChaos})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: '1000px',
            }}
        >
            <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-2xl px-10 py-12 max-w-4xl w-full flex flex-col md:flex-row items-center gap-10">

                {/* Image avec effet flou violet */}
                <div className="relative w-56 h-56 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full" style={{
                        backgroundColor: "hsl(270, 73%, 53%)", opacity: 0.7, filter: "blur(60px)"
                    }} />
                    <img
                        src={heroImg}
                        alt="Isaïa"
                        className="relative z-10 w-full h-full object-cover rounded-full shadow-lg"
                    />
                </div>

                {/* Contenu */}
                <div className="text-center md:text-left space-y-4 text-white">
                    <h1 className="text-4xl font-bold">
                        Salut, je suis <span style={{ color: "hsl(270, 73%, 53%)" }}>Isaïa</span>
                    </h1>
                    <h2 className="text-2xl font-semibold" style={{ color: "hsl(162, 100%, 58%)" }}>
                        Un Développeur full-stack
                    </h2>
                    <p className="text-gray-300 max-w-md">
                        Passionné de développement web et de projets techniques, je conçois
                        des outils utiles et modernes, du front au back.
                    </p>

                    {/* Réseaux sociaux */}
                    <div className="flex gap-4 justify-center md:justify-start text-xl"
                         style={{ color: "hsl(162, 100%, 58%)" }}>
                        <a
                            href="https://github.com/Isaia91"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#00ffd0] transition-colors"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/isa%C3%AFa-maperi-539273238/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#7f00ff] transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCb9vPKzQjAcyt3JRBekK0Dg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500 transition-colors"
                        >
                            <FaYoutube />
                        </a>
                    </div>

                    {/* Bouton */}
                    <a
                        href="#contact"
                        className="inline-block mt-4 px-6 py-2 border rounded transition"
                        style={{
                            borderColor: "hsl(270, 73%, 53%)",
                            color: "hsl(270, 73%, 53%)"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "hsl(270, 73%, 53%)";
                            e.target.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "hsl(270, 73%, 53%)";
                        }}
                    >
                        Me contacter
                    </a>
                </div>
            </div>
        </section>
    );
}
