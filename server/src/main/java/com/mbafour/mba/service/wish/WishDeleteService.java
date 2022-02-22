package com.mbafour.mba.service.wish;

import com.mbafour.mba.domain.repository.WishRepository;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WishDeleteService {

    private final WishRepository wishRepository;

    public  void deleteWish(Long wishId) {
        wishRepository.deleteById(wishId);
   }

}
