const InvoiceDetailsBtn = ({className,btnText}) => {
  return (
    <button className={`btn invoice-detail-manage__btn invoice-detail-manage__btn--${className}`}>
      {btnText}
    </button>
  );
};

export default InvoiceDetailsBtn;
