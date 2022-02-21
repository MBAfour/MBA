package com.mbafour.mba.service;

import com.mbafour.mba.dto.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class MessageSender {
    private static final Logger LOGGER = LoggerFactory.getLogger(MessageSender.class);

    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;

    public void send(String topic, Message data) {
        LOGGER.info("sending data='{}' to topic='{}'", data, topic);
        kafkaTemplate.send(topic, data);// send to react clients via websocket(STOMP)
    }
}
