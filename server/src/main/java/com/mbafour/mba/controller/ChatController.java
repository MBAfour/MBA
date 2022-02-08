package com.mbafour.mba.controller;

import com.mbafour.mba.dto.ChatRoom;
import com.mbafour.mba.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// 채팅 컨트롤러 구현
// 채팅방의 생성 및 조회는 Rest api로 구현할 것이므로, Controller를 생성하여 내용 작성하기

@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
public class ChatController {

    private final ChatService chatService;

    @PostMapping
    public ChatRoom createRoom(@RequestParam String name){
        return chatService.createRoom(name);
    }

    @GetMapping
    public List<ChatRoom> findAllRoom(){
        return chatService.findAllRoom();
    }
}
