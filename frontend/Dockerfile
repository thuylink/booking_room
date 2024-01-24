# Sử dụng base image có hỗ trợ Node.js
FROM node:14

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy các tệp cấu hình và mã nguồn vào container
COPY package*.json ./
COPY frontend/ ./frontend/

# Cài đặt dependencies cho Next.js
RUN npm install
RUN npm run build

EXPOSE 3000


# CMD để chạy lệnh khi container được khởi động
CMD ["npm", "run", "dev"]




