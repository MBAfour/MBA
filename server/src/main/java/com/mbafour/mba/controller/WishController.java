package com.mbafour.mba.controller;

import com.mbafour.mba.domain.entity.WishEntity;
import com.mbafour.mba.dto.ApiResult;
import com.mbafour.mba.dto.wish.WishDto;
import com.mbafour.mba.dto.wish.WishRequest;
import com.mbafour.mba.service.wish.WishDeleteService;
import com.mbafour.mba.service.wish.WishRegisterService;
import com.mbafour.mba.service.wish.WishStatusService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import java.util.List;

import static java.util.stream.Collectors.toList;

@RequestMapping("/wish")
@Controller
@ResponseBody
@AllArgsConstructor
public class WishController {

    WishRegisterService wishRegisterService;
    WishDeleteService wishDeleteService;
    WishStatusService wishStatusService;

    @PostMapping("/{bookId}")
    public ApiResult<?> wishAdd(HttpServletRequest request, @PathVariable Long bookId) {
        try{
            return ApiResult.OK(new WishRequest(wishRegisterService.addWish(request, bookId)));
        } catch (Exception e) {
            return ApiResult.ERROR(e,HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{wishId}")
    public ApiResult<WishRequest> wishDelete(@PathVariable Long wishId) {
        wishDeleteService.deleteWish(wishId);
        return ApiResult.OK(new WishRequest(new WishEntity()));
    }

    @GetMapping("")
    public ApiResult<List<WishDto>> wishList(HttpServletRequest request) {
        return ApiResult.OK(wishStatusService.findWishByMember(request).stream().map(wishEntity -> new WishDto(wishEntity)).collect((toList())));
    }



}
