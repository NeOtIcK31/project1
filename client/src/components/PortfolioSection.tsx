import { useState } from 'react';

/**
 * Portfolio Section - Masonry gallery of landscape photographs
 * Design: Asymmetric grid layout with hover effects
 */
export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Portfolio images with different aspect ratios for masonry layout
  const portfolioImages = [
    {
      id: 1,
      src: '/images/1.jpg',
      alt: 'Петербургский летний закат',
      title: 'Летний закат',
      category: 'Закаты',
    },
    {
      id: 2,
      src: '/images/2.jpg',
      alt: 'Вид из окна',
      title: 'Закат после прогулки',
      category: 'Закаты',
    },
    {
      id: 3,
      src: '/images/3.jpg',
      alt: 'Зелёный светофор',
      title: 'Светофор',
      category: 'Город',
    },
    {
      id: 4,
      src: '/images/4.jpg',
      alt: 'Андерсонград',
      title: 'Андерсонград',
      category: 'Путешествия',
    },
    {
      id: 5,
      src: '/images/5.jpg',
      alt: 'Фонари троицкого',
      title: 'Фонари троицкого моста',
      category: 'Мосты',
    },
  ];

  return (
    <section id="portfolio" className="w-full bg-gray-50 section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Портфолио
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Коллекция моих лучших пейзажных фотографий, отражающих красоту и разнообразие природы и мира
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer fade-in-up ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${index === 1 ? 'lg:row-span-2' : ''}`}
              onClick={() => setSelectedImage(image.src)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover image-hover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-semibold text-gray-300 mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-auto max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              aria-label="Закрыть"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
