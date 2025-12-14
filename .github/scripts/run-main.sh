#!/bin/bash


echo "----------- FIND RUNNING CONTAINER ---------"
running_container=$( docker ps --format '{{ .Image }}' | grep -i prod );

echo "---------- DELETE RUNNING CONTAINER --------"
if [ ! -n "$running_container" ]
then
    echo "no container found"
else
    echo "$running_container is running"

    container_name=$( docker ps --format '{{ .Names }}' | grep -i prod );
    # the /dev/null omits shell output
    docker rm -f $container_name > /dev/null;

    image_ID=$( docker images | grep -i prod | awk '{ print $3 }' );
    docker rmi $image_ID;
fi

echo "----------------- ACR LOGIN ----------------"
az acr login --name $PROD_CONTAINER_REGISTRY_NAME;

echo "------------- START CONTAINER --------------"
docker run --name prod-ecap-crypto-trading \
-p 9090:80 \
-v /mnt/fireblocks:/keys/ \
-v /etc/ssl/private:/certs/ \
-v /mnt/x4tshare/prod/config/ecap-config:/app/config \
-v /mnt/x4tshare/prod/logs/crypto-trading/prod-sgx-crypto-trading:/app/ecaplog \
-d ${PROD_CONTAINER_REGISTRY_NAME}.azurecr.io/prod-ecap-crypto-trading:${PROD_IMAGE_ID}
--restart on-failure;

echo "----------------- COMPLETE -----------------"