const Gallery = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-foreground">Gallery</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Placeholders for gallery images */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-video bg-gray-200 rounded flex items-center justify-center text-gray-400">
                            Image {i}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Gallery;
