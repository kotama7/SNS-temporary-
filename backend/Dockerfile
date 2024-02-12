FROM python:latest

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get install -y git \
    && apt-get install sudo -y

RUN pip install --upgrade pip

ADD ./requirements.txt /requirements.txt

RUN pip install -r ./requirements.txt

ENTRYPOINT [ "sh", "./shell/main.sh" ]