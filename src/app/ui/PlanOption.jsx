import React from "react";

const PlanOption = () => {
  return function PlanOption({ title, price, note, active, onClick }) {
    return (
      <button
        className={`plan-option ${active ? "active" : ""}`}
        type="button"
        onClick={onClick}
      >
        <h5>{title}</h5>
        <div className="plan-price">{price}</div>
        <div className="plan-note">{note}</div>
      </button>
    );
  };
};

export default PlanOption;
