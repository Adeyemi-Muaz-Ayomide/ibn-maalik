function Testimonial({ initial, name, location, children }) {
  return (
    <div className="testi-card">
      <div className="testi-stars">★★★★★</div>
      <p className="testi-text">&quot;{children}&quot;</p>
      <div className="testi-author">
        <div className="testi-avatar">{initial}</div>
        <div>
          <div className="testi-name">{name}</div>
          <div className="testi-loc">{location}</div>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testi-header">
        <span className="section-label">Student Stories</span>
        <h2 className="section-title">Results Speak.</h2>
        <p className="section-sub centered">
          Real students. Real progress. Alhamdulillah.
        </p>
      </div>
      <div className="testi-grid">
        <Testimonial
          initial="A"
          name="Amina K."
          location="Lagos, Nigeria - Level 1 Student"
        >
          I had never read a single Arabic letter before. Three months later,
          I&apos;m reading Surah Al-Fatiha with Tajweed. I never imagined I
          could do this. Barakallahu feekum.
        </Testimonial>
        <Testimonial
          initial="Y"
          name="Yusuf M."
          location="Abuja, Nigeria - Level 2 Student"
        >
          I could read but very slowly. The Level 2 class helped me build speed
          and confidence. The teacher is patient and the class timing works
          perfectly for me.
        </Testimonial>
        <Testimonial
          initial="F"
          name="Fatimah A."
          location="UK - Hifdh Track Student"
        >
          The Hifdh track is exactly what I needed. Having someone check my
          revision and correct my mistakes has made my memorization so much
          stronger. Highly recommended.
        </Testimonial>
        <Testimonial
          initial="H"
          name="Hassan R."
          location="Kano, Nigeria - Tajweed Student"
        >
          Before joining, I struggled with Makhaarij and often felt embarrassed
          reciting in front of others. The teachers corrected me gently and now
          my recitation is clearer and more confident. Alhamdulillah for this
          opportunity.
        </Testimonial>

        <Testimonial
          initial="Z"
          name="Zainab S."
          location="Toronto, Canada - Private Class Student"
        >
          The private sessions helped me improve much faster than I expected. My
          teacher focuses on my weak areas and the flexible schedule makes it
          easy to balance with school and work.
        </Testimonial>

        <Testimonial
          initial="I"
          name="Ibrahim T."
          location="Ibadan, Nigeria - Muraja'ah Student"
        >
          The Muraja&apos;ah program brought consistency back to my
          memorization. The accountability system and revision sessions helped
          me retain what I memorized instead of constantly forgetting.
        </Testimonial>
      </div>
    </section>
  );
};

export default Testimonials;
