package com.mbafour.mba.controller;

import com.mbafour.mba.dto.ChatMessage;
import com.mbafour.mba.dto.ChatRoom;
import com.mbafour.mba.service.ChatService;
import com.mbafour.mba.service.UserAndGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;

// 채팅 컨트롤러 구현
// 채팅방의 생성 및 조회는 Rest api로 구현할 것이므로, Controller를 생성하여 내용 작성하기

@RestController
@CrossOrigin
public class ChatController {

    @Autowired
    ChatService messageService;

    @Autowired
    UserAndGroupService userAndGroupService;

    @MessageMapping("/chat/{to}")
    public void sendMessagePersonal(@DestinationVariable String to, ChatMessage message) {

        messageService.sendMessage(to,message);

    }

    @GetMapping("listmessage/{from}/{to}")
    public List<Map<String,Object>> getListMessageChat(@PathVariable("from") String from, @PathVariable("to") String to){
        return messageService.getListMessage(from, to);
    }

    @MessageMapping("/chat/group/{to}")
    public void sendMessageToGroup(@DestinationVariable String to, ChatRoom message) {
        messageService.sendMessageGroup(to,message);

    }

    @GetMapping("listmessage/group/{groupid}")
    public List<Map<String,Object>> getListMessageGroupChat(@PathVariable("groupid") String groupid){
        return messageService.getListMessageGroups(groupid);
    }

    @GetMapping("/fetchAllUsers/{myId}")
    public List<Map<String,Object>> fetchAll(@PathVariable("myId") String myId) {
        return userAndGroupService.fetchAll(myId);

    }

    @GetMapping("/fetchAllGroups/{groupid}")
    public List<Map<String,Object>> fetchAllGroup(@PathVariable("groupid") String groupId) {
        return  userAndGroupService.fetchAllGroup(groupId);
    }

}

/*
*
* @MessageMapping : 클라이언트(프런트 엔드)가 특정 대상으로 메시지를 보내는 웹소켓 통신에 사용.
* @GetMapping : GET 메서드가 응답 데이터를 가져올 수 있도록 Rest API 통신에 사용
*
* */