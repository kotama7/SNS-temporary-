FROM python:latest

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get install -y git \
    && apt-get install sudo -y

RUN apt-get install sudo -y

RUN pip install --upgrade pip

RUN pip install -r ./requirements.txt

RUN bash ./shell/init.sh
