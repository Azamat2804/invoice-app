import InvoiceDetailsInfoText from "./InvoiceDetailsInfoText";

const InvoiceDetailsItemBox = ({ style, title, bannerInfo, emailInfo }) => {
  return (
    <div className="invoice-info-item-box text-center" style={style}>
      <InvoiceDetailsInfoText text={title} />
      <InvoiceDetailsInfoText text={bannerInfo} />
      <InvoiceDetailsInfoText text={emailInfo} />
    </div>
  );
};

export default InvoiceDetailsItemBox;
