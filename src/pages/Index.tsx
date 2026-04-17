import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "education", label: "Образование" },
  { id: "stories", label: "Истории" },
  { id: "tips", label: "Советы" },
  { id: "test", label: "Тест" },
];

const EDUCATION_CARDS = [
  {
    icon: "BookOpen",
    title: "Что такое буллинг?",
    desc: "Буллинг — это систематическое агрессивное поведение, направленное против одного человека. Это не просто ссора или конфликт, а повторяющееся давление.",
    gradient: "gradient-card-violet",
    textColor: "text-white",
    tag: "Основы",
  },
  {
    icon: "Eye",
    title: "Как распознать?",
    desc: "Физические травмы, потеря вещей, нежелание идти в школу, резкая смена настроения, уход в себя — всё это может быть сигналами буллинга.",
    gradient: "gradient-card-teal",
    textColor: "text-white",
    tag: "Признаки",
  },
  {
    icon: "Shield",
    title: "Кибербуллинг",
    desc: "Травля в интернете: оскорбления в сообщениях, распространение слухов, создание фейковых аккаунтов, публикация фото без согласия.",
    gradient: "gradient-card-pink",
    textColor: "text-white",
    tag: "Онлайн",
  },
  {
    icon: "Users",
    title: "Толерантность",
    desc: "Принятие других такими, какие они есть. Уважение к различиям в культуре, внешности, способностях и взглядах — основа здорового общества.",
    gradient: "gradient-card-yellow",
    textColor: "text-gray-800",
    tag: "Ценности",
  },
];

const STORIES = [
  {
    name: "Алина, 14 лет",
    avatar: "👧",
    color: "from-violet-400 to-purple-600",
    quote: "Меня дразнили из-за очков целый год. Всё изменилось, когда я нашла друзей в театральном кружке — там меня приняли такой, какая я есть.",
    tag: "История успеха",
    tagColor: "bg-violet-100 text-violet-700",
  },
  {
    name: "Максим, 16 лет",
    avatar: "👦",
    color: "from-teal-400 to-cyan-600",
    quote: "Я сам был агрессором. Потом понял, что это от неуверенности в себе. Разговор с психологом помог мне стать другим человеком.",
    tag: "Осознание",
    tagColor: "bg-teal-100 text-teal-700",
  },
  {
    name: "Диана, 15 лет",
    avatar: "🧒",
    color: "from-pink-400 to-rose-600",
    quote: "Когда я рассказала учителю о буллинге в нашем классе, сначала было страшно. Но потом ситуация изменилась и многие сказали мне спасибо.",
    tag: "Смелый поступок",
    tagColor: "bg-pink-100 text-pink-700",
  },
];

const TIPS = [
  { icon: "MessageCircle", title: "Поговори с взрослым", desc: "Не держи в себе. Расскажи родителю, учителю или школьному психологу. Молчание делает ситуацию хуже.", color: "bg-violet-50 border-violet-200", iconColor: "text-violet-600" },
  { icon: "Users", title: "Будь союзником", desc: "Если видишь буллинг — встань рядом с жертвой, позови взрослых. Молчаливое наблюдение — это тоже поддержка агрессора.", color: "bg-teal-50 border-teal-200", iconColor: "text-teal-600" },
  { icon: "Heart", title: "Развивай эмпатию", desc: "Представь себя на месте другого человека. Как бы ты себя чувствовал? Это упражнение меняет отношение к людям.", color: "bg-pink-50 border-pink-200", iconColor: "text-pink-600" },
  { icon: "Zap", title: "Сохраняй доказательства", desc: "При кибербуллинге делай скриншоты, не удаляй переписку. Это поможет взрослым разобраться в ситуации.", color: "bg-yellow-50 border-yellow-200", iconColor: "text-yellow-600" },
  { icon: "Star", title: "Развивай уверенность", desc: "Запишись в кружок, найди хобби, занимайся спортом. Уверенность в себе — лучшая защита от буллинга.", color: "bg-orange-50 border-orange-200", iconColor: "text-orange-600" },
  { icon: "Phone", title: "Телефон доверия", desc: "Позвони на бесплатную линию психологической помощи: 8-800-2000-122. Работает круглосуточно по всей России.", color: "bg-blue-50 border-blue-200", iconColor: "text-blue-600" },
];

const QUIZ_QUESTIONS = [
  {
    q: "Твой одноклассник часто сидит один в столовой. Что ты делаешь?",
    options: [
      { text: "Подхожу и предлагаю составить компанию", score: 3 },
      { text: "Замечаю, но ничего не делаю", score: 1 },
      { text: "Рассказываю друзьям, что он странный", score: 0 },
      { text: "Иногда улыбаюсь ему", score: 2 },
    ],
  },
  {
    q: "В чате класса кто-то пишет обидные вещи про одноклассника. Твоя реакция?",
    options: [
      { text: "Встаю на защиту и прошу прекратить", score: 3 },
      { text: "Ставлю лайк — это же шутка", score: 0 },
      { text: "Не реагирую, не моё дело", score: 1 },
      { text: "Пишу в личку пострадавшему, что понимаю его", score: 2 },
    ],
  },
  {
    q: "Новый ученик в классе одевается не так, как все. Что ты думаешь?",
    options: [
      { text: "Каждый вправе выглядеть как хочет", score: 3 },
      { text: "Странно, но мне всё равно", score: 1 },
      { text: "Буду шутить над ним с друзьями", score: 0 },
      { text: "Может, познакомлюсь с ним поближе", score: 2 },
    ],
  },
  {
    q: "Твой друг говорит грубые вещи про человека другой национальности. Как поступишь?",
    options: [
      { text: "Скажу, что это неприемлемо и объясню почему", score: 3 },
      { text: "Посмеюсь вместе с ним", score: 0 },
      { text: "Промолчу, не хочу конфликта", score: 1 },
      { text: "Постараюсь сменить тему", score: 2 },
    ],
  },
  {
    q: "Ты видишь, что кто-то плачет в школьном коридоре. Что делаешь?",
    options: [
      { text: "Подхожу и спрашиваю, всё ли в порядке", score: 3 },
      { text: "Прохожу мимо — у меня урок", score: 1 },
      { text: "Фотографирую и отправляю в чат", score: 0 },
      { text: "Прошу учителя подойти к нему", score: 2 },
    ],
  },
];

const getResult = (score: number) => {
  if (score >= 13) return { level: "Высокий", emoji: "🌟", color: "text-teal-600", bg: "bg-teal-50 border-teal-200", desc: "Ты настоящий пример толерантности и эмпатии! Окружающие тебя люди в безопасности, ты умеешь поддержать и защитить. Продолжай в том же духе и вдохновляй других!" };
  if (score >= 8) return { level: "Средний", emoji: "💛", color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200", desc: "У тебя хорошая основа, но есть над чем работать. Иногда ты замечаешь несправедливость, но не всегда решаешься действовать. Маленький шаг в сторону добра — уже важен!" };
  return { level: "Требует развития", emoji: "🌱", color: "text-violet-600", bg: "bg-violet-50 border-violet-200", desc: "Не расстраивайся — осознание это уже первый шаг! Попробуй поставить себя на место другого человека. Толерантность — это навык, который можно развить." };
};

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizDone, setQuizDone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAnswer = (score: number, idx: number) => {
    setSelectedOption(idx);
    setTimeout(() => {
      const newScore = quizScore + score;
      if (quizStep + 1 >= QUIZ_QUESTIONS.length) {
        setQuizScore(newScore);
        setQuizDone(true);
      } else {
        setQuizScore(newScore);
        setQuizStep(quizStep + 1);
        setSelectedOption(null);
      }
    }, 600);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizScore(0);
    setSelectedOption(null);
    setQuizDone(false);
  };

  const result = getResult(quizScore);

  return (
    <div className="min-h-screen bg-white font-golos">
      {/* NAVBAR */}
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

      <div className="pt-16">
        {/* ===== HOME ===== */}
        {activeSection === "home" && (
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
        )}

        {/* ===== EDUCATION ===== */}
        {activeSection === "education" && (
          <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">📚 Образование</span>
              <h2 className="font-rubik font-black text-4xl md:text-5xl text-gray-900 mb-4">Знание — сила</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Чтобы бороться с проблемой, нужно сначала её понять. Здесь собрана ключевая информация о буллинге и толерантности.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {EDUCATION_CARDS.map((card, i) => (
                <div key={i} className={`${card.gradient} rounded-3xl p-7 relative overflow-hidden hover:scale-[1.02] transition-transform duration-300`}>
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">{card.tag}</span>
                  <div className={`w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4 ${card.textColor}`}>
                    <Icon name={card.icon} size={22} />
                  </div>
                  <h3 className={`font-rubik font-bold text-xl mb-3 ${card.textColor}`}>{card.title}</h3>
                  <p className={`text-sm leading-relaxed ${card.textColor === "text-white" ? "text-white/80" : "text-gray-700"}`}>{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-950 rounded-3xl p-8 text-white">
              <h3 className="font-rubik font-bold text-2xl mb-6 text-center">Важные факты</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emoji: "🧠", title: "Психологический вред", desc: "Жертвы буллинга чаще страдают от тревожности, депрессии и низкой самооценки." },
                  { emoji: "🔁", title: "Цикл насилия", desc: "Агрессоры нередко сами пережили насилие. Буллинг — это часто крик о помощи." },
                  { emoji: "🌍", title: "Мировая проблема", desc: "Буллинг встречается в школах всех стран независимо от культуры и уровня жизни." },
                ].map((fact, i) => (
                  <div key={i} className="bg-white/8 backdrop-blur rounded-2xl p-5 border border-white/10">
                    <div className="text-3xl mb-3">{fact.emoji}</div>
                    <h4 className="font-semibold text-white mb-2">{fact.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{fact.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== STORIES ===== */}
        {activeSection === "stories" && (
          <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">💬 Истории</span>
              <h2 className="font-rubik font-black text-4xl md:text-5xl text-gray-900 mb-4">Реальные голоса</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Эти истории написаны по реальным событиям. Имена изменены. Они показывают: выход есть всегда.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {STORIES.map((s, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-3xl mb-5`}>
                    {s.avatar}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${s.tagColor} mb-4 inline-block`}>{s.tag}</span>
                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                    «{s.quote}»
                  </blockquote>
                  <div className="font-semibold text-gray-900 text-sm">{s.name}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-8 text-center text-white">
              <div className="text-4xl mb-4">💌</div>
              <h3 className="font-rubik font-bold text-2xl mb-3">Хочешь поделиться своей историей?</h3>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">Твой опыт может помочь кому-то пройти через похожую ситуацию. Все истории анонимны.</p>
              <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-2xl transition-all hover:scale-105 font-rubik">
                Написать нам
              </button>
            </div>
          </section>
        )}

        {/* ===== TIPS ===== */}
        {activeSection === "tips" && (
          <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">✅ Советы</span>
              <h2 className="font-rubik font-black text-4xl md:text-5xl text-gray-900 mb-4">Что делать?</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Практические советы для тех, кто столкнулся с буллингом — или хочет его предотвратить.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {TIPS.map((tip, i) => (
                <div key={i} className={`${tip.color} border rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-200`}>
                  <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm ${tip.iconColor}`}>
                    <Icon name={tip.icon} size={20} />
                  </div>
                  <h3 className="font-rubik font-bold text-gray-900 text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="text-5xl">🆘</div>
                <div className="flex-1">
                  <h3 className="font-rubik font-bold text-xl text-red-800 mb-2">Нужна помощь прямо сейчас?</h3>
                  <p className="text-red-700 text-sm mb-1">Телефон доверия для детей и подростков: <strong>8-800-2000-122</strong> (бесплатно, круглосуточно)</p>
                  <p className="text-red-600 text-sm">Линия психологической помощи: <strong>8-800-200-01-22</strong></p>
                </div>
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all hover:scale-105 font-rubik whitespace-nowrap">
                  📞 Позвонить
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ===== TEST ===== */}
        {activeSection === "test" && (
          <section className="max-w-3xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
              <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">🧠 Интерактивный тест</span>
              <h2 className="font-rubik font-black text-4xl md:text-5xl text-gray-900 mb-4">Насколько ты толерантен?</h2>
              <p className="text-gray-500 text-lg">5 вопросов, которые помогут тебе лучше понять себя</p>
            </div>

            {!quizDone ? (
              <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gray-50 p-5 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">Вопрос {quizStep + 1} из {QUIZ_QUESTIONS.length}</span>
                    <span className="text-sm font-bold text-violet-600">{Math.round((quizStep / QUIZ_QUESTIONS.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="gradient-card-violet h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(quizStep / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-rubik font-bold text-xl text-gray-900 mb-7 leading-snug">
                    {QUIZ_QUESTIONS[quizStep].q}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {QUIZ_QUESTIONS[quizStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => selectedOption === null && handleAnswer(opt.score, idx)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 font-medium text-sm ${
                          selectedOption === idx
                            ? "border-violet-500 bg-violet-50 text-violet-700"
                            : selectedOption !== null
                            ? "border-gray-100 bg-gray-50 text-gray-400"
                            : "border-gray-200 hover:border-violet-300 hover:bg-violet-50 text-gray-700 hover:text-violet-700"
                        }`}
                      >
                        <span className="inline-block w-6 h-6 rounded-full border-2 border-current mr-3 text-center text-xs leading-5 font-bold">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">
                <div className="gradient-hero p-8 text-center">
                  <div className="text-6xl mb-4">{result.emoji}</div>
                  <h3 className="font-rubik font-black text-3xl text-white mb-2">Уровень толерантности</h3>
                  <div className="inline-block bg-white/20 text-white font-bold text-xl px-6 py-2 rounded-full">{result.level}</div>
                </div>

                <div className="p-8">
                  <div className={`${result.bg} border rounded-2xl p-5 mb-6`}>
                    <p className={`${result.color} font-medium text-sm leading-relaxed`}>{result.desc}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={resetQuiz}
                      className="flex-1 px-6 py-3 border-2 border-violet-200 text-violet-700 font-bold rounded-2xl hover:bg-violet-50 transition-all font-rubik"
                    >
                      Пройти ещё раз
                    </button>
                    <button
                      onClick={() => setActiveSection("tips")}
                      className="flex-1 px-6 py-3 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 transition-all hover:scale-[1.02] font-rubik"
                    >
                      Читать советы →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* FOOTER */}
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
