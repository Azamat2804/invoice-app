import { useContext, useState } from "react";
import { OpenContext } from "../../contexts/OpenContext";
import { UserContext } from "../../contexts/UserContext";
import { addCollectionAndDocs } from "../../utils/firebase.utils";
import InvoiceFillAdd from "./InvoiceFillAdd";
import InvoiceFillBoxInput from "./InvoiceFillBoxInput";
import InvoiceFillBtns from "./InvoiceFillBtns";
import InvoiceFillSelect from "./InvoiceFillSelect";

const InvoiceFillForm = ({ style }) => {
  const [newInvoiceItem, setNewInvoiceItem] = useState([]);
  const {currentUser} = useContext(UserContext)
  const { showForm, setShowForm } = useContext(OpenContext);
  const form = document.querySelector(".invoice-fill");
  const handleShowAddItem = () => {
    setNewInvoiceItem([...newInvoiceItem, newInvoiceItem.length + 1]);
  };
  const handleDiscard = () => {
    setShowForm(!showForm);
  };

  let paymentDue, status;
  const handlePaid = () => {
    paymentDue = new Date().toLocaleString("en-CA").split(",")[0];
    status = 'paid'
  };
  const handleDraft = () => {
    paymentDue = "no payment yet";
    status = 'draft'
  };

  const getFormData = function (e) {
    e.preventDefault();
    const invoiceDataArr = [...new FormData(form)];
    const data = Object.fromEntries(invoiceDataArr);
    const generateId = () => {
      const abs = "abcdefghijklmnopqrstuvwxyz";
      const randomAbs = `${abs[Math.floor(Math.random() * abs.length)]}${
        abs[Math.floor(Math.random() * abs.length)]
      }`.toUpperCase();
      return randomAbs + Math.floor(1000 + Math.random() * 9000);
    };
    const createItems = () => {
      const filteredItems = Object.entries(data).filter((invoice) =>
        invoice[0].startsWith("item")
      );
      const items = [];
      for (let i = 1; i <= filteredItems.length / 4; i++) {
        const obj = Object.fromEntries(
          filteredItems.filter((el) => el[0].includes(i))
        );
        const item = {
          name: obj[`itemName_${i}`],
          quantity: obj[`itemQuantity_${i}`],
          price: obj[`itemPrice_${i}`],
          total: obj[`itemTotal_${i}`],
        };
        items.push(item);
      }
      return items;
    };
    const id = generateId();
    const items = createItems();
    const total = items.reduce((sum, item) => sum + item.total * 1, 0);
    const paymentTerms = data.paymentTerms.split(" ")[1];
    const invoice = {
      userId: currentUser.uid,
      id,
      createdAt: data.date,
      paymentDue,
      status,
      description: data.description,
      paymentTerms,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      senderAddress: {
        street: data.senderStreet,
        city: data.senderCity,
        postCode: data.senderPostCode,
        country: data.senderCountry,
      },
      clientAddress: {
        street: data.clientStreet,
        city: data.cleintCity,
        postCode: data.clientPostCode,
        country: data.clientCountry,
      },
      items,
      total,
    };
    addCollectionAndDocs("invoices",invoice)
    setShowForm(!showForm)
  };

  return (
    <form onSubmit={getFormData} className="invoice-fill" style={{ ...style }}>
      <h1 className="invoice-fill__heading">New Invoice</h1>

      <div className="invoice-fill-inputs">
        <div className="invoice-fill-box">
          <h3 className="invoice-fill-box__heading">Bill From</h3>

          <InvoiceFillBoxInput
            id="senderStreet"
            labelText="Street Address"
            style={{ gridColumn: "1 /-1" }}
          />
          <InvoiceFillBoxInput id="senderCity" labelText="City" />
          <InvoiceFillBoxInput id="senderPostCode" labelText="Post code" />
          <InvoiceFillBoxInput id="senderCountry" labelText="Country" />
        </div>

        <div className="invoice-fill-box">
          <h3 className="invoice-fill-box__heading">Bill To</h3>
          <InvoiceFillBoxInput
            id="clientName"
            labelText="Clinet's name"
            style={{ gridColumn: "1 /-1" }}
          />
          <InvoiceFillBoxInput
            id="clientEmail"
            labelText="Clinet's email"
            style={{ gridColumn: "1 /-1" }}
          />
          <InvoiceFillBoxInput
            id="clientStreet"
            labelText="Street Address"
            style={{ gridColumn: "1 /-1" }}
          />
          <InvoiceFillBoxInput id="cleintCity" labelText="City" />
          <InvoiceFillBoxInput id="clientPostCode" labelText="Post code" />
          <InvoiceFillBoxInput id="clientCountry" labelText="Country" />
        </div>

        <div className="invoice-fill-date-box">
          <InvoiceFillBoxInput id="date" labelText="Invoice Date" />
          <InvoiceFillSelect />
          <InvoiceFillBoxInput
            id="description"
            labelText="Description"
            style={{ gridColumn: "1 /-1" }}
          />
        </div>

        <div className="invoice-fill-item">
          <h1 className="invoice-fill-item__heading">Item List</h1>
          <div className="invoice-fill-item__item-inputs">
            <span className="invoice-fill-box__input--label">Item Name</span>
            <span className="invoice-fill-box__input--label">Qty.</span>
            <span className="invoice-fill-box__input--label">Price</span>
            <span className="invoice-fill-box__input--label">Total</span>
          </div>
          {newInvoiceItem.map((i) => (
            <InvoiceFillAdd key={i} remove={setNewInvoiceItem} itemOrder={i} />
          ))}
          <button
            type="button"
            className="btn invoice-fill-item__btn"
            onClick={handleShowAddItem}
          >
            + Add New Item
          </button>
        </div>
      </div>

      <div className="invoice-fill-footbtns">
        <InvoiceFillBtns
          type={"button"}
          handleClick={handleDiscard}
          btnText="Discard"
          className="discard"
        />
        <InvoiceFillBtns
          type={"button"}
          btnText="Save as Draft"
          className="save-draft"
          handleClick={handleDraft}
        />
        <InvoiceFillBtns
          type={"submit"}
          btnText="Save & Send"
          className="save-send"
          handleClick={handlePaid}
        />
      </div>
    </form>
  );
};

export default InvoiceFillForm;
