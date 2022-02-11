package com.mbafour.mba.service;

import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.repository.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BookStatusService {

    private final BookRepository bookRepository;

    public Page<BookEntity> findAllBookByPage(int pageNum) {
        Pageable pageable = PageRequest.of(pageNum, 10, Sort.by("id").descending());
        return bookRepository.findAll(pageable);
    }

    public BookEntity findBook(Long bookId) {
        return bookRepository.findById(bookId).get();
    }


}
