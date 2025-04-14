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
                        Lors de mes 18 mois chez <strong>Koniambo Nickel SAS</strong>, j’ai mené le développement d’applications web sur mesure, conçues en étroite collaboration avec les métiers.
                        Ma stack principal reposait sur <strong>Flask (Python)</strong>, <strong>Bootstrap</strong> et <strong>JavaScript</strong>, avec une forte intégration à l’écosystème Microsoft : <strong>SharePoint Online</strong>, <strong>Power Automate</strong>, <strong>Power Apps</strong> et <strong>Azure DevOps</strong> pour l’industrialisation du code.
                    </p>
                    <br />
                    <p>
                        J’ai également mis en place plusieurs <strong>flux SSIS</strong> (SQL Server Integration Services), une expérience qui m’a permis d’appréhender les enjeux de l’<strong>ETL</strong> et de la <strong>gestion de données</strong> dans des contextes industriels exigeants.
                    </p>
                    <br />
                    <p>
                        Aujourd’hui, j’évolue chez <strong>CSB (Calédonienne de Solutions Business)</strong> en tant que <strong>développeur full-stack</strong> en alternance.
                        J’interviens sur des projets stratégiques basés sur des technologies telles que <strong>Angular</strong>, <strong>Spring Boot</strong>, <strong>Kafka</strong> et <strong>Docker</strong>.
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
