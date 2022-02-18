package com.mbafour.mba.controller;

import com.mbafour.mba.dto.ApiResult;
import com.mbafour.mba.dto.AuctionDto;
import com.mbafour.mba.dto.AuctionRequest;
import com.mbafour.mba.service.AuctionModifyService;
import com.mbafour.mba.service.AuctionStatusService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Controller
@ResponseBody
@RequestMapping("/auction")
@AllArgsConstructor
public class AuctionController {

    private final AuctionModifyService auctionModifyService;
    private final AuctionStatusService auctionStatusService;

    @PatchMapping("/{bookId}")
    public ApiResult<?> auctionModify(HttpServletRequest request, @PathVariable Long bookId, @RequestBody AuctionRequest auctionRequest) {
        try{
            return ApiResult.OK(new AuctionDto(auctionModifyService.modifyAuction(request, bookId, auctionRequest)));
        } catch(Exception e){
            return ApiResult.ERROR(e, HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/history")
    public ApiResult<List<AuctionDto>> bookSellHistoryList(HttpServletRequest request) {
        return ApiResult.OK(auctionStatusService.findAuctionByBidder(request).stream().map(auctionEntity -> new AuctionDto(auctionEntity)).collect((toList())));
    }
}
