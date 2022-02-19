package com.mbafour.mba.controller;

import com.mbafour.mba.dto.ApiResult;
import com.mbafour.mba.dto.WishDto;
import com.mbafour.mba.service.WishDeleteService;
import com.mbafour.mba.service.WishRegisterService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RequestMapping("/wish")
@Controller
@ResponseBody
@AllArgsConstructor
public class WishController {

    WishRegisterService wishRegisterService;
    WishDeleteService wishDeleteService;

    @PostMapping("/{bookId}")
    public ApiResult<WishDto> wishAdd(HttpServletRequest request, @PathVariable Long bookId) {
        return ApiResult.OK(new WishDto(wishRegisterService.addWish(request, bookId)));
    }

   // @DeleteMapping("/delete/{wishId}")
  //  public ApiResult<WishDto> wishDelete(@PathVariable Long wishId) {
  //      return ApiResult.OK(new WishDto(wishDeleteService.deleteWish(wishId)));
  //  }
    


}
