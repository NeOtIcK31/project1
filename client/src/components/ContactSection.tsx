import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Contact Section - Contact form and information
 * Design: Two-column layout with form and contact details
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты');
      return;
    }

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);

    // Show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacts" className="w-full bg-white section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Контакты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения проектов, заказов или сотрудничества
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Иван Петров"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="ivan@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                  placeholder="Расскажите о вашем проекте..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
              >
                Отправить сообщение
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-in fade-in">
                  ✓ Спасибо! Ваше сообщение успешно отправлено. Я свяжусь с вами в ближайшее время.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold text-black mb-8">Информация для связи</h3>

            {/* Contact Items */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black text-white">
                    <Phone size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-1">Телефон</h4>
                  <a
                    href="tel:+79817866834"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    +7 (981) 786-68-34
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black text-white">
                    <Mail size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-1">Электронная почта</h4>
                  <a
                    href="mailto:samsonovmax31@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    samsonovmax31@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black text-white">
                    <MapPin size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-1">Социальные сети</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://t.me/NeOtIcK_S"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors font-medium"
                    >
                      Telegram
                    </a>
                    <span className="text-gray-400">•</span>
                    <a
                      href="https://vk.com/ya4eloveck"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors font-medium"
                    >
                      VK
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700 text-sm">
                <strong>Время ответа:</strong> Я стараюсь ответить на все сообщения в течение 24 часов. Спасибо за ваше терпение!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
