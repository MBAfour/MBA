package com.mbafour.mba.service;

import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.repository.BookRepository;
import com.mbafour.mba.dto.BookDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
public class BookStatusService {

    private final BookRepository bookRepository;

    public Page<BookDto> findAllBookByPageNum(int pageNum) {

        Pageable pageable = PageRequest.of(pageNum, 10, Sort.by("id").descending());
        Page<BookEntity> bookEntityPage = bookRepository.findAll(pageable);
        List<BookDto> bookDtoList = bookEntityPage.stream().map(
                bookEntity -> BookDto.builder()
                .title(bookEntity.getTitle())
                .author(bookEntity.getAuthor())
                .publisher(bookEntity.getPublisher())
                .status(bookEntity.getStatus())
                .lectureName(bookEntity.getLectureName())
                .professorName(bookEntity.getProfessorName())
                .increasePrice(bookEntity.getIncreasePrice())
                .rowPrice(bookEntity.getRowPrice())
                .startDay(bookEntity.getStartDay())
                .endDay(bookEntity.getEndDay())
                .thumbnail(bookEntity.getThumbnail())
                .sellerId(bookEntity.getSeller().getId())
                .build()).collect((toList()));

        return new PageImpl<>(bookDtoList, pageable, bookEntityPage.getTotalElements());
    }


}
