#!/bin/bash
# TODO: automate this instead of copy-pasting into user resources
# TODO: containerize this
# install mysql client and server
apt install mysql-server -y
apt install mysql-client -y

# ssl cert
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot certonly --standalone --non-interactive --agree-tos -m theotherbrennanmcfarland@gmail.com -d api.brennanmcfarland.com
`openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out keystore.p12 -name tomcat -CAfile chain.pem -caname root`

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
# install jdk
apt-get purge openjdk-\* -y
wget https://download.java.net/java/GA/jdk15.0.2/0d1cfde4252546c6931946de8db48ee2/7/GPL/openjdk-15.0.2_linux-x64_bin.tar.gz
tar xvf openjdk-15.0.2_linux-x64_bin.tar.gz
export JAVA_HOME=jdk-15.0.2/
export PATH=jdk-15.0.2/bin:$PATH
mv build/libs/projects-0.0.1-SNAPSHOT.jar .
java -jar projects-0.0.1-SNAPSHOT.jar $password &
mv ../../api-gateway/build/libs/api-gateway-0.0.1-SNAPSHOT.jar .
java -jar api-gateway-0.0.1-SNAPSHOT.jar &
