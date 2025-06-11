import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("userSession");

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/mas-reciente">Más Recientes</Link>
      <Link to="/colecciones">Colecciones</Link>
      {isLoggedIn && <Link to="/carrito">Carrito</Link>}
      <Link to="/login" className="login-btn">
        {isLoggedIn ? "Mi Cuenta" : "Iniciar Sesión"}
      </Link>
    </nav>
  );
};
/* Para comprobar el localStorage solo aparece micuenta logeada */
export default Navbar;
