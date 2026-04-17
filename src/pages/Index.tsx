import { useState } from "react";
import Navbar, { NAV_ITEMS } from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import { EducationSection, StoriesSection, TipsSection } from "@/components/ContentSections";
import QuizSection from "@/components/QuizSection";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-white font-golos">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="pt-16">
        {activeSection === "home" && <HomeSection setActiveSection={setActiveSection} />}
        {activeSection === "education" && <EducationSection />}
        {activeSection === "stories" && <StoriesSection />}
        {activeSection === "tips" && <TipsSection />}
        {activeSection === "test" && <QuizSection setActiveSection={setActiveSection} />}

        <footer className="bg-gray-950 text-white mt-16 py-10 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-card-violet rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">✊</span>
              </div>
              <span className="font-rubik font-bold text-lg">Вместе против буллинга</span>
            </div>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Образовательный проект для школ. Вместе мы создаём безопасную среду для каждого ребёнка.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
