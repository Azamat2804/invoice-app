// import { useState } from "react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getInvoicesAndDocs } from "../utils/firebase.utils";
import { UserContext } from "./UserContext";

export const InvoiceDataContext = createContext({
  invoices: [],
  setInvoices: () => null,
});

export const InvoiceDataProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const [invoices, setInvoices] = useState(null);
  const [userInvoices, setUserInvoices] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getInvoicesAndDocs();
      setInvoices(data);
    })();
  }, []);

  useEffect(() => {
    currentUser?.uid && setUserInvoices(invoices[currentUser.uid]);
  }, [invoices, currentUser?.uid]);

  const value = { userInvoices };
  return (
    <InvoiceDataContext.Provider value={value}>
      {children}
    </InvoiceDataContext.Provider>
  );
};
