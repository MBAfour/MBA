package com.mbafour.mba.service.book;

import com.mbafour.mba.domain.entity.AuctionEntity;
import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.repository.BookRepository;
import com.mbafour.mba.dto.book.BookRequest;
import com.mbafour.mba.service.member.MemberStatusService;
import com.mbafour.mba.service.auction.AuctionRegisterService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
@AllArgsConstructor
public class BookRegisterService {

    private final BookRepository bookRepository;
    private final MemberStatusService memberStatusService;
    private final AuctionRegisterService auctionRegisterService;

    public BookEntity addBook(HttpServletRequest request, BookRequest bookRequest){

        AuctionEntity auctionEntity = auctionRegisterService.addAuction(bookRequest.getRowPrice(), memberStatusService.getStatus(request));

        BookEntity bookEntity = BookEntity.builder()
                .title(bookRequest.getTitle())
                .author(bookRequest.getAuthor())
                .publisher(bookRequest.getPublisher())
                .status(bookRequest.getStatus())
                .lectureName(bookRequest.getLectureName())
                .professorName(bookRequest.getProfessorName())
                .increasePrice(bookRequest.getIncreasePrice())
                .rowPrice(bookRequest.getRowPrice())
                .startDay(bookRequest.getStartDay())
                .endDay(bookRequest.getEndDay())
                .thumbnail(bookRequest.getThumbnail())
                .auctionEntity(auctionEntity)
                .seller(memberStatusService.getStatus(request))
                .build();

        return bookRepository.save(bookEntity);
    }
}
