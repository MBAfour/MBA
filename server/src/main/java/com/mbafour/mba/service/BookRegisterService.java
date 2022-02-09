package com.mbafour.mba.service;

import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.repository.BookRepository;
import com.mbafour.mba.dto.BookRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
@AllArgsConstructor
public class BookRegisterService {

    private final BookRepository bookRepository;
    private final MemberStatusService memberStatusService;

    public BookEntity addBook(HttpServletRequest request, BookRequest bookRequest){

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
                .seller(memberStatusService.getStatus(request))
                .build();

        return bookRepository.save(bookEntity);
    }
}
