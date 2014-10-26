FROM debian:wheezy

MAINTAINER Lookis(lookisliu@gmail.com)

RUN apt-get update \
    && apt-get install -y php5-common php5-gd php-pear php-db php-mail php-mail-mime php5-mysql php5-fpm subversion \
    && svn co https://svn.code.sf.net/p/daloradius/code/trunk /var/www/daloradius

RUN apt-get install -y nginx

ENV DB_ENGINE mysql
ENV DB_HOST localhost
ENV DB_PORT 3306
ENV DB_USER freeradius
ENV DB_PASS radpass_321
ENV DB_NAME freeradius

ENV MAIL_SMTPADDR 127.0.0.1
ENV MAIL_SMTPPORT 25
#ENV MAIL_SMTPAUTH
ENV MAIL_SMTPFROM root@daloradius.xdsl.by

RUN chown www-data:www-data /var/www/daloradius -R \
    && chmod 644 /var/www/daloradius/library/daloradius.conf.php \
    && sed -ri "s/configValues\['CONFIG_DB_([A-Z]+)'\].+/configValues\['CONFIG_DB_\1'\] = getenv('DB_\1');/" /var/www/daloradius/library/daloradius.conf.php \
    && sed -ri "s/configValues\['CONFIG_MAIL_([A-Z]+)'\].+/configValues\['CONFIG_MAIL_\1'\] = getenv('MAIL_\1');/" /var/www/daloradius/library/daloradius.conf.php

ADD daloradius.conf /etc/nginx/sites-available/
RUN rm -f /etc/nginx/sites-available/default \
    && rm -f /etc/nginx/sites-enabled/default \
    && ln -s /etc/nginx/sites-available/daloradius.conf /etc/nginx/sites-enabled/daloradius.conf


ADD entrypoint.sh /
RUN chmod a+x entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]