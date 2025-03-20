FROM php:8.3-fpm

# 必要な拡張モジュールをインストール
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libzip-dev \
    libonig-dev && \
    docker-php-ext-install pdo_mysql mbstring zip opcache

# Composerをインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# php.iniを設定
COPY php.ini /usr/local/etc/php/php.ini

# 作業ディレクトリを設定
WORKDIR /var/www