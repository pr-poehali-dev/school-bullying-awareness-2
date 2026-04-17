import Icon from "@/components/ui/icon";

interface HomeSectionProps {
  setActiveSection: (id: string) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <div>
      <section className="gradient-hero noise-bg relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute top-20 left-10 w-64 h-64 bg-violet-500/30 blob animate-float blur-2xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400/20 blob-2 animate-float-delay blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 blob blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
              <span className="text-yellow-400 text-sm">✦</span>
              <span className="text-white/80 text-sm font-medium">Образовательный проект для школ</span>
            </div>

            <h1 className="font-rubik text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-up-delay-1">
              Стоп<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">буллинг</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 animate-fade-up-delay-2">
              Вместе создаём школу, где каждый чувствует себя в безопасности. Узнай о буллинге, прочти реальные истории и пройди тест на толерантность.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up-delay-3">
              <button
                onClick={() => setActiveSection("test")}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 font-rubik"
              >
                Пройти тест ✦
              </button>
              <button
                onClick={() => setActiveSection("education")}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-200 hover:scale-105"
              >
                Узнать больше
              </button>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center animate-fade-up-delay-4">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl shadow-violet-900/50 animate-float border-2 border-white/20">
                <img
                  src="https://cdn.poehali.dev/projects/d54dad88-3764-40b6-a115-c9eb3934cff1/files/4259a840-f5e8-42ef-bb38-004ed0743dde.jpg"
                  alt="Дружный коллектив"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
                <span className="text-white text-sm font-semibold">💪 Будь рядом</span>
              </div>
              <div className="absolute -bottom-4 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
                <span className="text-white text-sm font-semibold">🛡️ Защитить каждого</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-black text-yellow-400 font-rubik">~50%</div>
              <div className="text-white/60 text-xs">школьников сталкивались с буллингом</div>
            </div>
            <div>
              <div className="text-2xl font-black text-teal-400 font-rubik">85%</div>
              <div className="text-white/60 text-xs">случаев происходит при свидетелях</div>
            </div>
            <div>
              <div className="text-2xl font-black text-pink-400 font-rubik">1 шаг</div>
              <div className="text-white/60 text-xs">может изменить чью-то жизнь</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { section: "education", title: "Образование", desc: "Что такое буллинг, как его распознать и почему это важно", gradient: "gradient-card-violet", emoji: "📚" },
            { section: "stories", title: "Истории", desc: "Реальные истории школьников — боль, опыт и путь к лучшему", gradient: "gradient-card-teal", emoji: "💬" },
            { section: "tips", title: "Советы", desc: "Практические рекомендации что делать и куда обратиться", gradient: "gradient-card-pink", emoji: "✅" },
          ].map((card) => (
            <button
              key={card.section}
              onClick={() => setActiveSection(card.section)}
              className="group text-left p-6 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.gradient}`} />
              <div className="relative z-10">
                <div className="text-3xl mb-4">{card.emoji}</div>
                <h3 className="font-rubik font-bold text-xl text-gray-900 group-hover:text-white mb-2 transition-colors">{card.title}</h3>
                <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors">{card.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-violet-600 group-hover:text-white/80 text-sm font-semibold transition-colors">
                  Перейти <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
