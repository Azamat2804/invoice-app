import { ReactComponent as IconDelete } from "../../assets/icon-delete.svg";
import InvoiceFillAddItem from "./InvoiceFillAddItem";

const InvoiceFillAdd = ({ remove, itemOrder }) => {
  const handleRemove = () => {
    remove((newInvoiceItem) => {
      return newInvoiceItem.slice(0, -1);
    });
  };
  return (
    <div className="invoice-fill-item__item-inputs">
      <InvoiceFillAddItem
        type="text"
        style={{ outline: "none" }}
        id={`itemName_${itemOrder}`}
      />
      <InvoiceFillAddItem
        type="number"
        style={{ outline: "none" }}
        id={`itemQuantity_${itemOrder}`}
      />
      <InvoiceFillAddItem
        type="number"
        style={{ outline: "none" }}
        id={`itemPrice_${itemOrder}`}
      />
      <InvoiceFillAddItem
        type="number"
        style={{ border: "none", outline: "invert" }}
        id={`itemTotal_${itemOrder}`}
      />
      <IconDelete className="icon-delete-box" onClick={handleRemove} />
    </div>
  );
};

export default InvoiceFillAdd;
