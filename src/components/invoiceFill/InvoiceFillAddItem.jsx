import InvoiceFillInput from "./InvoiceFillInput";

const InvoiceFillAddItem = ({ id, style,type }) => {
  return (
    <div className="invoice-fill-item__item-input">
      <InvoiceFillInput
        className="invoice-fill-box__input--input"
        style={style}
        type={`${type === "text" ? "text": "number"}`}
        name={id}
        defaultValue={`${type === "text" ? "" : 0}`}
        id={id}
      />
    </div>
  );
};

export default InvoiceFillAddItem;
