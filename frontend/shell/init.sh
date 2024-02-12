if [ ! -f $SSL_FILE ]; then
    openssl genrsa 2048 > ./.ssl/server.key
    echo -e "\n" | openssl req -new -key ./.ssl/server.key -out ./.ssl/server.csr
fi