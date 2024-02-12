FROM python:latest

WORKDIR /usr/src/app

COPY . .

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get install -y git \
    && apt-get install sudo -y

RUN pip install --upgrade pip

RUN pip install -r ./requirements.txt

CMD [ "sh", "./shell/main.sh" ]