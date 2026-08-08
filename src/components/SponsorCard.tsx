import Link from "next/link";

export function SponsorCard() {
  return (
    <aside className="sponsor-card">
      <div>
        <span className="sponsor-label">Đối tác tài trợ</span>
        <div className="tea-icon">茶</div>
      </div>
      <div className="sponsor-copy">
        <span>Trà Bảo Tín · Bảo Lộc</span>
        <h3>Trà cho quán cà phê & pha chế</h3>
        <p>Khám phá các dòng trà dành cho quán, nhà hàng và nhu cầu mua sỉ.</p>
      </div>
      <Link className="button button-dark" href="/doi-tac/tra-bao-tin">Xem sản phẩm <span>→</span></Link>
    </aside>
  );
}
