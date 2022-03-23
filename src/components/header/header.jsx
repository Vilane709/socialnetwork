import './header.css';

function Header() {
  return (
    <div className="header">
      <img className="coca" src={require("../img/Coca-Cola-logo.png")} />
      <h1>Social Network</h1>
    </div>
  );
}

export default Header;