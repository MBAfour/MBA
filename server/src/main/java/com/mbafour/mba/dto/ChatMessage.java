package com.mbafour.mba.dto;

import lombok.Getter;
import lombok.Setter;

// 채팅 메시지 구현
// 상황에 따라 채팅방 입장, 채팅방에 메시지 보내기 => 2가지 상황있으므로, enum으로 선언
@Getter
@Setter
public class ChatMessage {
    //메시지 타입: 입장, 채팅
    public enum MessageType{
        ENTER, TALK             //ENTER: 채팅방 입장, TALK: 대화하기
    }

    private MessageType type;   //메시지 타입
    private String roomId;      //방번호
    private String sender;      //메시지 보낸사람
    private String message;     //메시지
}
