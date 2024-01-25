# Sử dụng image php:7.4-fpm-alpine làm base
FROM php:7.4-fpm-alpine

# Cài đặt các gói cần thiết
RUN apk update && apk add --no-cache \
    build-base \
    mysql-client \
    libzip-dev \
    zip \
    unzip

# Cài đặt Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Thiết lập thư mục làm việc
WORKDIR /var/www/html

# Copy các tệp tin cần thiết vào container
COPY . .

# Cài đặt các phụ thuộc của Laravel bằng Composer
RUN composer install --optimize-autoloader --no-dev

# Thiết lập quyền cho các thư mục và tệp tin
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Thiết lập biến môi trường cho Laravel
ENV APP_NAME=YourAppName
ENV APP_ENV=production
ENV APP_KEY=YourAppKey
ENV APP_DEBUG=false
ENV APP_URL=http://localhost

# Thiết lập cấu hình kết nối cơ sở dữ liệu
ENV DB_CONNECTION=mysql
ENV DB_HOST=mysql
ENV DB_PORT=3306
ENV DB_DATABASE=your_database_name
ENV DB_USERNAME=your_database_username
ENV DB_PASSWORD=your_database_password

# Thiết lập cấu hình cache và phiên của Laravel
ENV CACHE_DRIVER=file
ENV SESSION_DRIVER=file
ENV QUEUE_CONNECTION=sync

# Thiết lập các cổng kết nối
EXPOSE 9000

# Chạy các lệnh sau khi container được khởi chạy
CMD php artisan config:cache && php artisan route:cache && php-fpm
