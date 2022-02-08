package com.mbafour.mba.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

// WebSocket 기본 설정
@RequiredArgsConstructor
@Configuration
@EnableWebSocket
public class WebSockConfig implements WebSocketConfigurer {
    private final WebSocketHandler webSocketHandler;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        // 해당 endpoint로 handshake가 이루어짐
        registry.addHandler(webSocketHandler, "/ws/chat").setAllowedOrigins("*");
    }
}
/*
* WebSocketHandlerRegistry에 WebSocketHandler의 구현체 등록하기
* 등록된 Handler는 특정 endpoint("/ws/chat")로 handshake를 완료한 후 맺어진 connection 관리
* */