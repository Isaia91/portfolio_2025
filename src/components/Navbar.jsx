import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo + Nav en ligne */}
                <div className="flex items-center space-x-8">
                    <a href="#home">
                        <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
                    </a>

                    <nav className="hidden md:flex space-x-6">
                        <a href="#about" className="hover:text-gray-400 transition-colors">A propos</a>
                        <a href="#projects" className="hover:text-gray-400 transition-colors">Projets</a>
                        <a href="#toShare" className="hover:text-gray-400 transition-colors">A découvrir</a>
                        <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
                    </nav>
                </div>

                {/* Menu mobile button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu mobile déroulant */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-900">
                    <a href="#home" className="block hover:text-gray-400">Home</a>
                    <a href="#about" className="block hover:text-gray-400">A propos</a>
                    <a href="#projects" className="block hover:text-gray-400">Projets</a>
                    <a href="#toShare" className="block hover:text-gray-400">A découvrir</a>
                    <a href="#contact" className="block hover:text-gray-400">Contact</a>
                </div>
            )}
        </header>
    );
}
