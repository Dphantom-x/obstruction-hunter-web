import React from 'react';

export default function SectionDivider({ text = 'CURRENTLY ...' }) {
    return (
        <div className="w-full bg-white relative -mt-1">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Top red line - flush with bottom of hero image */}
                <div className="h-[2px] bg-brand-red"></div>

                {/* Content area between the two lines */}
                <div className="py-6 flex items-center">
                    <h3 className="font-oswald text-brand-red text-3xl md:text-4xl uppercase tracking-wider font-bold m-0">
                        {text}
                    </h3>
                </div>

                {/* Bottom red line */}
                <div className="h-[2px] bg-brand-red"></div>
            </div>
        </div>
    );
}
