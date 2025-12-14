#!/bin/bash


echo "----------- FIND RUNNING CONTAINER ---------"
running_container=$( docker ps --format '{{ .Image }}' | grep -w prod );

echo "---------- DELETE RUNNING CONTAINER --------"
if [ ! -n "$running_container" ]
then
    echo "no container found"
else
    echo "$running_container is running"

    container_name=$( docker ps --format '{{ .Names }}' | grep -w prod );
    # the /dev/null omits shell output
    docker rm -f $container_name > /dev/null;

    image_ID=$( docker images | grep -w prod | awk '{ print $3 }' );
    docker rmi $image_ID;
fi

echo "------------- START CONTAINER --------------"
docker run --name prod-vicafe-loyaltydashboard -p 8000:3000 \
-v /mnt/vicafeshare/prod/logs/vicafeloyalty-prod:/usr/src/app/logs \
-d ${ACR_NAME}.azurecr.io/prod-vicafe-loyaltydashboard:${IMAGE_ID};
docker update --restart=on-failure prod-vicafe-loyaltydashboard;

echo "----------------- COMPLETE -----------------"
