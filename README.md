# Cà Phê V2

MVP website theo dõi giá cà phê Việt Nam và thử nghiệm mô hình quảng cáo tài trợ.

## Mục tiêu V1

- Giá cà phê hôm nay theo tỉnh trọng điểm.
- Biểu đồ lịch sử giá.
- Trang phân tích thị trường.
- Calculator cơ bản.
- Vị trí quảng cáo/sponsor cho Trà Bảo Tín.
- Nền tảng SEO để mở rộng trang giá theo khu vực.

## Stack

- Next.js 16.2.11
- React 19.2.7
- TypeScript
- CSS thuần để giữ MVP nhẹ, ít dependency

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

> Hiện dữ liệu giá là mock data. Workstream tiếp theo là chọn nguồn dữ liệu, thiết kế ingestion và lịch cập nhật.

## Routes

- `/` — Giá cà phê hôm nay
- `/gia-ca-phe/[slug]` — Trang giá theo tỉnh
- `/bieu-do` — Biểu đồ
- `/thi-truong` — Bản tin/phân tích
- `/cong-cu` — Calculator
- `/doi-tac/tra-bao-tin` — Landing sponsor mẫu

## Roadmap gần nhất

1. Chốt nguồn dữ liệu giá và điều khoản sử dụng.
2. Thiết kế schema `market_price`, `price_source`, `advertiser`, `campaign`.
3. Thêm ingestion + cache/revalidation.
4. Thêm tracking impression/click cho sponsor.
5. Chuẩn bị Cloudflare deployment.
