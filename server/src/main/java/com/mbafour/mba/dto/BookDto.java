package com.mbafour.mba.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
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
    private Long sellerId;
}
