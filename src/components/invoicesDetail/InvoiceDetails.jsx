// import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/icon-arrow-left.svg";
import InvoiceDetailsBtn from "./InvoiceDetailsBtn";
import InvoiceDetailsDataWrap from "./InvoiceDetailsDataWrap";
import InvoiceDetailsInfoText from "./InvoiceDetailsInfoText";
import InvoiceDetailsItemBox from "./InvoiceDetailsItemBox";
const InvoiceDetails = () => {
  const { id } = useParams();
  return (
    <div className="invoice-data">
      {/* <!-- Go Back --> */}
      <Link to="/" className="btn go-back">
        <ArrowLeft className="go-back__icon" />
        <span className="go-back__text">Go back</span>
      </Link>

      {/* <!-- Invoice Detail Btns --> */}
      <div className="invoice-detail-manage">
        <p className="invoice-detail-manage__text">Status</p>
        <button className="btn invoice-detail-manage__status">
          <span style={{ marginRight: "0.3rem" }}>&#9679;</span> Pending
        </button>
        <InvoiceDetailsBtn btnText="Edit" className="edit" />
        <InvoiceDetailsBtn btnText="Delete" className="delete" />
        <InvoiceDetailsBtn btnText="Mark as Paid" className="mark-paid" />
      </div>

      {/* <!-- Invoice info --> */}
      <div className="invoice-info">
        <div className="invoice-info-head">
          <div className="invoice-info-head-box">
            <h1
              className="invoice__id-style invoice-info-head-box__id"
              style={{ fontSize: "1.7rem" }}
            >
              <span>#</span>RT3080
            </h1>
            <InvoiceDetailsInfoText text="Graphic Design" />
          </div>
          <div className="invoice-info-head-box">
            <InvoiceDetailsInfoText text="19 Union Terrace" />
            <InvoiceDetailsInfoText
              style={{ textAlign: "right" }}
              text="London"
            />
            <InvoiceDetailsInfoText
              style={{ textAlign: "right" }}
              text="E1 3EZ"
            />
            <InvoiceDetailsInfoText text="United Kingdom" />
          </div>
        </div>
        <div className="invoice-info-details">
          <div className="invoice-info-details-box">
            <InvoiceDetailsDataWrap heading="21 Aug 2021" text="Invoice Date" />
            <InvoiceDetailsDataWrap heading="20 Sep 2021" text="Payment Due" />
          </div>
          <div className="invoice-info-details-box">
            <InvoiceDetailsDataWrap heading="Alex Grim" text="Payment Due" />
            <div className="invoice-info-details-box__wrap">
              <InvoiceDetailsInfoText text="84 Church Way" />
              <InvoiceDetailsInfoText text="Bradford" />
              <InvoiceDetailsInfoText text="BD1 9PB" />
              <InvoiceDetailsInfoText text="United Kingdom" />
            </div>
          </div>
          <div className="invoice-info-details-box">
            <InvoiceDetailsDataWrap
              heading="alexgrim@mail.com"
              text="Sent to"
            />
          </div>
        </div>

        <div className="invoice-info-wrap-items">
          <div className="invoice-info-item">
            <div className="invoice-info-item-box">
              <p className="invoice__text-style">Item Name</p>
              <h1 className="invoice__info-heading">Banner Design</h1>
              <h1 className="invoice__info-heading">Email Design</h1>
            </div>
            <InvoiceDetailsItemBox title="QTY." bannerInfo="1" emailInfo="2" />
            <InvoiceDetailsItemBox
              title="Price"
              bannerInfo="£ 156.00"
              emailInfo="£ 200.00"
            />
            <InvoiceDetailsItemBox
              title="Total"
              bannerInfo="£ 156.00"
              emailInfo="£ 400.00"
            />
          </div>
          <div className="invoice-info-item-amount">
            <p className="invoice-info-item-amount__amount-text">Amount Due</p>
            <h1 className="invoice-info-item-amount__amount">£ 556.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
