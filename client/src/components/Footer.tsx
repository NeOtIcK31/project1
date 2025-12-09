import { Mail, Phone, Linkedin, Github } from 'lucide-react';

/**
 * Footer Component - Contact information and social links
 * Design: Minimalist with clickable contact details
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white section-spacing">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Максим Самсонов</h3>
            <p className="text-gray-300 mb-6">
              Пейзажный фотограф, специализирующийся на захвате красоты природы в её самых впечатляющих моментах.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Свяжитесь со мной</h4>
            <div className="space-y-3">
              {/* Phone */}
              <a
                href="tel:+79817866834"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>+7 (981) 786-68-34</span>
              </a>

              {/* Email */}
              <a
                href="mailto:samsonovmax31@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>samsonovmax31@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-gray-400 text-sm mb-4">Следите за мной в социальных сетях</p>
          <div className="flex gap-6">
            {/* Telegram */}
            <a
              href="https://t.me/NeOtIcK_S"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-300"
              aria-label="Telegram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.042 0-.084 0-.126-.01l.21-3.051 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.461c.54-.203 1.01.132.84.951z" />
              </svg>
            </a>

            {/* VK */}
            <a
              href="https://vk.com/ya4eloveck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-300"
              aria-label="VK"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 12.441h-1.244c-.41 0-.487.163-.487.487v2.441c0 .325.077.487.487.487h1.244c.41 0 .487-.162.487-.487v-2.441c0-.324.077-.487-.487-.487zm-2.441 0h-1.244c-.41 0-.487.163-.487.487v2.441c0 .325.077.487.487.487h1.244c.41 0 .487-.162.487-.487v-2.441c0-.324.077-.487-.487-.487zm-2.441 0H9.874c-.41 0-.487.163-.487.487v2.441c0 .325.077.487.487.487h1.244c.41 0 .487-.162.487-.487v-2.441c0-.324.077-.487-.487-.487zM7.118 7.118h2.441v4.882H7.118z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Максим Самсонов. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
