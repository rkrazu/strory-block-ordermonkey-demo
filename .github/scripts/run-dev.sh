#!/bin/bash


echo "----------- FIND RUNNING CONTAINER ---------"
running_container=$( docker ps --format '{{ .Image }}' | grep dev );

echo "---------- DELETE RUNNING CONTAINER --------"
if [ ! -n "$running_container" ]
then
    echo "no container found"
else
    echo "$running_container is running"

    container_name=$( docker ps --format '{{ .Names }}' | grep dev );
    # the /dev/null omits shell output
    docker rm -f $container_name > /dev/null;

    image_ID=$( docker images | grep dev | awk '{ print $3 }' );
    docker rmi $image_ID;
fi

echo "------------- START CONTAINER --------------"
docker run --name dev-vicafe-loyaltydashboard -dp 8080:3000 ${ACR_NAME}.azurecr.io/dev-vicafe-loyaltydashboard:${IMAGE_ID};
docker update --restart=on-failure dev-vicafe-loyaltydashboard;

echo "----------------- COMPLETE -----------------"