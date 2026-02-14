import { motion } from 'framer-motion';

const videos = [
    { id: 1, title: 'Introduction', category: 'Awareness', color: 'bg-black' },
    { id: 2, title: 'The Gated Street', category: 'Evidence', color: 'bg-brand-red' },
    { id: 3, title: 'Community Impact', category: 'Interviews', color: 'bg-black' },
    { id: 4, title: 'Call to Action', category: 'Protest', color: 'bg-brand-red' },
    // Add more placeholders as needed
];

export default function VideoGrid() {
    return (
        <section className="py-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12">
                <h2 className="font-oswald text-4xl md:text-5xl text-brand-red uppercase mb-4 text-center">
                    Watch the Series
                </h2>
                <p className="font-inter text-gray-600 max-w-2xl text-center">
                    Follow the journey to liberate Close Avenue.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {videos.map((video) => (
                    <motion.div
                        key={video.id}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        className="flex flex-col gap-3 group cursor-pointer"
                    >
                        {/* Video Thumbnail Placeholder (Vertical Reels Ratio) */}
                        <div className={`relative aspect-[9/16] ${video.color} rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow`}>
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                                <i className="fas fa-play text-white text-4xl"></i>
                            </div>
                        </div>

                        {/* Video Info */}
                        <div className="text-center">
                            <h3 className="font-oswald text-brand-red text-xl uppercase">{video.title}</h3>
                            <span className="font-inter text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase tracking-widest">
                                {video.category}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
