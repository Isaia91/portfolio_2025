import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [form, setForm] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_mujs2ca",           // remplace par ton vrai ID EmailJS
                "template_5z97n44",          // remplace par ton template ID
                formRef.current,
                "HtfpFatS3woMVzAWC"          // ta clé publique
            )
            .then(() => {
                setSubmitted(true);
                setForm({ user_name: "", user_email: "", message: "" });
                formRef.current.reset();
            })
            .catch((err) => {
                console.error("Erreur d'envoi :", err);
            });
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white/10 backdrop-blur rounded-2xl shadow-2xl text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Contacte-moi</h2>

            {submitted ? (
                <p className="text-green-400 text-center">Merci pour ton message !</p>
            ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Votre nom"
                        value={form.user_name}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Votre email"
                        value={form.user_email}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Ton message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#7f00ff] to-[#00ffd0] hover:opacity-90 text-white py-3 px-6 rounded font-semibold transition-all"
                    >
                        Envoyer
                    </button>
                </form>
            )}

            {/* Réseaux sociaux */}
            <div className="mt-8 flex justify-center space-x-6 text-2xl">
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
        </div>
    );
}
