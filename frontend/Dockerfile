FROM node:14

# Cấu hình và cài đặt thêm (nếu cần)

# Sao chép mã nguồn Next.js
COPY frontend /usr/src/app

# Cài đặt các phụ thuc Next.js
RUN npm install

# Cấu hình thêm (nếu cần)

# Cổng mặc định Next.js
EXPOSE 3000

# Lệnh mặc định để chạy khi container khởi động
CMD ["npm", "run", "dev"]