FROM php:8.0.26-apache

RUN a2enmod rewrite

WORKDIR /var/www/html

COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage

RUN docker-php-ext-disable intl

RUN apt-get update && apt-get install -y \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath opcache \
    && docker-php-ext-enable opcache

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
