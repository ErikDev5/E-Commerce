import Image from "next/image";
import styles from "@/auth/components/Footer/Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-title"]}>
        CÁC BƯỚC MỞ CỬA HÀNG TRÊN SHOPEE
      </div>
      <section className={styles["footer-content"]}>
        <div className={styles["footer-content-item"]}>
          <div className={styles["footer-content-item-nth"]}>01</div>
          <div className={styles["footer-content-item-heading"]}>
            Đăng ký tài khoản Shopee
          </div>
          <div className={styles["footer-content-item-description"]}>
            Tại trang Shopee, nhấn Đăng Ký để tạo tài khoản. Sau đó, nhập Số
            điện thoại và Email tại trang Tài Khoản Của Tôi để xác minh tài
            khoản.
          </div>
        </div>
        <div className={styles["footer-content-item"]}>
          <div className={styles["footer-content-item-nth"]}>02</div>
          <div className={styles["footer-content-item-heading"]}>
            Cài đặt thông tin cửa hàng
          </div>
          <div className={styles["footer-content-item-description"]}>
            Đi đến Kênh Người Bán, đặt tên Shop và thiết lập địa chỉ lấy hàng
            của bạn.
          </div>
        </div>
        <div className={styles["footer-content-item"]}>
          <div className={styles["footer-content-item-nth"]}>03</div>
          <div className={styles["footer-content-item-heading"]}>
            Cài đặt vận chuyển
          </div>
          <div className={styles["footer-content-item-description"]}>
            Thiết lập phương thức vận chuyển cho Shop và nhấn Hoàn tất.
          </div>
        </div>
        <div className={styles["footer-content-item"]}>
          <div className={styles["footer-content-item-nth"]}>04</div>
          <div className={styles["footer-content-item-heading"]}>
            Đăng bán sản phẩm
          </div>
          <div className={styles["footer-content-item-description"]}>
            Chọn Thêm Sản Phẩm, sau đó điền chi tiết thông tin và nhấn Lưu &
            Hiển thị để hoàn tất.
          </div>
        </div>
        <Image
          className={styles["footer-overlay"]}
          src='/images/signup-overlay.png'
          width={1366}
          height={167}
          alt='overlay'
        />
      </section>
    </div>
  );
}
