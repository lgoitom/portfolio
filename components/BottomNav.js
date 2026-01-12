import Navbar from "react-bootstrap/Navbar";

function BottomNav() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Navbar tabIndex={0} expand="lg">
        <Navbar.Brand className="w-100 text-end">
          <p>
            <i className="bi bi-c-circle" aria-label="Copyright"></i> {year}{" "}
            Luwam Goitom-Worre
          </p>
        </Navbar.Brand>
      </Navbar>
    </footer>
  );
}

export default BottomNav;
