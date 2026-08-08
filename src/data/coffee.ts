export type CoffeePrice = {
  slug: string;
  location: string;
  province: string;
  price: number;
  change: number;
};

export const coffeePrices: CoffeePrice[] = [
  { slug: "dak-lak", location: "Đắk Lắk", province: "Đắk Lắk", price: 96500, change: 500 },
  { slug: "dak-nong", location: "Đắk Nông", province: "Đắk Nông", price: 96700, change: 400 },
  { slug: "gia-lai", location: "Gia Lai", province: "Gia Lai", price: 96300, change: 300 },
  { slug: "lam-dong", location: "Lâm Đồng", province: "Lâm Đồng", price: 95800, change: 200 }
];

export const chartData = [94900, 95200, 95100, 95700, 96000, 95800, 96400, 96500];

export const marketHighlights = [
  { label: "Robusta London", value: "$3,850/tấn", change: "+1.2%" },
  { label: "USD/VND", value: "26,240", change: "+0.1%" },
  { label: "Xu hướng nội địa", value: "Tăng nhẹ", change: "Tích cực" }
];
