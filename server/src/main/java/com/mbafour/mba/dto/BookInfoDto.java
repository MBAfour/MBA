package com.mbafour.mba.dto;

import lombok.Getter;

@Getter
public class BookInfoDto {
    private String title;
    private String[] authors;
    private Long price;
    private String publisher;
    private String thumbnail;
}