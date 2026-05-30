const faqSections = [
  {
    number: "01",
    title: "Placement & Enrollment",
    items: [
      {
        question: "What if I don't know which level I belong to?",
        answer:
          "No worries — contact us through WhatsApp. Our teachers will assess your level and place you in the right group.",
      },
      {
        question: "How do I register?",
        answer:
          "Click the Enroll Now button, fill in your details, choose your payment plan, and complete payment securely through Paystack.",
      },
      {
        question: "What happens after I pay?",
        answer:
          "You’ll be redirected instantly to join the WhatsApp community where you’ll access your class group, schedules, updates, and materials.",
      },
      {
        question: "Is payment secure?",
        answer:
          "Yes. All payments are processed securely through Paystack — a trusted and PCI-compliant payment gateway.",
      },
    ],
  },

  {
    number: "02",
    title: "Classes & Learning",
    items: [
      {
        question: "What days and times are classes?",
        answer:
          "Classes run Friday, Saturday, and Sunday. Each session lasts 60 minutes.",
      },
      {
        question: "Are the classes online or physical?",
        answer:
          "All classes are fully online, making it easy for students worldwide to join comfortably.",
      },
      {
        question: "Are there tests and exams?",
        answer:
          "Yes. Monthly assessments and semester examinations are conducted to track progress.",
      },
      {
        question: "Can I combine this with school or work?",
        answer:
          "Absolutely. The program is structured to fit into busy schedules with flexible online sessions.",
      },
    ],
  },

  {
    number: "03",
    title: "International Students & Support",
    items: [
      {
        question: "Can I join from outside Nigeria?",
        answer:
          "Yes. Since classes are online, students can join from anywhere in the world.",
      },
      {
        question: "What if my internet connection is poor during class?",
        answer:
          "Classes are recorded, so students can always rewatch missed sessions later.",
      },
      {
        question: "Will I get support if I’m struggling?",
        answer:
          "Yes. Our teachers provide guidance, corrections, and support throughout your learning journey.",
      },
      {
        question: "Is there an age limit?",
        answer:
          "No. Both young and adult students are welcome as long as they are ready to learn consistently.",
      },
    ],
  },
];

const Faq = ({ openFaqs, setOpenFaqs }) => {
  function toggleFaq(sectionIndex, itemIndex) {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenFaqs((current) => ({ ...current, [key]: !current[key] }));
  }

  return (
    <section id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <span className="section-label">Questions</span>
          <h2 className="section-title">FAQ</h2>
        </div>

        {faqSections.map((section, sectionIndex) => (
          <div key={section.number}>
            {section.items.map((item, itemIndex) => {
              const key = `${sectionIndex}-${itemIndex}`;
              return (
                <div
                  className={`faq-item ${openFaqs[key] ? "open" : ""}`}
                  key={item.question}
                >
                  <button
                    className="faq-q"
                    type="button"
                    onClick={() => toggleFaq(sectionIndex, itemIndex)}
                  >
                    {item.question} <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-a">{item.answer}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
