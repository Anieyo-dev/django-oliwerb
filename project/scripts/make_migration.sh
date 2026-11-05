#!/bin/bash

# To run this script your dockers has to be downed
cd ../docker
docker-compose run django python manage.py makemigrations