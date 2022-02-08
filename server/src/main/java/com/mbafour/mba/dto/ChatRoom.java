package com.mbafour.mba.dto;

import com.mbafour.mba.service.ChatService;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.socket.WebSocketSession;
import java.util.HashSet;
import java.util.Set;

// 채팅방 구현
// 채팅방은 입장한 클라이언트들의 정보를 갖고 있어야 함 => WebsocketSession 정보 리스트를 멤버 필드로 가짐
@Getter
public class ChatRoom {
    private String roomId;
    private String name;
    private Set<WebSocketSession> sessions = new HashSet<>();
    // WebSocketSession: spring에서 WebSocket connection이 맺어진 세션을 가리킴 (= 고수준 socket)
    @Builder
    public ChatRoom(String roomId, String name){
        this.roomId = roomId;
        this.name = name;
    }

    // 채팅방에서는 입장, 대화하기의 기능이 있으므로 handleAction을 통해 분기 처리함
    public void handleActions(WebSocketSession session, ChatMessage chatMessage, ChatService chatService) {
        // 입장 시) 채팅룸의 session정보에 클라이언트의 session리스트에 추가
        // 채팅룸에 메시지 도착할 경우 채팅룸의 모든 session에 메시지를 발송하면 채팅 완성
        if (chatMessage.getType().equals(ChatMessage.MessageType.ENTER)) {
            sessions.add(session);
            chatMessage.setMessage(chatMessage.getSender() + "님이 입장했습니다.");
        }
        sendMessage(chatMessage, chatService);
    }

    public <T> void sendMessage(T message, ChatService chatService) {
        sessions.parallelStream().forEach(session -> chatService.sendMessage(session, message));
    }

}
