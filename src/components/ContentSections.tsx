import Icon from "@/components/ui/icon";

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

export function EducationSection() {
  return (
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
  );
}

export function StoriesSection() {
  return (
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
  );
}

export function TipsSection() {
  return (
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
  );
}
