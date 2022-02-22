package com.mbafour.mba.dto.wish;

import com.mbafour.mba.domain.entity.WishEntity;
import lombok.*;

import java.util.Date;

@Getter
@Setter
public class WishDto {

    private Long id;
    private Long wishId;
    private String title;
    private String author;
    private Date endDay;
    private Long highPrice;

    public WishDto(WishEntity wishEntity){
        this.id = wishEntity.getBook().getId();
        this.wishId = wishEntity.getId();
        this.title = wishEntity.getBook().getTitle();
        this.author = wishEntity.getBook().getAuthor();
        this.endDay = wishEntity.getBook().getEndDay();
        this.highPrice = wishEntity.getBook().getAuctionEntity().getHighPrice();
    }
}
