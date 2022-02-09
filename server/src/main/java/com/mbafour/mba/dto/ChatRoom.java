package com.mbafour.mba.dto;

import lombok.Getter;
import lombok.Setter;

// 채팅방 구현
// 채팅방은 입장한 클라이언트들의 정보를 갖고 있어야 함 => WebsocketSession 정보 리스트를 멤버 필드로 가짐
@Getter
@Setter
public class ChatRoom extends ChatMessage{
    private String groupId;

//    public static ChatRoom create(String name){
//        ChatRoom chatRoom = new ChatRoom();
//        chatRoom.roomId = UUID.randomUUID().toString();
//        chatRoom.name = name;
//        return chatRoom;
//    }
}
