package com.mbafour.mba.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

//WebSocket설정

@EnableWebSocketMessageBroker //메시지 브로커가 지원하는 WebSocket메시지 처리 활성화
@Configuration
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    // HandShake와 통신을 담당할 End Point를 지정
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chat").setAllowedOriginPatterns("*").withSockJS(); //클라이언트에서 웹 소켓을 연결할 api (handshake endpoint)
    }

    //메모리 기반의 Simple Message Broker를 활성화
    // /subscribe로 시작하는 주소의 Subscriber들에게 메시지를 전달
    // 클라이언트가 서버로 메시지 보낼 때 붙여야하는 prefix는 /publish로 지정
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/subscribe/");
        registry.setApplicationDestinationPrefixes("/publish");
    }
}
