To build code locally: 
1) Start Docker desktop
go to the terminal and do following:
2) $docker build -t algosim-base -f Dockerfile-base .;docker build -t algosim-dist-jre -f Dockerfile-dist-jre .;docker build -t algosim-dist-jdk -f Dockerfile-dist-jdk .;docker-compose build --no-cache$ - локальная сборка всех необходимых образов
