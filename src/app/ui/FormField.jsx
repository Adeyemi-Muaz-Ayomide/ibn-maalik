import React from "react";

const FormField = () => {
  return function FormField({ label, children }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        {children}
      </div>
    );
  };
};

export default FormField;
