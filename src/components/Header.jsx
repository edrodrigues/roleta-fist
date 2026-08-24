import fistLogo from "../assets/fist-logo.jpg";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo-crop">
        <img src={fistLogo} alt="Fist" className="logo-img" />
      </div>
      <nav className="nav">
        <a href="#como-funciona">Como funciona</a>
        <a href="#premios">Prêmios</a>
        <a href="#regulamento">Regulamento</a>
        <a href="#topo" className="nav-cta">Entrar</a>
      </nav>
    </header>
  );
}
