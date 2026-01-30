export function PhotoCard({ src, tag, title, subtitle, className = "", onClick }) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}
      onClick={onClick}
    >
      {/* Image Container with Overlay */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-transparent group-hover:from-black/20 group-hover:via-black/10 group-hover:to-black/0 transition-all duration-500 z-10" />
        
        {/* Image */}
        <img
          src={src}
          alt={title || ""}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Tag Badge */}
        {tag && (
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold tracking-widest text-emerald-700 shadow-sm">
              {tag}
            </span>
          </div>
        )}
        
        {/* View Icon (appears on hover) */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
        
        {/* Subtle Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-5 lg:p-6 relative bg-white">
        {/* Title */}
        {title && (
          <div className="text-base lg:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors duration-300">
            {title}
          </div>
        )}
        
        {/* Subtitle */}
        {subtitle && (
          <div className="mt-2 text-sm text-slate-600 leading-relaxed">
            {subtitle}
          </div>
        )}
        
        {/* Learn More Link (appears on hover) */}
        <div className="mt-4 pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 group-hover:text-emerald-800">
            <span>Learn more</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
        
        {/* Decorative Corner Accent */}
        <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-200 rounded-bl-lg"></div>
        </div>
      </div>
      
      {/* Optional: Add a shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
}

// Optional: Create a simpler variant for grid layouts
export function PhotoCardSimple({ src, tag, title, subtitle, onClick }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={title || ""}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {tag && (
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-bold text-emerald-800">
              {tag}
            </span>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        {title && <div className="text-base font-bold mb-1">{title}</div>}
        {subtitle && <div className="text-sm text-white/90">{subtitle}</div>}
      </div>
    </div>
  );
}

// Optional: Create a square variant for gallery/masonry layouts
export function PhotoCardSquare({ src, tag, title, onClick }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={title || ""}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest text-emerald-700">
              {tag}
            </span>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title && (
            <div className="text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {title}
            </div>
          )}
          <div className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Click to view
          </div>
        </div>
      </div>
    </div>
  );
}

// Optional: Create a hero variant for featured content
export function PhotoCardHero({ src, tag, title, subtitle, ctaText = "Explore", onClick }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
        <img
          src={src}
          alt={title || ""}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
          <div className="max-w-2xl">
            {tag && (
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-widest">
                  {tag}
                </span>
              </div>
            )}
            
            {title && (
              <div className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                {title}
              </div>
            )}
            
            {subtitle && (
              <div className="text-lg text-white/90 mb-6">
                {subtitle}
              </div>
            )}
            
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 group/btn">
              <span>{ctaText}</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Decorative shine effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
}