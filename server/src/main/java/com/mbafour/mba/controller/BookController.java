package com.mbafour.mba.controller;

import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.dto.ApiResult;
import com.mbafour.mba.dto.BookDto;
import com.mbafour.mba.dto.BookInfoDto;
import com.mbafour.mba.dto.BookRequest;
import com.mbafour.mba.service.BookOpenApiService;
import com.mbafour.mba.service.BookRegisterService;
import com.mbafour.mba.service.BookStatusService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Controller
@ResponseBody
@RequestMapping("/book")
@AllArgsConstructor
public class BookController {

    BookOpenApiService bookOpenApiService;
    BookRegisterService bookRegisterService;
    BookStatusService bookStatusService;

    @GetMapping("/info/search")
    public ApiResult<List<BookInfoDto>> bookInfoSearch(@RequestParam String query) {
        return ApiResult.OK(bookOpenApiService.getByTitle(query));
    }

    @PostMapping("")
    public ApiResult<BookDto> bookAdd(HttpServletRequest request, @RequestBody BookRequest bookRequest) {
        return ApiResult.OK(new BookDto(bookRegisterService.addBook(request, bookRequest)));
    }

    @GetMapping("/{pageNum}")
    public ApiResult<Page<BookDto>> bookList(@PathVariable int pageNum) {
        Page<BookEntity> bookEntityPage = bookStatusService.findAllBookByPage(pageNum - 1);
        return ApiResult.OK(
                new PageImpl<>(
                        bookEntityPage.stream()
                        .map(bookEntity -> new BookDto(bookEntity)).collect((toList())),
                        PageRequest.of(pageNum, 6, Sort.by("id").descending()),
                        bookEntityPage.getTotalElements()
                )
        );
    }

    @GetMapping("/all")
    public ApiResult<List<BookDto>> bookAllList() {
        return ApiResult.OK(bookStatusService.findAllBook().stream().map(bookEntity -> new BookDto(bookEntity)).collect((toList())));
    }

    @GetMapping("/detail/{bookId}")
    public ApiResult<BookDto> bookDetail(@PathVariable Long bookId) {
        return ApiResult.OK(new BookDto(bookStatusService.findBook(bookId)));
    }

    @GetMapping("/history")
    public ApiResult<List<BookDto>> bookSellHistoryList(HttpServletRequest request) {
        return ApiResult.OK(bookStatusService.findBookBySeller(request).stream().map(bookEntity -> new BookDto(bookEntity)).collect((toList())));
    }
}
