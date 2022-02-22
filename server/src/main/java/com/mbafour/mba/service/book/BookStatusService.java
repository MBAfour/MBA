package com.mbafour.mba.service.book;

import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.repository.BookRepository;
import com.mbafour.mba.service.member.MemberStatusService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@AllArgsConstructor
public class BookStatusService {

    private final BookRepository bookRepository;
    private final MemberStatusService memberStatusService;

    public Page<BookEntity> findAllBookByPage(int pageNum) {
        Pageable pageable = PageRequest.of(pageNum, 6, Sort.by("id").descending());
        return bookRepository.findAll(pageable);
    }

    public List<BookEntity> findAllBook() {
        return bookRepository.findAll();
    }

    public BookEntity findBook(Long bookId) {
        return bookRepository.findById(bookId).get();
    }

    public List<BookEntity> findBookBySeller(HttpServletRequest request) {
        return bookRepository.findBySeller(memberStatusService.getStatus(request));
    }

}
