package com.mbafour.mba.dto;

import lombok.Getter;

import java.io.Serializable;

@Getter
public class Message implements Serializable {

    private String author;
    private String content;
    private String timestamp;
    private Long bookId;

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "Message {" + "author='" + author + ", content='" + content + ", timestamp='" + timestamp + ", bookId='" + bookId + '}';
    }
}
