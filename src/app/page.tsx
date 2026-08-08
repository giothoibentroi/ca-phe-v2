import Link from "next/link";
import { PriceChart } from "@/components/PriceChart";
import { PriceTable } from "@/components/PriceTable";
import { SponsorCard } from "@/components/SponsorCard";
import { marketHighlights } from "@/data/coffee";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="live-row"><span className="live-dot" /> Cập nhật thị trường · 08/08/2026, 07:30</div>
            <h1>Giá cà phê hôm nay</h1>
            <p className="hero-copy">Giá thu mua nội địa, diễn biến Robusta và những tín hiệu thị trường đáng chú ý trong một màn hình.</p>
          </div>
          <div className="hero-stat">
            <span>Cao nhất hôm nay</span>
            <strong>96.700 <small>đ/kg</small></strong>
            <em>Đắk Nông · ↑ 400</em>
          </div>
        </div>
      </section>

      <section className="container content-stack">
        <div className="grid-main">
          <section className="panel">
            <div className="panel-title"><div><span className="eyebrow">Thị trường nội địa</span><h2>Giá thu mua</h2></div><Link href="/bieu-do">Xem biểu đồ →</Link></div>
            <PriceTable />
          </section>
          <section className="panel"><PriceChart /></section>
        </div>

        <SponsorCard />

        <div className="market-grid">
          <section className="panel market-panel">
            <div className="panel-title"><div><span className="eyebrow">Bức tranh nhanh</span><h2>Thị trường hôm nay</h2></div></div>
            <div className="highlight-grid">
              {marketHighlights.map((item) => <article className="metric" key={item.label}><span>{item.label}</span><strong>{item.value}</strong><em>{item.change}</em></article>)}
            </div>
          </section>
          <article className="story-card">
            <span className="eyebrow">Phân tích · 3 phút đọc</span>
            <h2>Vì sao giá cà phê nội địa tăng nhẹ hôm nay?</h2>
            <p>Robusta duy trì sắc xanh trong khi nguồn cung nội địa chưa tạo áp lực bán mạnh. Theo dõi thêm diễn biến tỷ giá và phiên London.</p>
            <Link href="/thi-truong">Đọc phân tích →</Link>
          </article>
        </div>

        <section className="cta-panel">
          <div><span className="eyebrow">Công cụ miễn phí</span><h2>Tính nhanh giá trị lô cà phê</h2><p>Nhập số kg và giá bán dự kiến để ước tính tổng giá trị.</p></div>
          <Link className="button button-light" href="/cong-cu">Mở công cụ →</Link>
        </section>
      </section>
    </main>
  );
}
