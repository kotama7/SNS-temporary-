FROM python:latest

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get install -y git

RUN pip install --upgrade pip

# RUN pip install -r ./requirements.txt
