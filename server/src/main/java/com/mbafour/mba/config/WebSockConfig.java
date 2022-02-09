package com.mbafour.mba.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

// WebSocket 기본 설정
@Configuration
@EnableWebSocketMessageBroker
public class WebSockConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // 해당 endpoint로 handshake가 이루어짐
        registry.addEndpoint("/ws").setAllowedOrigins("*")    // ws프로토콜 /ws 하위의 모든 uri에서 websocketHandler를 사용한다는 의미
                .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config){
        config.enableSimpleBroker("/topic");  //메시지 구독하는 요청의 prefix 설정 subscriber
        config.setApplicationDestinationPrefixes("/app");  //메시지 발행하는 요청의 prefix 설정 publisher
    }
}

