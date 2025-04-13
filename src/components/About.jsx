export default function About() {
    return (
        <section id="about" className="bg-[#0f0f0f] text-white py-24 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Image ou Avatar */}
                <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 relative">
                    <div className="absolute inset-0 rounded-full bg-[#8531ff] opacity-40 blur-2xl z-0" />
                    <img
                        src="/src/assets/img/hero/hero.jpg"
                        alt="Isaïa"
                        className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#00ffd7] shadow-lg"
                    />
                </div>

                {/* Texte de présentation */}
                <div className="text-center md:text-left space-y-6">
                    <h2 className="text-4xl font-bold text-white">A propos de moi</h2>
                    <p>
                        Durant mes 15 mois d'alternance chez <strong>Koniambo Nickel SAS</strong>, j’ai eu l’opportunité de développer des applications web en lien direct avec les besoins métier.<br />
                        J’ai principalement travaillé avec <strong>Flask (Python)</strong>, <strong>Bootstrap</strong>, <strong>JavaScript</strong>, ainsi que l’écosystème Microsoft : <strong>SharePoint Online</strong>, <strong>Power Automate</strong>, <strong>Power Apps</strong>, et <strong>Azure DevOps</strong> pour la gestion du code.
                    </p>
                    <br />
                    <p>
                        J’ai également eu l’occasion de créer quelques <strong>flux SSIS</strong> (SQL Server Integration Services), ce qui m’a permis de découvrir les fondamentaux de l’<strong>ETL</strong> et de la <strong>gestion des données</strong>.
                    </p>
                    <br />
                    <p>
                        Aujourd’hui, je travaille chez <strong>CSB (Calédonienne de Solutions Business)</strong> en tant que <strong>qu'alternant développeur full-stack</strong>, où je contribue à des projets utilisant <strong>Angular</strong>, <strong>Spring Boot</strong>, <strong>Kafka</strong> et <strong>Docker</strong>.
                    </p>
                    <br />
                    <p>
                        Curieux et pragmatique, j’aime développer des solutions utiles, fonctionnelles, et bien intégrées dans leur environnement métier.
                    </p>

                    <p className="text-gray-400 text-sm italic">
                        Technologies préférées : React, Flask, SQL, Python — et j'adore apprendre !
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
