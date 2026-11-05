# About Backend Dockumentation

### Read it before you start project!

***
## Start Project
To start a project you can use special script in 

    # project/scripts/ 
    ./run_server

    # If you want to use scripts, make sure that you has permision

    chmod +x or 777 # or other (check documentation about chmod how to choose the best for you) 

    # Remember that chmod is not secure option. If you use it, everyone will has a permision to run this script.

    # or in project/docker
    docker-compose up / docker-compose up --build (option with rebuild)

It is custom script made by me, to choose faster what type of docker-compose up you want to use.

## Changes

If you want to make changes in this project make sure, that your pipenv is updated.

To use commend like python createsuperuser, or makemigrations, you has to use

    # Dont worry these operations are in scripts directory.
    docker exec django python manage.py makemigrations

DON'T FORGET THAT OUR PROJECT IS MADE WITH PIPENV, SO IF YOU ARE INSTALLING PACKAGES THAT DOCKER NEEDS,
INSTALL IT WITH PIPENV

    # project/backend
    pipenv install {package_name}

    # dont forget to make sure that pipenv is updated (mean pipfile.lock)
    pipenv update

    # to remove package use
    pipenv uninstall {package_name}

## DataBase changes/debugging 
System uses postgresql, so if you want to check your database without PGADMIN, use psql in your console

    psql -h localhost -U postgres -p 5432 -d postgres

where:
- -h is host
- -U is user
- -p is port
- -d is password

## Errors (More errors will be added soon)
If you get error like:

- can't connect to bridge  

check your systemctl docker status  

    systemctl docker status
    # if you get fedback that your docker deamon is not enbaled, type
    systemctl docker start
    #If this error happend always when you boot your pc, try to find solution how to enable docker deamon on boot.

if you have not admin site template and your site looks like without css, make sure that you has static files downloaded. (Docker django has to do it automaticaly)

## Gitignore
Make sure that static files and other not common files are in .gitignore, we don't want to collect garbage in main repository. These files has to create automaticaly to avoid bugs.

## Testing project
To test for example user module do:
    
    # project/docker
    docker-compose exec {docker_container_name (django} python manage.py test {module (users)}
    # Make sure that you have docker-compose upped, cuz this operation is made on docker container VM
    
    # docker-compose up in docker directory or in script directory 
    ./run_server

To test you can do it also in scripts directory:
    
    ./tests.sh

THIS DOCUMETATION WILL BE CHANGED LATER!