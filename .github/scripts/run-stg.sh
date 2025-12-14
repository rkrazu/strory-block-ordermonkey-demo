#!/bin/bash


echo "----------- FIND RUNNING CONTAINER ---------"
running_container=$( docker ps --format '{{ .Image }}' | grep stg );

echo "---------- DELETE RUNNING CONTAINER --------"
if [ ! -n "$running_container" ]
then
    echo "no container found"
else
    echo "$running_container is running"

    container_name=$( docker ps --format '{{ .Names }}' | grep stg );
    # the /dev/null omits shell output
    docker rm -f $container_name > /dev/null;

    image_ID=$( docker images | grep stg | awk '{ print $3 }' );
    docker rmi $image_ID;
fi

echo "------------- START CONTAINER --------------"
docker run --name stg-vicafe-loyaltydashboard -p 8080:3000 \
-v /mnt/vicafeshare/stage/logs/vicafeloyalty-stage:/usr/src/app/logs \
-d ${ACR_NAME}.azurecr.io/stg-vicafe-loyaltydashboard:${IMAGE_ID};
docker update --restart=on-failure stg-vicafe-loyaltydashboard;

echo "----------------- COMPLETE -----------------"
