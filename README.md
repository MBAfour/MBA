# MBA
MBA(Major Book Auction)

# Getting Started

## Prerequisites
- Docker > 19.x

## Installation
1. 소스코드 다운로드
    ```shell
    $ git clone https://github.com/MBAfour/MBA.git
    ```
2. 리액트 npm 패키지 설치
    ```shell
    $ cd client
    client$ npm install
    ```
3. 스프링부트 gradle 빌드
    ```shell
    $ cd server
    server$ ./gradlew build
    ```
# Run
- 리액트 실행
    ```shell
    $ cd client
    client$ npm start
    ```
- 스프링 부트 실행
    ```shell
    $ cd server/build/libs
    server/build/libs$ java -jar mba-0.0.1-SNAPSHOT.jar
    ```
- 카프카 실행
    ```shell
    zookeeper-server-start.bat ..\..\config\zookeeper.properties
    ```
    ```shell
    kafka-server-start.bat ..\..\config\server.properties
    ```
# Usage
- 도커 이미지 빌드 및 컨테이너 실행
    ```shell
    $ docker-compose up --build
    ```
- 컨테이너 실행
    ```shell
    $ docker-compose up
    ```
- 컨테이너 다운
    ```shell
    $ docker-compose down
    ```
