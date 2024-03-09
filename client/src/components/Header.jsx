import logo from './assets/logo.png';

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <a
        href="/"
        className="className">
        <div className="d-flex">
          <img
            src={logo}
            alt="logo"
            className="mr-2"
          />
        </div>
      </a>
    </nav>
  );
}
