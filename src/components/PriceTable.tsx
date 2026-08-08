import Link from "next/link";
import { coffeePrices } from "@/data/coffee";

const currency = new Intl.NumberFormat("vi-VN");

export function PriceTable() {
  return (
    <div className="price-table" aria-label="Giá cà phê hôm nay">
      <div className="price-row price-head">
        <span>Khu vực</span>
        <span>Giá mua</span>
        <span>Biến động</span>
      </div>
      {coffeePrices.map((item) => (
        <Link className="price-row" href={`/gia-ca-phe/${item.slug}`} key={item.slug}>
          <span className="location"><i />{item.location}</span>
          <strong>{currency.format(item.price)} <small>đ/kg</small></strong>
          <span className="positive">↑ {currency.format(item.change)}</span>
        </Link>
      ))}
    </div>
  );
}
