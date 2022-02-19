package com.mbafour.mba.service;

import com.mbafour.mba.domain.entity.WishEntity;
import com.mbafour.mba.domain.repository.WishRepository;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WishDeleteService {

    private final WishRepository wishRepository;

 //   public WishEntity deleteWish(Long wishId) {

//        return wishRepository.deleteById(
  //              WishEntityid(wishId)
    //    );
//    }
}
