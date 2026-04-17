import { useState } from "react";

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

interface QuizSectionProps {
  setActiveSection: (id: string) => void;
}

export default function QuizSection({ setActiveSection }: QuizSectionProps) {
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizDone, setQuizDone] = useState(false);

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
  );
}
