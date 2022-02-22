package com.mbafour.mba.service.message;

import com.mbafour.mba.config.KafkaConstants;
import com.mbafour.mba.dto.message.Message;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MessageListener {

    private static final Logger LOGGER = LoggerFactory.getLogger(MessageListener.class);

    SimpMessagingTemplate template;

    @KafkaListener(topics = KafkaConstants.KAFKA_TOPIC, groupId = KafkaConstants.GROUP_ID) //카프카로부터 메시지 받음
    public void listen(Message message) {
        LOGGER.info("sending via kafka listener..");
        LOGGER.info("sending to client data='{}'}'", message);
        template.convertAndSend("/subscribe/book/" + message.getBookId() , message); // "/subscribe/book/"+message.getBookId()를 구독하는 사용자에게 전달
    }
}