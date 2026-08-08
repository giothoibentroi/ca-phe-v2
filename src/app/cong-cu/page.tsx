export default function Page() {
  return (
    <main className="container subpage">
      <span className="eyebrow">Công cụ</span>
      <h1>Tính giá trị cà phê</h1>
      <p className="lead">Bản MVP của calculator sẽ được thêm interaction ở bước tiếp theo.</p>
      <div className="calculator-shell">
        <label>Số lượng (kg)<input placeholder="3.500" /></label>
        <label>Giá bán (đ/kg)<input placeholder="96.500" /></label>
        <div className="calc-result"><span>Giá trị dự kiến</span><strong>337.750.000đ</strong></div>
      </div>
    </main>
  );
}
