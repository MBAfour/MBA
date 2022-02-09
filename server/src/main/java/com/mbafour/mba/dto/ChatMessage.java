package com.mbafour.mba.dto;

import lombok.Getter;
import lombok.Setter;

// 채팅 메시지 구현
@Getter
@Setter
public class ChatMessage {

    private String message;        //메시지
    private String senderId;       //메시지 보낸사람
    private String groupId;         //방번호

    @Override
    public String toString(){
        return "ChatMessageDTO{" +
                "message='" + message +'\'' +
                ", senderId = " + senderId + '}';
    }
}
