import { useState } from "react";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";

const galleryItems = [
  { 
    id: 1, 
    tag: "WEDDING", 
    title: "Garden Ceremony Moments", 
    src: "/venue.jpg",
    category: "wedding",
    aspect: "portrait",
    featured: true
  },
  { 
    id: 2, 
    tag: "DINING", 
    title: "Premium Garden Brunch", 
    src: "/hero.jpg",
    category: "dining",
    aspect: "landscape"
  },
  { 
    id: 3, 
    tag: "FAMILY", 
    title: "Kids & Family Day Vibes", 
    src: "/family.jpg",
    category: "family",
    aspect: "square"
  },
  { 
    id: 4, 
    tag: "EVENT", 
    title: "Elegant Event Setup", 
    src: "/setup.jpg",
    category: "event",
    aspect: "portrait"
  },
  { 
    id: 5, 
    tag: "PHOTO", 
    title: "Content-Ready Corners", 
    src: "/images/gallery/5.jpg",
    category: "photo",
    aspect: "portrait",
    featured: true
  },
  { 
    id: 6, 
    tag: "DINING", 
    title: "Lunch Experience", 
    src: "/dining2.jpg",
    category: "dining",
    aspect: "landscape"
  },
  { 
    id: 7, 
    tag: "WEDDING", 
    title: "Reception Evening Glow", 
    src: "/wedding.jpg",
    category: "wedding",
    aspect: "portrait"
  },
  { 
    id: 8, 
    tag: "FAMILY", 
    title: "Games & Family Fun", 
    src: "/fam-game.jpg",
    category: "family",
    aspect: "landscape"
  },
  { 
    id: 9, 
    tag: "CORPORATE", 
    title: "Corporate Retreat Vibes", 
    src: "/images/gallery/9.jpg",
    category: "corporate",
    aspect: "square"
  },
  { 
    id: 10, 
    tag: "CELEBRATION", 
    title: "Anniversary Celebrations", 
    src: "/images/gallery/10.jpg",
    category: "celebration",
    aspect: "portrait"
  },
  { 
    id: 11, 
    tag: "DETAILS", 
    title: "Venue Details & Décor", 
    src: "/images/gallery/11.jpg",
    category: "details",
    aspect: "square"
  },
  { 
    id: 12, 
    tag: "SEASONAL", 
    title: "Seasonal Garden Beauty", 
    src: "/images/gallery/12.jpg",
    category: "seasonal",
    aspect: "landscape"
  },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "wedding", label: "Weddings", count: 3 },
  { id: "dining", label: "Dining", count: 3 },
  { id: "family", label: "Family", count: 3 },
  { id: "corporate", label: "Corporate", count: 1 },
  { id: "celebration", label: "Celebrations", count: 2 },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen">
      <PageHero
        kicker="Visual Journey"
        title="Experience the Luxe Garden Magic"
        subtitle="Browse through our curated collection of moments that capture the beauty and atmosphere of our venue."
        imageSrc="/hero.jpg"
        overlay={true}
      />

      {/* Categories Filter */}
      <section className="py-10 bg-gradient-to-b from-white to-slate-50/30 border-b border-slate-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-200"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-emerald-200"
                }`}
              >
                {category.label}
                {category.count && (
                  <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id 
                      ? 'bg-white/20' 
                      : 'bg-slate-100'
                  }`}>
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">
              {selectedCategory === 'all' ? 'All Moments' : 
               categories.find(c => c.id === selectedCategory)?.label}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Click on any image to view it larger and explore the details.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-1 ${
                  item.featured ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
                }`}
                onClick={() => openLightbox(item)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full transition-transform duration-700 group-hover:scale-110 ${
                      item.aspect === 'portrait' ? 'aspect-[3/4]' : 
                      item.aspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-square'
                    } object-cover`}
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold tracking-wider">
                        {item.tag}
                      </span>
                      {item.featured && (
                        <span className="px-2.5 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-xs font-bold">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">Click to view larger</p>
                  </div>
                  
                  {/* Quick View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No photos found</h3>
              <p className="text-slate-600">Try selecting a different category</p>
            </div>
          )}
        </Container>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
        <Container>
          <SectionTitle
            kicker="Featured Moments"
            title="Highlighted Memories"
            subtitle="Some of our favorite captured moments from recent events"
          />

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {galleryItems.filter(item => item.featured).slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-3 text-white">
                  <div className="text-xs font-bold tracking-wider opacity-90">{item.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 p-8 md:p-12 text-center overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <span>✨</span>
                Ready to Create Your Own Memories?
                <span>✨</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Bring Your Vision to Life
              </h2>
              
              <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
                See something you love? Let's recreate that magic for your special day.
                Book a tour to experience the venue in person.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 shadow-lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Your Date
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Schedule a Tour
                  </Button>
                </Link>
              </div>
              
              <p className="text-emerald-200/80 text-sm mt-8">
                💬 Virtual tours available • 📸 Professional photography included • 🌟 Rated 5/5 by our clients
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="rounded-xl overflow-hidden bg-white">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                      {selectedImage.tag}
                    </span>
                    {selectedImage.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-white/70">
                    Image #{selectedImage.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">Category: {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}</p>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between">
              <button
                onClick={() => {
                  const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
                  setSelectedImage(filteredItems[prevIndex]);
                }}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(filteredItems[nextIndex]);
                }}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}