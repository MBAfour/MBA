package com.mbafour.mba.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mbafour.mba.dto.ChatMessage;
import com.mbafour.mba.dto.ChatRoom;
import com.mbafour.mba.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/*
* Websocket Handler 작성
socket 통신은 서버와 클라이언트가 1:N으로 관계를 맺음
-> 한 서버에 여러 클라이언트가 접속할 수 있으며, 서버에는 여러 클라이언트가 발송한 메시지를 받아 처리해줄 Handler의 작성 필요
*/

/*
* 웹소켓 클라이언트로부터 채팅 메시지를 전달받아 채팅 메시지 객체로 변환
* 전달받은 메시지에 담긴 채팅방 Id로 발송 대상 채팅방 정보 조회함
* 해당 채팅방에 입장해있는 모든 클라이언트들(Websocket session)에게 타입에 따른 메시지 발송
* */

@Slf4j
@RequiredArgsConstructor
@Component
public class WebSockChatHandler extends TextWebSocketHandler {
    private final ObjectMapper objectMapper;
    private final ChatService chatService;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // Client로부터 받은 메시지를 Console Log에 출력
        String payload = message.getPayload();
        log.info("payload {}", payload);

//        // Client로 환영메시지 보내기
//        TextMessage textMessage = new TextMessage("Welcome chatting server!");
//        session.sendMessage(textMessage);

        ChatMessage chatMessage = objectMapper.readValue(payload, ChatMessage.class);
        ChatRoom room = chatService.findRoomById(chatMessage.getRoomId());
        room.handleActions(session, chatMessage, chatService);
    }
}

