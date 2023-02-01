import HeaderButtons from "./HeaderButtons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="header-content__title">Invoices</h2>
        <p className="header-content__text">There are 7 total invoices</p>
      </div>
      <HeaderButtons />
    </div>
  );
};

export default Header;
