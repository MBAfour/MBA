package com.mbafour.mba.controller;

import com.mbafour.mba.dto.ApiResult;
import com.mbafour.mba.dto.BookRequest;
import com.mbafour.mba.service.BookOpenApiService;
import com.mbafour.mba.service.BookRegisterService;
import com.mbafour.mba.service.BookStatusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
@ResponseBody
@RequestMapping("/book")
@AllArgsConstructor
public class BookController {

    BookOpenApiService bookOpenApiService;
    BookRegisterService bookRegisterService;
    BookStatusService bookStatusService;

    @GetMapping("/info/search")
    public ApiResult<?> bookInfoSearch(@RequestParam String query) {
        return ApiResult.OK(bookOpenApiService.getByTitle(query));
    }

    @PostMapping("")
    public ApiResult<?> bookAdd(HttpServletRequest request, @RequestBody BookRequest bookRequest) {
        return ApiResult.OK(bookRegisterService.addBook(request, bookRequest));
    }

    @GetMapping("/{pageNum}")
    public ApiResult<?> bookList(@PathVariable int pageNum) {
        return ApiResult.OK(bookStatusService.findAllBookByPageNum(pageNum - 1));
    }

    @GetMapping("/detail/{bookId}")
    public ApiResult<?> bookDetail(@PathVariable Long bookId) {
        return ApiResult.OK(bookStatusService.findBook(bookId));
    }
}
