package com.mbafour.mba.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mbafour.mba.dto.ChatRoom;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.*;

// 채팅 서비스 구현
// 채팅방 생성, 조회, 하나의 세션에 메시지 발송하는 서비스
@Slf4j
@RequiredArgsConstructor
@Service
public class ChatService {

    private final ObjectMapper objectMapper;
    private Map<String, ChatRoom> chatRooms;
    // 채팅방 Map: 서버에 생성된 모든 채팅방의 정보 모아둔 구조체
    // 빠른 구현을 위해 채팅룸의 정보 저장은 외부 저장소를 이용하지 않고, HashMap에 저장하는 것으로 구현

    /*
    * 채팅방 조회: 채팅방 Map에 담긴 정보 조회
    * 채팅방 생성: Random UUID로 구별ID를 가진 채팅방 객체를 생성하고 채팅방 Map에 추가
    * 메시지 발송: 지정한 Websocket 세션에 메시지 발송
    * */

    @PostConstruct  // 초기화 작업을 할 메소드에 적용
    private void init() {
        chatRooms = new LinkedHashMap<>();
    }

    public List<ChatRoom> findAllRoom() {
        return new ArrayList<>(chatRooms.values());
    }

    public ChatRoom findRoomById(String roomId) {
        return chatRooms.get(roomId);
    }

    public ChatRoom createRoom(String name) {
        String randomId = UUID.randomUUID().toString();
        ChatRoom chatRoom = ChatRoom.builder()
                .roomId(randomId)
                .name(name)
                .build();
        chatRooms.put(randomId, chatRoom);
        return chatRoom;
    }

    public <T> void sendMessage(WebSocketSession session, T message) {
        try {
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        } catch (IOException e) {
            log.error(e.getMessage(), e);
        }
    }
    /*
        Entity 객체를 Message로 Publish하기 위해선 객체를 JSON String으로 변환하는 Serialize과정을 거쳐야 함
        Spring boot에서는 ObjectMapper를 사용해 구현
        => writeValueAsString() 메서드를 사용해 JSON String을 획득한다

        참고:
        JSON Message Format 사용하기
        https://minholee93.tistory.com/entry/RabbitMQ-JSON-Message-Format-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-1

    * */
}
