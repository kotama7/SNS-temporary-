#!/bin/bash
if [[ "$DEBUG" != "1" ]]; then
    python ./SNS/manage.py runsslserver 0.0.0.0:$PORT --certificate ./ssl/server.crt --key ./ssl/server.key
fi
