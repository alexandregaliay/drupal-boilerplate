# Docker base image
FROM drupal:10-php8.2-fpm-bullseye

# Install packages
RUN apt-get update && apt-get install --no-install-recommends -y \
  curl \
  wget \
  nano \
  git \
  unzip \
  default-mysql-client

# Clean repository
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set bash alias
RUN echo "alias la='ls -la --color=auto'" >> ~/.bashrc \
  && . ~/.bashrc
