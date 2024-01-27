FROM php:7.4-apache


# Cài đặt Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Cài đặt các phụ thuộc PHP bằng Composer
COPY backend/composer.json backend/composer.lock /var/www/html/
RUN composer install --no-scripts --no-autoloader

# Sao chép mã nguồn Laravel
COPY backend /var/www/html


# Tạo các tệp autoload và chạy các tác vụ khởi tạo
RUN chown -R www-data:www-data /var/www/html \
    && composer dump-autoload \
    && php artisan optimize

# Cổng mặc định Apache
EXPOSE 8000

# Lệnh mặc định để chạy khi container khởi động
CMD ["apache2-foreground"]

