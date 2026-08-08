import Link from "next/link";

const nav = [
  ["Giá cà phê", "/"],
  ["Biểu đồ", "/bieu-do"],
  ["Thị trường", "/thi-truong"],
  ["Công cụ", "/cong-cu"]
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Cà Phê V2">
          <span className="brand-mark">C</span>
          <span>
            <strong>Cà Phê V2</strong>
            <small>Dữ liệu thị trường cà phê</small>
          </span>
        </Link>
        <nav className="nav" aria-label="Điều hướng chính">
          {nav.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
