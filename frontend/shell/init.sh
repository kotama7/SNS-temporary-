if [ ! -f "./.ssl/server.key" ]; then
    openssl genrsa 2048 > ./.ssl/server.key
    echo -e "\n" | openssl req -new -key ./.ssl/server.key -out ./.ssl/server.csr
fi

if [ ! -d "./sns/src/node_modules" ]; then
    cd ./sns
    yarn install
    cd ../
fi

if [ "$DEBUG" != "1" ]; then
    cd ./sns
    yarn start
fi