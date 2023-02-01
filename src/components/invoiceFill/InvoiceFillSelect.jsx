const InvoiceFillSelect = () => {
  return (
    <div className="">
      <label className="invoice-fill-box__input--label" htmlFor="payment">
        Payment Terms
      </label>
      <select
        className="invoice-fill-box__input--input"
        name="paymentTerms"
        id="payment"
      >
        <option defaultValue="net-1">Net 1 Day</option>
        <option defaultValue="net-7">Net 7 Days</option>
        <option defaultValue="net-14">Net 14 Days</option>
        <option defaultValue="net-30">Net 30 Days</option>
      </select>
    </div>
  );
};

export default InvoiceFillSelect;
