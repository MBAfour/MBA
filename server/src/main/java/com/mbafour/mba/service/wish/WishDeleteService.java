package com.mbafour.mba.service.wish;

import com.mbafour.mba.domain.repository.WishRepository;
import com.mbafour.mba.exception.NoExistWishIdException;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WishDeleteService {

    private final WishRepository wishRepository;

    public  void deleteWish(Long wishId) throws Exception{

        if(!wishRepository.existsById(wishId)) {
            throw new NoExistWishIdException();
        }


        wishRepository.deleteById(wishId);
   }

}
