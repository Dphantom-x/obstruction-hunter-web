import React from 'react';

export default function Navbar() {
    const links = ['Home', 'My Work', 'Contact', 'About Me'];

    return (
        <nav className="bg-brand-red w-full flex justify-center sticky top-0 z-50">
            <div className="w-full max-w-7xl px-6 md:px-12 py-7 flex justify-end items-center">
                <ul className="flex gap-14 list-none m-0 p-0">
                    {links.map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="text-white font-inter font-normal uppercase text-lg tracking-widest border-b border-white/60 pb-1.5 hover:border-white hover:opacity-90 transition-all block"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
