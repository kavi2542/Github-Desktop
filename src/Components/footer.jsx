import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-social-title">ติดตามเราผ่านช่องทางโซเชียล:</p>
        <div className="footer-social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-line"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-column">
          <h4>โรงรับจำนำเควิ</h4>
          <p>เราให้บริการรับจำนำ ซื้อ-ขาย ที่ดินและทรัพย์สิน พร้อมระบบออนไลน์ สะดวก ปลอดภัย เชื่อถือได้</p>
        </div>

        <div className="footer-column">
          <h4>บริการ</h4>
          <ul>
            <li><a href="#">รับจำนำ</a></li>
            <li><a href="#">ขายที่ดิน</a></li>
            <li><a href="#">ตรวจสอบทรัพย์</a></li>
            <li><a href="#">ประเมินราคา</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ลิงก์ด่วน</h4>
          <ul>
            <li><a href="#">เข้าสู่ระบบ</a></li>
            <li><a href="#">สมัครสมาชิก</a></li>
            <li><a href="#">ติดต่อเรา</a></li>
            <li><a href="#">คำถามที่พบบ่อย</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ติดต่อเรา</h4>
          <p>กรุงเทพฯ ประเทศไทย 10200</p>
          <p>info@kavilandpawn.com</p>
          <p>02-123-4567</p>
          <p>02-987-6543</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} สงวนลิขสิทธิ์โดย: <a href="https://kavilandpawn.com/">KaviLandPawn.com</a></p>
      </div>
    </footer>
  );
}
