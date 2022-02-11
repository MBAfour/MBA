package com.mbafour.mba.controller;

import com.mbafour.mba.dto.ApiResult;
import com.mbafour.mba.dto.AuctionDto;
import com.mbafour.mba.dto.AuctionRequest;
import com.mbafour.mba.service.AuctionBidService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
@ResponseBody
@RequestMapping("/auction")
@AllArgsConstructor
public class AuctionController {

    private final AuctionBidService auctionBidService;

    @PatchMapping("/{bookId}")
    public ApiResult<?> auctionModify(HttpServletRequest request, @PathVariable Long bookId, @RequestBody AuctionRequest auctionRequest) {
        try{
            return ApiResult.OK(new AuctionDto(auctionBidService.modifyAuction(request, bookId, auctionRequest)));
        } catch(Exception e){
            return ApiResult.ERROR(e, HttpStatus.BAD_REQUEST);
        }

    }
}
