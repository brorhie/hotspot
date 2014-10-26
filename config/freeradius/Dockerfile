FROM debian:wheezy

MAINTAINER Lookis(lookisliu@gmail.com)

RUN apt-get update && apt-get install freeradius-mysql freeradius -y

RUN sed -i 's/^#\t$INCLUDE \+sql\.conf/\t$INCLUDE sql\.conf/' /etc/freeradius/radiusd.conf \
        && sed -i 's/\#readclients/readclients/g' /etc/freeradius/sql.conf \
        && sed -i 's/#\t\+sql$/\tsql/' /etc/freeradius/sites-enabled/default \
        && sed -i '0,/^\tfiles/{s/^\tfiles/#\tfiles/}' /etc/freeradius/sites-enabled/default \
        && sed -i 's/\tradutmp/#\tradutmp/' /etc/freeradius/sites-enabled/default \
        && sed -i 's/#\t\+sql$/\tsql/' /etc/freeradius/sites-enabled/inner-tunnel \
        && sed -i 's/^\tfiles/#\tfiles/' /etc/freeradius/sites-enabled/inner-tunnel \
        && sed -i 's/\tradutmp/#\tradutmp/' /etc/freeradius/sites-enabled/inner-tunnel \
        && echo 'client 0.0.0.0/0 {\n\tsecret = testing123\n\tnastype = other\n}\n' > /etc/freeradius/clients.conf

RUN sed -i 's/localhost/db/' /etc/freeradius/sql.conf

EXPOSE 1812 1813 1814

ADD entrypoint.sh /
RUN chmod a+x entrypoint.sh


ENTRYPOINT ["/entrypoint.sh"]
CMD ["/usr/sbin/freeradius", "-f"]