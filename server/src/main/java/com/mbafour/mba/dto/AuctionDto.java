package com.mbafour.mba.dto;

import com.mbafour.mba.domain.entity.AuctionEntity;
import lombok.Getter;
import lombok.Setter;

import static org.springframework.beans.BeanUtils.copyProperties;

@Getter
@Setter
public class AuctionDto {

    private Long id;
    private Long highPrice;

    public AuctionDto(AuctionEntity auctionEntity){
        copyProperties(auctionEntity,this);
    }
}
