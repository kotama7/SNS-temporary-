if [ ! -f "$SSL_FILE" ]; then
    openssl genrsa 2048 > ./.ssl/server.key
    openssl echo -e "\n" | req -new -key ./.ssl/server.key -out ./.ssl/server.csr
fi