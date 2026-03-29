import heroAbout from "../assets/img/hero/hero.jpg";
import undulate from '../assets/img/background/undulate.svg';


export default function About() {
    return (
        <section id="about" className="bg-[#0f0f0f] text-white py-24 px-6 bg-no-repeat bg-[length:100%] bg-left"
                 style={{ backgroundImage: `url(${undulate})` }}>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Image ou Avatar */}
                <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 relative">
                    <div className="absolute inset-0 rounded-full bg-[#8531ff] opacity-40 blur-2xl z-0" />
                    <img
                        src={heroAbout}
                        alt="Isaïa"
                        className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#00ffd7] shadow-lg"
                    />
                </div>

                {/* Texte de présentation */}
                <div className="text-center md:text-left space-y-6">
                    <h2 className="text-4xl font-bold text-white">A propos de moi</h2>
                    <p>
                        Durant mes premières expériences chez <strong>Koniambo Nickel SAS</strong> puis 
                        <strong> Calédonienne de Solutions Business (CSB)</strong>, j’ai développé des applications web sur mesure en collaboration étroite avec les équipes métiers.
                    
                        J’ai travaillé sur des stacks variées allant de <strong>Flask (Python)</strong>, <strong>Bootstrap</strong> et <strong>JavaScript</strong> 
                         jusqu’à des architectures plus modernes basées sur <strong>Angular</strong>, <strong>Spring Boot</strong>, <strong>Kafka</strong> et <strong>Docker</strong>, 
                        avec une intégration dans écosystème Microsoft (<strong>SharePoint Online</strong>, <strong>Power Automate</strong>, <strong>Power Apps</strong>, <strong>Azure DevOps</strong>) ou bien <strong>Linux</strong>.</br>
                    
                        J’ai également pi cpncevoir plusieurs <strong>flux SSIS</strong>, me permettant de travailler sur des problématiques d’
                        <strong>ETL</strong> et de <strong>gestion de données</strong> dans des environnements exigeants.
                    </p>
                    
                    <p>
                        Aujourd’hui, je suis <strong>développeur full-stack</strong> à la <strong>Clinique Kuindo-Magnin</strong>.
                        J’y développe et maintiens des applications métiers médicales avec une stack basée sur 
                        <strong> Laravel</strong>, <strong>Angular</strong> et <strong>Docker</strong>.
                    </p>
                    <br />
                    <p>
                        À la croisée des besoins métiers et des enjeux techniques, je conçois des solutions fiables, performantes et adaptées à leur environnement.
                        Curieux et pragmatique, j’accorde une attention particulière à la qualité du code, à l’ergonomie des interfaces et à l’intégration des outils dans les processus existants.
                    </p>

                    <p className="text-gray-400 text-sm italic">
                        Technologies que j’affectionne particulièrement : React, Flask, SQL, Python — toujours partant pour explorer de nouveaux outils.
                    </p>


                    <a
                        href="/doc/CV_Isaïa_Maperi.pdf"
                        download
                        className="inline-block px-6 py-2 border border-[#00ffd7] text-[#00ffd7] rounded hover:bg-[#00ffd7] hover:text-black transition"
                    >
                        Télécharger mon CV
                    </a>

                </div>

            </div>
        </section>
    );
}
