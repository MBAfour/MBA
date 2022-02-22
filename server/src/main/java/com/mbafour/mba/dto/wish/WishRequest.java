package com.mbafour.mba.dto.wish;

import com.mbafour.mba.domain.entity.WishEntity;
import lombok.*;
import static org.springframework.beans.BeanUtils.copyProperties;

@Getter
@Setter
public class WishRequest {
    private Long id;

    public WishRequest(WishEntity wishEntity) {copyProperties(wishEntity, this);}
}
