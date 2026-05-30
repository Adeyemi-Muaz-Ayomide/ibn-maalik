import Link from "next/link";

function LevelCard({
  number,
  badge,
  title,
  tag,
  duration,
  tone = "",
  children,
}) {
  return (
    <div className={`level-card ${tone}`}>
      <div className="level-num">{number}</div>
      <div className="level-badge">{badge}</div>
      <div className="flex justify-between items-center">
        <h3>{title}</h3>
        <p className="text-md w-fit text-white">{duration}</p>
      </div>

      <ul>{children}</ul>
      <span className="level-tag">{tag}</span>
    </div>
  );
}

const Levels = () => {
  return (
    <section id="levels" className="bg-[#f4f4f0] ">
      <div className="levels-header">
        <span className="section-label">Our Programs</span>
        <h2 className="section-title">Find Your Level</h2>
        <p className="section-sub">
          Whether you&apos;ve never opened a Mus&apos;haf or you&apos;re
          refining your Hifdh - there&apos;s a place for you here.
        </p>
      </div>
      <div className="levels-grid">
        <LevelCard
          number="01"
          badge="Beginner"
          title="Foundations"
          tag="→ No prior knowledge needed"
          duration="1 Semester - 3 months"
        >
          <ul className="space-y-12 p list-disc pl-5 text-gray-500">
            <li>Learn the Arabic alphabet</li>
            <li>Understand letter forms and pronunciation</li>
            <li>Practice joining letters and reading basics</li>
            <li>Build confidence in Qur&apos;an reading</li>
            <li>Patient teacher-guided learning</li>
          </ul>
        </LevelCard>

        <LevelCard
          number="02"
          badge="Elementary"
          title="Reading & Tajweed"
          tag="→ For slow or hesitant readers"
          duration="1 Semesters - 3 months"
          tone="emerald"
        >
          <ul className="space-y-2 list-disc pl-5 text-gray-500">
            <li>Learn basic & Advanced Tajweed rules</li>
            <li>Improve reading fluency and speed</li>
            <li>Reduce hesitation while reading</li>
            <li>Beautify and refine recitation</li>
            <li>Develop confidence in public recitation</li>
          </ul>
        </LevelCard>

        <LevelCard
          number="03"
          badge="Intermediate"
          title="Hifdh - Memorization"
          tag="→ For Memorization Students"
          duration="1 semester per juz cycle"
          tone="deep"
        >
          <ul className="space-y-2 list-disc pl-5 text-gray-500">
            <li>Structured memorization plans</li>
            <li>Learn proper Makhaarij articulation points</li>
            <li>Memorize Juz &apos;Amma</li>
            <li>Memorize Juz Tabarak and Juz Mujadilah</li>
            <li>Progress gradually into other Ajzaa&apos;</li>
            <li>Teacher-guided accountability</li>
          </ul>
        </LevelCard>

        <LevelCard
          number="04"
          badge="Advanced"
          title="Muraja'ah - Revision"
          tag="→ For Revision students"
          duration="1 semester per revision cycle"
          tone="gold"
        >
          <ul className="space-y-2 list-disc pl-5 text-gray-500">
            <li>Structured Muraja&apos;ah schedules and tracking</li>
            <li>Supervised revision sessions</li>
            <li>Strengthen previously memorized Surahs</li>
            <li>Improve fluency and retention consistency</li>
            <li>Teacher correction for memorization mistakes</li>
            <li>Build long-term memorization discipline</li>
          </ul>
        </LevelCard>
      </div>

      <div className="section-bum">
        <Link
          href="https://wa.me/2347084605347?text=Assalamu%20alaykum,%20I%20want%20to%20book%20a%20free%2010-minute%20demo%20class aRX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <span className="btn-primary uppercase tracking-widest rounded-none!">
            ✦ Book a free trial with us Today
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Levels;
