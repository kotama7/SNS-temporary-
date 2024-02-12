FROM node:lts

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get install -y git \
    && apt-get install sudo -y

RUN sudo apt install -y openssl

RUN sh -c "./shell/init.sh"
