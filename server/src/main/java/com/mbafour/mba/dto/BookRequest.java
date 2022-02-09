package com.mbafour.mba.dto;

import lombok.Getter;

import java.util.Date;

@Getter
public class BookRequest {
    private String title;
    private String author;
    private String publisher;
    private String status;
    private String lectureName;
    private String professorName;
    private Long increasePrice;
    private Long rowPrice;
    private Date startDay;
    private Date endDay;
    private String thumbnail;
}
