import fistLogo from "../assets/fist-logo.jpg";

export default function Footer() {
  return (
    <footer className="site-footer" id="regulamento">
      <div className="footer-text">
        Promoção válida enquanto durar a campanha · 1 giro por cadastro ·
        desconto aplicado sobre a taxa da fatura mensal · válido para novos
        cadastros · consulte o regulamento completo.
      </div>
      <div className="logo-crop logo-crop-small">
        <img src={fistLogo} alt="Fist" className="logo-img logo-img-small" />
      </div>
    </footer>
  );
}
