import { notFound } from "next/navigation";
import { coffeePrices } from "@/data/coffee";
import { PriceChart } from "@/components/PriceChart";

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = coffeePrices.find((price) => price.slug === slug);
  if (!item) notFound();

  const money = new Intl.NumberFormat("vi-VN").format(item.price);

  return (
    <main className="container subpage">
      <span className="eyebrow">Giá địa phương</span>
      <h1>Giá cà phê {item.location} hôm nay</h1>
      <div className="detail-price">
        <strong>{money}</strong>
        <span>đ/kg</span>
        <em>↑ {item.change.toLocaleString("vi-VN")} hôm nay</em>
      </div>
      <section className="panel detail-chart"><PriceChart /></section>
      <p className="note">Dữ liệu hiện là dữ liệu mẫu cho giai đoạn dựng MVP. Pipeline dữ liệu thật sẽ được kết nối ở bước tiếp theo.</p>
    </main>
  );
}
