import React from "react";
import InvoiceFillInput from "./InvoiceFillInput";

const InvoiceFillBoxInput = ({id,labelText, style}) => {
  return (
    <div className="invoice-fill-box__input" style={style}>
      <label className="invoice-fill-box__input--label" htmlFor={id}>
        {labelText}
      </label>
      <InvoiceFillInput
        className="invoice-fill-box__input--input outline-none"
        type={`${id === "date" ? "date" : "text"}`}
        name={id}
        id={id}
      />
    </div>
  );
};

export default InvoiceFillBoxInput;
