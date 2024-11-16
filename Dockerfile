FROM ubuntu:latest
WORKDIR app/
RUN apt-get update -y
RUN apt-get install apache2 -y
COPY . /var/www/html
EXPOSE 82
ENTRYPOINT apachectl _D FOREGROUND
