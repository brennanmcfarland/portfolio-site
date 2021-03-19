#!/bin/bash
# TODO: containerize this
# install mysql client and server
apt install mysql-server -y
apt install mysql-client -y
# root password for the database
rootpassword=$(openssl rand -base64 32 | sed 's/[^a-zA-Z0-9]//g')
echo "alter user 'root'@'localhost' identified by '$rootpassword'" > tmp_password_change.txt
# restart the sql server to apply the above changes
systemctl stop mysql
mysqld -init-file=tmp_password_change.txt
rm tmp_password_change.txt
systemctl start mysql
# clone the repo
git clone https://github.com/brennanmcfarland/portfolio-site
cd portfolio-site/projects-service/projects-builder
# the user password for the backend to connect to the database
password=$(openssl rand -base64 32 | sed 's/[^a-zA-Z0-9]//g')
# create and populate the database
bash seed-database $password
cd ../projects
# install gradle
wget https://services.gradle.org/distributions/gradle-6.8.3-bin.zip
mkdir /opt/gradle
apt install unzip -y
unzip -d /opt/gradle gradle-6.8.3-bin.zip
export PATH=$PATH:/opt/gradle/gradle-6.8.3/bin
# install jdk
wget https://download.java.net/java/GA/jdk15.0.2/0d1cfde4252546c6931946de8db48ee2/7/GPL/openjdk-15.0.2_linux-x64_bin.tar.gz
tar xvf openjdk-15.0.2_linux-x64_bin.tar.gz
export JAVA_HOME=jdk-15.0.2/
gradle build
gradle BootRun -Pargs=$password
