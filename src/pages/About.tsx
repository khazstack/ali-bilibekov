import TopNav from "@/components/TopNav";
import aboutHero from "@/assets/about-hero.jpeg";

const About = () =>
<main className="bg-black text-white min-h-screen" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    <TopNav />

    {/* Hero */}
    <section className="relative md:h-screen overflow-hidden">
      <img
        src={aboutHero}
        alt="Али Билибеков"
        className="block w-full h-auto max-h-[85vh] object-contain object-[center_20%] bg-black md:absolute md:inset-0 md:h-full md:max-h-none md:object-cover md:opacity-70"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.25) 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.25) 92%, transparent 100%)",
        }}
      />
    
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative md:absolute md:bottom-16 md:left-0 md:right-0 text-center px-6 -mt-16 md:mt-0 pb-8 md:pb-0">
        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight uppercase mb-4">
          Али Билибеков
        </h1>
        <p className="text-[11px] md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/70 whitespace-nowrap">
          АКТЁР — МАССОВКА — МОДЕЛЬ
        </p>
      </div>
    </section>

    {/* Bio */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <p className="text-base md:text-lg leading-[1.9] text-white/80 text-center">
        Актёр массовых сцен с опытом участия в более чем 20 проектах — полнометражных фильмах, дорамах, сериалах, музыкальных клипах, рекламе и телешоу. Спортивное телосложение, дисциплина из единоборств и командных видов спорта, уверенность в кадре. Владею пятью языками. Открыт для съёмок в кино, сериалах, рекламе, клипах и телепроектах.
      </p>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Основная информация */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Основная информация
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-base">
        {[
      ["Полное имя", "Билибеков Али Болатулы"],
      ["Возраст", "21 год"],
      ["Рост", "193 см"],
      ["Вес", "97 кг"],
      ["Размер одежды", "XL, 2XL"],
      ["Размер обуви", "46"],
      ["Языки", "Казахский, русский, английский, корейский, арабский — в совершенстве"]].
      map(([label, value]) =>
      <div key={label} className="flex justify-between items-baseline py-3 border-b border-white/10 gap-4">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-semibold shrink-0">{label}</span>
            <span className="text-base md:text-lg font-bold text-right">{value}</span>
          </div>
      )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Навыки */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Спорт и навыки
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "Шахматы",
          "Велоспорт",
          "Бег",
          "Дзюдо",
          "Бокс",
          "Волейбол",
          "Баскетбол",
          "Воркаут",
        ].map((skill) =>
          <div key={skill} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-base md:text-lg font-medium">
            {skill}
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Фильмография */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Фильмография
      </h2>
      <div className="space-y-5">
        {[
          { title: "«7 Ата»", type: "фильм", role: "Зритель" },
          { title: "«Kingdom of Woman»", type: "дорама", role: "Солдат (5 смен)" },
          { title: "«Болган окига 2»", type: "фильм", role: "Кассир" },
          { title: "«Кибер-Калкан»", type: "сериал", role: "Боец Толегена" },
          { title: "«Асыранды Аже»", type: "фильм", role: "Банкир" },
          { title: "«Принц Азии»", type: "дорама", role: "Прохожий" },
          { title: "«14 кун»", type: "фильм", role: "Посетитель" },
          { title: "«Музыка + Математика = ❤»", type: "сериал", role: "Зритель" },
          { title: "«Принц Азии»", type: "дорама", role: "Фанат" },
          { title: "«Кара Шал»", type: "фильм", role: "Боулер, прохожий" },
          { title: "«Умитсиз Махаббат 2»", type: "фильм", role: "Посетитель бара" },
          { title: "«Кибер-Калкан» (продолжение)", type: "сериал", role: "Боец Толегена" },
          { title: "«Кибер-Калкан» (продолжение)", type: "сериал", role: "Боец Толегена" },
          { title: "«Умитсиз Махаббат 2»", type: "фильм", role: "Прохожий" },
          { title: "«Охотничьи псы 2»", type: "короткометражка", role: "Дублёр Кан Ин Бома" },
        ].map((item, i) =>
          <div key={`${item.title}-${i}`} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-white/50 font-semibold shrink-0 uppercase tracking-wide">{item.type}</span>
            </div>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Клипы */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Клипы
      </h2>
      <div className="space-y-5">
        {[
          { title: "ИК", type: "клип", role: "Боец" },
          { title: "Dequine", type: "клип", role: "Танцующий" },
          { title: "Эйзи", type: "клип", role: "Гость" },
          { title: "ТикТок", type: "рилс (опрос)", role: "Прохожий" },
          { title: "Донер на Абая", type: "ролик", role: "—" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-white/50 font-semibold shrink-0 uppercase tracking-wide">{item.type}</span>
            </div>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Реклама */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Реклама
      </h2>
      <div className="space-y-5">
        {[
          { title: "Grizzly чипсы", role: "Полевой работник" },
          { title: "Apple MacBook", role: "Студент" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Телепередачи и шоу */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Телепередачи и шоу
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: "«Азыл Байге»", detail: "Телешоу — зритель" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4">
            <h3 className="text-base md:text-lg font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-white/50">{item.detail}</p>
          </div>
        )}
      </div>
    </section>
  </main>;


export default About;
