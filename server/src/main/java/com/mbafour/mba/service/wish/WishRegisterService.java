package com.mbafour.mba.service.wish;

import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.entity.WishEntity;

import com.mbafour.mba.domain.repository.BookRepository;
import com.mbafour.mba.domain.repository.WishRepository;
import com.mbafour.mba.exception.AlreadyExistWishException;
import com.mbafour.mba.service.member.MemberStatusService;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

import javax.servlet.http.HttpServletRequest;

@Service
@AllArgsConstructor
public class WishRegisterService {

    private final WishRepository wishRepository;
    private final BookRepository bookRepository;
    private final MemberStatusService memberStatusService;

    public WishEntity addWish(HttpServletRequest request, Long bookId) throws Exception{

        BookEntity bookEntity = bookRepository.findById(bookId).get();

        if(wishRepository.existsByMemberAndBook(memberStatusService.getStatus(request), bookEntity)){
          throw new AlreadyExistWishException();
        }

        return wishRepository.save(WishEntity.builder()
                .member(memberStatusService.getStatus(request))
                .book(bookEntity)
                .build());
    }
}
