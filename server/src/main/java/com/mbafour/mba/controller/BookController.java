package com.mbafour.mba.controller;

import com.mbafour.mba.dto.ApiResult;
import com.mbafour.mba.service.BookOpenApiService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@ResponseBody
@RequestMapping("/book")
@AllArgsConstructor
public class BookController {

    BookOpenApiService bookOpenApiService;

    @GetMapping("/info/search")
    public ApiResult<?> bookInfoSearch(@RequestParam String query) {
        return ApiResult.OK(bookOpenApiService.getByTitle(query));
    }
}
