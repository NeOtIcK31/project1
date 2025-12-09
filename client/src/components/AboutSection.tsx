/**
 * About Section - Information about the photographer
 * Design: Two-column layout with image and text
 */
export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white section-spacing">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="fade-in-up">
            <img
              src="/images/placeholder-about.jpg"
              alt="Максим Самсонов - портрет"
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-square image-hover"
            />
          </div>

          {/* Text Column */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Обо мне
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Привет! Я Максим Самсонов, профессиональный пейзажный фотограф с более чем 8 годами опыта в захвате потрясающих моментов природы. Моя страсть к фотографии началась с простого путешествия в горы, где я впервые осознал силу визуального повествования.
              </p>

              <p>
                Я специализируюсь на пейзажной фотографии, уделяя особое внимание свету, композиции и эмоциям, которые передаёт каждое изображение. Мои работы были представлены на различных выставках и опубликованы в ведущих фотографических журналах.
              </p>

              <p>
                Я верю, что каждый пейзаж имеет свою историю, и моя задача — помочь вам увидеть мир через мой объектив. Будь то величественные горы, спокойные озёра или драматические закаты, я стремлюсь создавать изображения, которые вдохновляют и трогают сердце.
              </p>

              <p>
                Когда я не фотографирую, я путешествую в поисках новых локаций, изучаю новые техники и делюсь знаниями с другими фотографами. Моя цель — вдохновить вас открыть красоту мира вокруг вас.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-black">3</p>
                <p className="text-sm text-gray-600 mt-2">Года опыта</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">100+</p>
                <p className="text-sm text-gray-600 mt-2">Проектов</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-black">100%</p>
                <p className="text-sm text-gray-600 mt-2">Качество</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
