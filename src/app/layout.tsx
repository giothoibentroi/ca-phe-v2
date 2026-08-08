import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Cà Phê V2 — Giá cà phê hôm nay",
  description: "Theo dõi giá cà phê Việt Nam, Robusta London, biểu đồ và diễn biến thị trường mỗi ngày."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
        <footer className="footer">
          <div className="container footer-inner">
            <span>© 2026 Cà Phê V2</span>
            <span>Dữ liệu tham khảo · Không phải khuyến nghị đầu tư</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
