import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Minimalist navigation with smooth scroll
 * Design: Clean white background, sticky positioning, smooth transitions
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Главная', id: 'home' },
    { label: 'Обо мне', id: 'about' },
    { label: 'Портфолио', id: 'portfolio' },
    { label: 'Контакты', id: 'contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 shadow-sm">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl md:text-2xl font-bold text-black hover:opacity-70 transition-opacity"
        >
          MS
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-medium text-gray-700 hover:text-black transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
