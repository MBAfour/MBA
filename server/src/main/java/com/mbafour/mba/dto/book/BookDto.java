package com.mbafour.mba.dto.book;

import com.mbafour.mba.domain.entity.BookEntity;
import lombok.*;

import java.util.Date;

import static org.springframework.beans.BeanUtils.copyProperties;

@Getter
@Setter
public class BookDto {
    private Long id;
    private String title;
    private String author;
    private String publisher;
    private String status;
    private String lectureName;
    private String professorName;
    private Long increasePrice;
    private Long rowPrice;
    private Long highPrice;
    private Date startDay;
    private Date endDay;
    private String thumbnail;
    private Long sellerId;

    public BookDto(BookEntity bookEntity) {
        copyProperties(bookEntity, this);
        this.sellerId = bookEntity.getSeller().getId();
        this.highPrice = bookEntity.getAuctionEntity().getHighPrice();
    }
}
