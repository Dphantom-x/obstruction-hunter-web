import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const socials = [
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/kevin_307p/' },
    { icon: 'fab fa-github', url: 'https://github.com/Alki-XII' },
    { icon: 'fab fa-linkedin', url: '#' },
    { icon: 'fab fa-tiktok', url: '#' },
    { icon: 'fab fa-youtube', url: '#' },
];

export default function Hero() {
    const [elapsed, setElapsed] = useState({ totalHours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const start = new Date('2009-05-20T00:00:00');

        const tick = () => {
            const now = new Date();
            const diff = now - start;
            const totalHours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            setElapsed({ totalHours, minutes, seconds });
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    const pad = (n) => String(n).padStart(2, '0');

    return (
        <section className="relative w-full min-h-[90vh] bg-brand-offwhite overflow-hidden flex flex-col md:flex-row items-center pt-10 md:pt-0">

            {/* Image Container */}
            <div className="md:absolute md:bottom-0 md:left-[10%] w-full md:w-[45%] h-[50vh] md:h-[85%] z-0 flex items-end justify-center pointer-events-none">
                <img
                    src="/person-original.png"
                    alt="Advocate Portrait"
                    className="h-full w-auto object-contain object-bottom"
                />
                <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-brand-offwhite to-transparent md:hidden"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center md:items-end text-center md:text-right mt-[40vh] md:mt-0 pb-20 md:pb-0">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="md:w-[60%] flex flex-col items-center md:items-end"
                >
                    <h1 className="font-oswald text-brand-red text-6xl md:text-[7rem] leading-[0.9] uppercase mb-4 drop-shadow-sm">
                        CLOSE AVENUE<br />HAS BEEN<br />ILLEGALLY GATED
                    </h1>

                    {/* "FOR" bridge word */}
                    <p className="font-oswald text-brand-red text-3xl md:text-4xl uppercase mb-2 opacity-70 tracking-wider">FOR</p>

                    {/* Live Ticking Clock - all hours */}
                    <div className="bg-brand-red text-white px-5 py-3 mb-6 rounded-md inline-block">
                        <div className="font-oswald text-3xl md:text-5xl font-bold uppercase tracking-wider flex items-baseline gap-1">
                            <span className="text-4xl md:text-6xl font-mono">{elapsed.totalHours.toLocaleString()}</span>
                            <span className="text-lg md:text-2xl opacity-80">H</span>
                            <span className="mx-1 opacity-40">:</span>
                            <span className="text-4xl md:text-6xl font-mono">{pad(elapsed.minutes)}</span>
                            <span className="text-lg md:text-2xl opacity-80">M</span>
                            <span className="mx-1 opacity-40">:</span>
                            <span className="text-4xl md:text-6xl font-mono">{pad(elapsed.seconds)}</span>
                            <span className="text-lg md:text-2xl opacity-80">S</span>
                        </div>
                    </div>

                    <h2 className="font-inter text-brand-red text-2xl md:text-3xl italic font-normal">
                        5+ years in community advocacy
                    </h2>
                </motion.div>
            </div>

            {/* Social Links - bottom right of hero, above divider */}
            <div className="absolute bottom-6 right-0 z-20 w-full max-w-7xl left-1/2 -translate-x-1/2 px-6 md:px-12">
                <div className="flex justify-end">
                    <div className="flex gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.icon}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-red text-2xl hover:text-red-700 hover:scale-110 transition-all duration-200"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
