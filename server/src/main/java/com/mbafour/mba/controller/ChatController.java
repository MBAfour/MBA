package com.mbafour.mba.controller;

import com.mbafour.mba.config.KafkaConstants;
import com.mbafour.mba.dto.Message;
import com.mbafour.mba.service.MessageSender;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@Controller
@ResponseBody
@AllArgsConstructor
public class ChatController {

    private final MessageSender messageSender;

    @PostMapping(value = "/publish")
    public void sendMessage(@RequestBody Message message) {
        message.setTimestamp(LocalDateTime.now().toString());
        messageSender.send(KafkaConstants.KAFKA_TOPIC, message);
    }

    /*
    // /publish/message (applicationDestinationPrfixes와 @MessageMapping의 경로가 합쳐진 경로) 으로 들어오는 메시지를 카프카로 전달
    @MessageMapping("/message")
    public void broadcastGroupMessage(@Payload Message message) {
        message.setTimestamp(LocalDateTime.now().toString());
        messageSender.send(KafkaConstants.KAFKA_TOPIC, message);
    }

    // /publish/message (applicationDestinationPrfixes와 @MessageMapping의 경로가 합쳐진 경로) 으로 들어오는 메시지를 "/subscribe/book"을 구독하고있는 사람들에게 송신
    @MessageMapping("/message")
    @SendTo("/subscribe/book")
    public Message broadcastGroupMessage(@Payload Message message) {
        return message;
    }
    */
}
