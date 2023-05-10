# Docker base image
FROM drupal:9-php8.1-apache

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
