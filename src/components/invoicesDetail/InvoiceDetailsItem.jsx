import InvoiceDetailsInfoHeading from "./InvoiceDetailsInfoHeading";
import InvoiceDetailsInfoText from "./InvoiceDetailsInfoText";

const InvoiceDetailsItem = ({ item }) => {
  const { name, price, quantity, total } = item;
  return (
    <div className="invoice-info-item-box">
      <InvoiceDetailsInfoHeading heading={name} />
      <InvoiceDetailsInfoText text={quantity} />
      <InvoiceDetailsInfoText text={price} />
      <InvoiceDetailsInfoText text={total} />
    </div>
  );
};

export default InvoiceDetailsItem;
