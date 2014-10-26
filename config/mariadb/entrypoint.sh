#!/bin/bash
if [ -z $1 ] ; then
    mysqld --wsrep_cluster_address=gcomm://$BOOTSTRAP_IP --wsrep_node_address=`ip addr show eth0|grep 'inet '|sed 's/\// /'|cut -d' ' -f 6`
else
    exec "$@"
fi