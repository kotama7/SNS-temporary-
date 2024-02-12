#!/bin/bash
if [[ "$DEBUG" != "1" ]]; then
    python ./SNS/manage.py runserver 0.0.0.0:$PORT
fi
