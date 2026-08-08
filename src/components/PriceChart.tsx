import { chartData } from "@/data/coffee";

export function PriceChart() {
  const min = Math.min(...chartData) - 300;
  const max = Math.max(...chartData) + 300;
  const points = chartData.map((value, index) => {
    const x = (index / (chartData.length - 1)) * 100;
    const y = 90 - ((value - min) / (max - min)) * 75;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="chart-wrap">
      <div className="chart-head">
        <div>
          <span className="eyebrow">Đắk Lắk · 7 ngày</span>
          <div className="chart-value">96.500 <small>đ/kg</small></div>
        </div>
        <span className="trend-pill">+1,7%</span>
      </div>
      <svg className="chart" viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Biểu đồ giá cà phê bảy ngày">
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity=".22" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,100 ${points} 100,100`} fill="url(#area)" />
        <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="chart-axis"><span>02/08</span><span>04/08</span><span>06/08</span><span>08/08</span></div>
    </div>
  );
}
