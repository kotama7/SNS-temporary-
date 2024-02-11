if [ ! -f "$SSL_FILE" ]; then
    genrsa 2048 > ./.ssl/server.key
    echo -e "\n" | req -new -key ./.ssl/server.key -out ./.ssl/server.csr
fi