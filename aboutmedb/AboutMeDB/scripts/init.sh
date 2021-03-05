# assumes the below version of gradle is already downloaded
mkdir /opt/gradle
unzip -d /opt/gradle gradle-6.8.3-bin.zip
echo "export PATH=$PATH:/opt/gradle/gradle-6.8.3/bin" >> .bashrc
