import { PriceChart } from "@/components/PriceChart";

export default function Page() {
  return (
    <main className="container subpage">
      <span className="eyebrow">Dữ liệu lịch sử</span>
      <h1>Biểu đồ giá cà phê</h1>
      <p className="lead">Theo dõi xu hướng theo ngày và khu vực. MVP hiện sử dụng dữ liệu mẫu.</p>
      <section className="panel detail-chart"><PriceChart /></section>
    </main>
  );
}
