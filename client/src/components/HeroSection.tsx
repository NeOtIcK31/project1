/**
 * Hero Section - Full-width hero with background image
 * Design: Dramatic landscape image with overlay and text
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/head.jpg)',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Максим Самсонов
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
          Пейзажный фотограф
        </p>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
          Захватываю красоту природы в её самых впечатляющих моментах
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            const element = document.getElementById('portfolio');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-12 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
        >
          Посмотреть работы
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
