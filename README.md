To build code locally: 
1) Start Docker desktop
go to the terminal and do following:
2) ```mvn clean package -P docker```

3) ```docker-compose up``` - поднять проект, можно использовать 3, 4 etc, пока 2 было достаточно.

После того как собрали проект нужно зайти в IDE и запустить react-project с помощью ```npm start``` в терминале 


Структура react-project и обращение к API:

1) ```curl -X POST "http://localhost:8080/api/algoCode" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "code=@framework/src/main/java/TradingAlgorithmImpl.java"``` - POST запрос

2) ```curl "http://localhost:8080/api/getTop"``` - возвращает верхние 10


Структура :
1)ModeSelector.js - селектор, оставил один мод
2)Table.js - структура таблицы
