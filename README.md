To build code locally: 
1) Start Docker desktop
go to the terminal and do following:
2) ```docker build -t algosim-base -f Dockerfile-base .;docker build -t algosim-dist-jre -f Dockerfile-dist-jre .;docker build -t algosim-dist-jdk -f Dockerfile-dist-jdk .;docker-compose build --no-cache```- локальная сборка всех необходимых образов
3)```docker-compose up --scale compiler=2 --scale executor=2``` - поднять проект, можно использовать 3, 4 etc, пока 2 было достаточно.

После того как собрали проект нужно зайти в IDE и запустить react-project с помощью ```npm start``` в терминале 
