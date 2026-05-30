import React from "react";

const Modal = () => {
  function ModalStep({ number, title, children }) {
    return (
      <div className="modal-step">
        <div className="modal-step-num">{number}</div>
        <div>
          <h5>{title}</h5>
          <p>{children}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={`modal-overlay ${isModalOpen ? "show" : ""}`}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={() => setIsModalOpen(false)}
        >
          ✕
        </button>
        <div className="modal-icon">🎉</div>
        <div className="arabic">جزاكم الله خيرًا</div>
        <h2 id="welcome-title">Welcome to Ibn Maalik Institute!</h2>
        <p>
          Jazakumullahu khayran for enrolling. Your place is secured.
          Here&apos;s what to do next:
        </p>
        <div className="modal-steps">
          <ModalStep number="1" title="Join the WhatsApp Community">
            Click below to join - all updates, schedules, and class links are
            shared here.
          </ModalStep>
          <ModalStep number="2" title="Fill Your Placement Form">
            A short form will be pinned in the WhatsApp group. Fill it so we can
            place you in the right level.
          </ModalStep>
          <ModalStep number="3" title="Wait for Level Placement">
            Our team will review your form and place you in your group. Classes
            are Mon, Wed, Fri - 40 minutes each.
          </ModalStep>
        </div>
        <a
          href={WHATSAPP_COMMUNITY_LINK}
          className="modal-wa"
          target="_blank"
          rel="noreferrer"
        >
          📲 Join WhatsApp Community
        </a>
      </div>
    </div>
  );
};

export default Modal;
