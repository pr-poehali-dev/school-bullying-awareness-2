import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "education", label: "Образование" },
  { id: "stories", label: "Истории" },
  { id: "tips", label: "Советы" },
  { id: "test", label: "Тест" },
];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-card-violet rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">✊</span>
          </div>
          <span className="font-rubik font-bold text-gray-900 text-sm md:text-base">Вместе против буллинга</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "text-gray-600 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                activeSection === item.id
                  ? "bg-violet-600 text-white"
                  : "text-gray-600 hover:bg-violet-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export { NAV_ITEMS };
