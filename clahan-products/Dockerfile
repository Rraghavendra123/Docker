FROM ubuntu:latest
WORKDIR app/
RUN apt-get update -y
RUN apt-get install apache2
COPY . /www/var/html
ENTRYPOINT apachectl -D FOREGROUND
