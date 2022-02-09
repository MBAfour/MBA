package com.mbafour.mba.service;

import com.mbafour.mba.dto.ChatMessage;
import com.mbafour.mba.dto.ChatRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import java.util.List;
import java.util.Map;

@Service
public class ChatService {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public void sendMessage(String to, ChatMessage message) {

        jdbcTemplate.update("insert into messages (message_text,message_from,message_to,created_datetime) " +
                "values (?,?,?,current_time )",message.getMessage(),message.getSenderId(),to);

        simpMessagingTemplate.convertAndSend("/topic/messages/" + to, message);

    }

    public List<Map<String,Object>> getListMessage(@PathVariable("from") String from, @PathVariable("to") String to){
        return jdbcTemplate.queryForList("select * from messages where (message_from=? and message_to=?) " +
                "or (message_to=? and message_from=?) order by created_datetime asc",from,to,from,to);
    }

    public void sendMessageGroup(String to, ChatRoom message) {

        jdbcTemplate.update("insert into 'group_messages'('group_id', 'user_id', 'messages', 'created_datetime') " +
                "VALUES (?,?,?,current_timestamp )",to,message.getSenderId(),message.getMessage());
        message.setGroupId(to);
        simpMessagingTemplate.convertAndSend("/topic/messages/group/" + to, message);
    }

    public List<Map<String,Object>> getListMessageGroups(@PathVariable("groupid") String groupid){
        return jdbcTemplate.queryForList("select gm.*,us.name as name from group_messages gm " +
                "join users us on us.id=gm.user_id " +
                "where gm.group_id=? order by created_datetime asc",groupid);
    }
}

/*

* SimpMessagingTemplate : This class will be used to send messages to users who have subscribed to a specific topic.
* sendMessage : This method will be used in websocket personal chat to storing a message into database and send back to destination subscribe topic.
* getListMessage :This method will be used in Rest Api to retrieve a list of messages from personal user to another user chat.
* getListMessageGroups: This method will be used in Rest Api to retrieve a list of messages from user in group chat.
* sendMessageGroup : This method will be used in websocket group chat to storing a message into database and send back to destination subscribe topic group.
* */