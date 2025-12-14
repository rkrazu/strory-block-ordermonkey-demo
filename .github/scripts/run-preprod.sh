#!/bin/bash


echo "----------- FIND RUNNING CONTAINER ---------"
running_container=$( docker ps --format '{{ .Image }}' | grep -w preprod );

echo "---------- DELETE RUNNING CONTAINER --------"
if [ ! -n "$running_container" ]
then
    echo "no container found"
else
    echo "$running_container is running"

    container_name=$( docker ps --format '{{ .Names }}' | grep -w preprod );
    # the /dev/null omits shell output
    docker rm -f $container_name > /dev/null;

    image_ID=$( docker images | grep -w preprod | awk '{ print $3 }' );
    docker rmi $image_ID;
fi

echo "------------- START CONTAINER --------------"
docker run --name preprod-vicafe-loyaltydashboard -p 8090:3000 \
-v /mnt/vicafeshare/preprod/logs/vicafeloyalty-preprod:/usr/src/app/logs \
-d ${ACR_NAME}.azurecr.io/preprod-vicafe-loyaltydashboard:${IMAGE_ID};
docker update --restart=on-failure preprod-vicafe-loyaltydashboard;

echo "----------------- COMPLETE -----------------"
