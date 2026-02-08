# E-Commerce Server

Server API cho ứng dụng E-Commerce được xây dựng với Spring Boot 4.0, Java 25, MyBatis và PostgreSQL.

## 📋 Mục lục

- [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [Cài đặt môi trường với Nix](#-cài-đặt-môi-trường-với-nix)
- [Chạy dự án với Docker Compose](#-chạy-dự-án-với-docker-compose)
- [Cấu hình dự án](#-cấu-hình-dự-án)
- [Các lệnh thường dùng](#-các-lệnh-thường-dùng)
- [API Endpoints](#-api-endpoints)

---

## 🖥️ Yêu cầu hệ thống

- **Nix** (với Flakes enabled) hoặc:
  - Java 25
  - Maven 3.9+
  - Liquibase
- **Docker** & **Docker Compose**

---

## ❄️ Cài đặt môi trường với Nix

Dự án sử dụng [Nix Flakes](https://nixos.wiki/wiki/Flakes) để quản lý môi trường phát triển, đảm bảo tính nhất quán và dễ dàng thiết lập.

### 1. Cài đặt Nix

#### Trên Linux/macOS:

```bash
# Cài đặt Nix
sh <(curl -L https://nixos.org/nix/install) --daemon

# Khởi động lại terminal hoặc chạy:
. /etc/profile.d/nix.sh
```

#### Trên Windows (sử dụng WSL2):

Nix không hỗ trợ trực tiếp trên Windows, bạn cần sử dụng WSL2 (Windows Subsystem for Linux).

**Bước 1: Cài đặt WSL2**

Mở PowerShell với quyền **Administrator** và chạy:

```powershell
wsl --install
```

Khởi động lại máy tính sau khi cài đặt xong.

**Bước 2: Mở WSL và cài đặt Nix**

Mở **Ubuntu** (hoặc distro Linux đã cài) từ Start Menu, sau đó chạy:

```bash
sh <(curl -L https://nixos.org/nix/install) --daemon
```

**Bước 3: Khởi động lại WSL**

```bash
exit
```

Mở lại Ubuntu từ Start Menu.

> 💡 **Lưu ý:** Tất cả các lệnh tiếp theo trong hướng dẫn này đều chạy trong WSL (Ubuntu), không phải PowerShell.

#### Kích hoạt Flakes:

Thêm dòng sau vào file `~/.config/nix/nix.conf` (tạo nếu chưa có):

```ini
experimental-features = nix-command flakes
```

Hoặc tạo file cấu hình:

```bash
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

### 2. Sử dụng môi trường Nix

```bash
# Di chuyển vào thư mục dự án
cd /path/to/E-Commerce/server

# Kích hoạt shell môi trường phát triển
nix develop

# Hoặc sử dụng direnv để tự động kích hoạt (khuyến nghị)
# Cài đặt direnv và thêm vào shell:
# echo "use flake" > .envrc
# direnv allow
```

Sau khi chạy `nix develop`, bạn sẽ có sẵn:
- **Java 25** (JDK)
- **Maven 3.9**
- **Liquibase** (Community Edition)
- **PostgreSQL JDBC Driver**

### 3. Kiểm tra môi trường

```bash
# Kiểm tra phiên bản Java
java -version

# Kiểm tra Maven
mvn -version

# Kiểm tra Liquibase
liquibase --version
```

---

## 🐳 Chạy dự án với Docker Compose

### 1. Cấu hình biến môi trường

Copy file `.env-example` thành `.env` và cập nhật thông tin của bạn:

```bash
cp .env-example .env
```

Mở file `.env` và điền các giá trị phù hợp với môi trường của bạn (tham khảo `.env-example` để biết các biến cần thiết).

### 2. Khởi động PostgreSQL với Docker Compose

```bash
# Khởi động PostgreSQL và các services
docker-compose up -d

# Kiểm tra trạng thái containers
docker-compose ps

# Xem logs
docker-compose logs -f postgres
```

### 3. Chạy migrations với Liquibase

#### Cách 1: Sử dụng Docker Compose (khuyến nghị)

```bash
# Chạy migrations
docker-compose run --rm liquibase update

# Kiểm tra trạng thái migrations
docker-compose run --rm liquibase status

# Rollback (nếu cần)
docker-compose run --rm liquibase rollback-count 1
```

#### Cách 2: Sử dụng Liquibase trên host (với Nix)

Copy `liquibase.properties.example` thành `liquibase.properties`:

```bash
cp liquibase.properties.example liquibase.properties
```

Cập nhật thông tin database trong `liquibase.properties`, sau đó:

```bash
# Chạy migrations
liquibase update

# Kiểm tra trạng thái
liquibase status
```

### 4. Chạy ứng dụng Spring Boot

```bash
# Build và chạy ứng dụng
./mvnw spring-boot:run

# Hoặc build JAR và chạy
./mvnw clean package -DskipTests
java -jar target/server-0.0.1-SNAPSHOT.jar
```

Ứng dụng sẽ chạy tại: `http://localhost:8080/api/v1`

---

## ⚙️ Cấu hình dự án

### Cấu trúc thư mục

```
server/
├── src/
│   ├── main/
│   │   ├── java/com/dontwait/server/    # Source code
│   │   └── resources/
│   │       ├── application.yml           # Cấu hình chính
│   │       ├── application-dev.yml       # Cấu hình dev
│   │       └── db/changelog/             # Liquibase migrations
│   └── test/                             # Unit tests
├── docker-compose.yml                    # Docker services
├── flake.nix                             # Nix environment
├── pom.xml                               # Maven dependencies
├── .env                                  # Biến môi trường (không commit)
└── .env-example                          # Template biến môi trường
```

### Profiles

- **dev** (mặc định): Môi trường phát triển

### Biến môi trường quan trọng

| Biến | Mô tả |
|------|-------|
| `POSTGRES_URL` | JDBC URL kết nối database |
| `POSTGRES_DB` | Tên database |
| `POSTGRES_USER` | Username database |
| `POSTGRES_PASSWORD` | Password database |
| `POSTGRES_PORT` | Port PostgreSQL |
| `SERVER_PORT` | Port ứng dụng |
| `JWT_SECRET` | Secret key cho JWT |

---

## 🛠️ Các lệnh thường dùng

### Docker Compose

```bash
# Khởi động services
docker-compose up -d

# Dừng services
docker-compose down

# Dừng và xóa volumes (xóa data)
docker-compose down -v

# Restart services
docker-compose restart

# Xem logs realtime
docker-compose logs -f

# Kết nối vào PostgreSQL
docker exec -it ecommerce_postgres psql -U sa -d ecommerce_db
```

### Maven

```bash
# Build project
./mvnw clean install

# Chạy tests
./mvnw test

# Chạy ứng dụng
./mvnw spring-boot:run

# Build JAR (bỏ qua tests)
./mvnw clean package -DskipTests

# Clean project
./mvnw clean
```

### Liquibase

```bash
# Chạy migrations
docker-compose run --rm liquibase update

# Kiểm tra trạng thái
docker-compose run --rm liquibase status

# Tạo diff (so sánh với database)
docker-compose run --rm liquibase diff

# Rollback 1 changeset
docker-compose run --rm liquibase rollback-count 1

# Generate changelog từ database hiện tại
docker-compose run --rm liquibase generate-changelog
```

---

## 🌐 API Endpoints

Base URL: `http://localhost:8080/api/v1`

### Authentication

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/auth/test` | Test endpoint |

---

## 🔧 Troubleshooting

### 1. Lỗi kết nối database

```bash
# Kiểm tra PostgreSQL đang chạy
docker-compose ps

# Kiểm tra logs PostgreSQL
docker-compose logs postgres

# Restart PostgreSQL
docker-compose restart postgres
```

### 2. Port đã được sử dụng

```bash
# Kiểm tra port 5432
lsof -i :5432

# Kiểm tra port 8080
lsof -i :8080

# Hoặc thay đổi port trong .env
```

### 3. Nix Flakes không hoạt động

```bash
# Kiểm tra Flakes đã được kích hoạt
nix --version

# Chạy với flag experimental
nix develop --extra-experimental-features "nix-command flakes"
```

### 4. Lỗi Liquibase

```bash
# Xóa lock nếu bị stuck
docker exec -it ecommerce_postgres psql -U sa -d ecommerce_db -c "DELETE FROM databasechangeloglock;"
```

---

## 📝 License

[MIT License](LICENSE)

---

## 👥 Đóng góp

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request
