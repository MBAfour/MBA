package com.mbafour.mba.dto;

import com.mbafour.mba.domain.entity.WishEntity;
import lombok.*;
import static org.springframework.beans.BeanUtils.copyProperties;

@Getter
@Setter
public class WishDto {
    private Long id;

    public WishDto(WishEntity wishEntity) {copyProperties(wishEntity, this);}
}
