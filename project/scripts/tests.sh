#!/bin/bash
cd ../docker
docker-compose exec django python manage.py test