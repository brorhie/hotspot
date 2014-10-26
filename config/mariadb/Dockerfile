FROM debian:wheezy

MAINTAINER Lookis(lookisliu@gmail.com)

RUN apt-get update \
    && apt-get install -y python-software-properties \
    && apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 0xcbcb082a1bb943db \
    && apt-key adv --keyserver keys.gnupg.net --recv-keys 1C4CBDCDCD2EFD2A \
    && add-apt-repository 'deb http://mirrors.neusoft.edu.cn/mariadb/repo/10.0/debian wheezy main' \
    && add-apt-repository 'deb http://sfo1.mirrors.digitalocean.com/mariadb/repo/10.0/debian wheezy main' \
    && add-apt-repository 'deb http://repo.percona.com/apt wheezy main' \
    && apt-get update \
    && apt-get install -y procps mariadb-galera-server galera percona-xtrabackup-21

RUN cp /usr/share/mysql/wsrep.cnf /etc/mysql/conf.d/ \
    && sed -i 's/wsrep_sst_method=rsync/wsrep_sst_method=xtrabackup-v2/' /etc/mysql/conf.d/wsrep.cnf \
    && PASS=`cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32|head -n 1` \
    && sed -i "s/wsrep_sst_auth=root:/wsrep_sst_auth=xtrabackup-v2:$PASS/" /etc/mysql/conf.d/wsrep.cnf \
    && service mysql start \
    && mysql -e "CREATE USER 'xtrabackup-v2'@'localhost' IDENTIFIED BY '$PASS';GRANT ALL ON *.* TO 'xtrabackup-v2'@'localhost';flush privileges;" \
    && sed -i "s/wsrep_provider=none/wsrep_provider=\/usr\/lib\/galera\/libgalera_smm.so/" /etc/mysql/conf.d/wsrep.cnf


EXPOSE 3306 4567

ADD entrypoint.sh /
RUN chmod a+x entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD []