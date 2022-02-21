package com.mbafour.mba.controller;

import com.mbafour.mba.config.KafkaConstants;
import com.mbafour.mba.dto.Message;
import com.mbafour.mba.service.MessageSender;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping(value = "/kafka")
public class ChatController {
    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;
    @Autowired
    MessageSender messageSender;

    @PostMapping(value = "/publish")
    public void sendMessage(@RequestBody Message message) {
        log.info("Produce message : " + message.toString());
        message.setTimestamp(LocalDateTime.now().toString());
        try {
            messageSender.send(KafkaConstants.KAFKA_TOPIC, message);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /*
    // /app/sendMessage 으로 들어오는 메시지를 "/topic/group"을 구독하고있는 사람들에게 송신
    @MessageMapping("/sendMessage")
    @SendTo("/topic/group")
    public Message broadcastGroupMessage(@Payload Message message) {
        return message;
    }
    */
}
