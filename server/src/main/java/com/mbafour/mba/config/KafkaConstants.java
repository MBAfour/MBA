package com.mbafour.mba.config;

public class KafkaConstants {
    public static final String KAFKA_TOPIC = "mba-chat"; // 토픽이름
    public static final String GROUP_ID = "mba-group"; // consumer를 식별할 수 있는 그룹
    public static final String KAFKA_BROKER = "localhost:9092"; // kafka 클러스터에 연결 호스트:포트
}
