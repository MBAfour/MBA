package com.mbafour.mba.service.auction;

import com.mbafour.mba.domain.entity.AuctionEntity;
import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.entity.MemberEntity;
import com.mbafour.mba.domain.repository.AuctionRepository;
import com.mbafour.mba.domain.repository.BookRepository;
import com.mbafour.mba.dto.auction.AuctionRequest;
import com.mbafour.mba.exception.LowBidPriceException;
import com.mbafour.mba.service.member.MemberStatusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
@AllArgsConstructor
public class AuctionModifyService {

    private final MemberStatusService memberStatusService;
    private final BookRepository bookRepository;
    private final AuctionRepository auctionRepository;

    public AuctionEntity modifyAuction(HttpServletRequest request, Long bookId, AuctionRequest auctionRequest) throws LowBidPriceException {

        BookEntity bookEntity = bookRepository.findById(bookId).get();
        MemberEntity memberEntity = memberStatusService.getStatus(request);

        //입찰 금액이 현재 최대 입찰 금액 이하일때
        if(bookEntity.getAuctionEntity().getHighPrice() >= auctionRequest.getBidPrice()){
            throw new LowBidPriceException();
        }

        return auctionRepository.save(AuctionEntity.builder()
                .id(bookEntity.getAuctionEntity().getId())
                .highPrice(auctionRequest.getBidPrice())
                .bidder(memberEntity)
                .build());

    }
}
