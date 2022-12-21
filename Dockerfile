### STAGE 2:PRODUCTION DEPLOYMENT ###
FROM nginx:latest as nginx
COPY /docs/bootstrap-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80