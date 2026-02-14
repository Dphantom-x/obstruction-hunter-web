import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 px-12 flex justify-center bg-white border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-6 md:gap-0">
                <div className="text-center md:text-left">
                    <h3 className="font-oswald text-2xl text-brand-red uppercase tracking-wide m-0">
                        CLOSE AVENUE PROTEST
                    </h3>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <button className="bg-transparent border-2 border-brand-red text-brand-red px-8 py-2.5 rounded-full font-inter font-bold text-sm uppercase tracking-wide hover:bg-brand-red hover:text-white transition-all duration-300 cursor-pointer">
                        JOIN THE PROTEST
                    </button>
                </div>
            </div>
        </footer>
    );
}
