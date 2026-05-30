import Image from "next/image";
import backgroundImage from "../../../public/Logo-face-text.png";
import avatarImage2 from "../../../public/avatar2.png";
import Link from "next/link";

const paths = {
  video:
    "M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  globe:
    "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
  shield:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

function TrustItem({ children, icon }) {
  return (
    <div className="trust-item">
      <svg
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={paths[icon]}
        />
      </svg>
      {children}
    </div>
  );
}

const stats = [
  {
    value: "4",
    label: "Learning Levels",
  },
  {
    value: "Live",
    label: "Online",
  },
  {
    value: "Global",
    label: "Students",
  },
];

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col md:flex-row items-center justify-between"
      >
        {/* <div className="absolute inset-0 bg-[url('/Logo-face-text.png')] bg-cover bg-center blur-[3px] scale-110" /> */}
        <div className="hero-pattern" />
        <div className="hero-glow" />
        <div className="hero-content">
          <span className="hero-badge"> Admissions Now Open</span>
          {/* <div className="hero-arabic">
            <h3 className="text-[25px]">
              (معهد ابن مالك) Ibn Maalik Institute{" "}
            </h3>
          </div> */}
          <h1 className="hero-title ">
            Read the <em>Qur&apos;an</em>
            <br />
            the <em>Right Way.</em>
          </h1>
          <p className="hero-sub">
            From your first letter to fluent Tajweed - structured live classes,
            expert teachers, and a community that keeps you consistent.
          </p>
          <div className="hero-actions">
            <Link href="/enroll">
              <span className="btn-primary uppercase tracking-widest rounded-none!">
                ✦ Enroll Today
              </span>
            </Link>
            <Link href="#levels">
              <span className="btn-ghost uppercase tracking-widest rounded-none!">
                See Programs ↓
              </span>
            </Link>
            <Link
              href="/curriculum.docx"
              download
              className="btn-ghost uppercase tracking-widest rounded-none!"
            >
              Download Our Curriculum
            </Link>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Image
          priority
          src={avatarImage2}
          alt="Avatar Image"
          width={650}
          height={650}
        />
      </section>

      <div className="trust-bar">
        <TrustItem icon="video">Live via Google Meet & Zoom</TrustItem>
        <TrustItem icon="clock">Flexible Class Schedules</TrustItem>
        <TrustItem icon="globe">International Students Welcome</TrustItem>
        <TrustItem icon="shield">Private and Group Classes</TrustItem>
        {/* Certified Tajweed Teachers */}
      </div>
    </>
  );
};

export default Hero;

{
  /* <div className="hero-arabic">
            <h3 className="text-[25px]">
              (معهد ابن مالك) Ibn Maalik Institute{" "}
            </h3>
          </div> */
}
