package com.mbafour.mba.service;

import com.mbafour.mba.domain.entity.AuctionEntity;
import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.entity.MemberEntity;
import com.mbafour.mba.domain.repository.AuctionRepository;
import com.mbafour.mba.domain.repository.BookRepository;
import com.mbafour.mba.dto.AuctionRequest;
import com.mbafour.mba.exception.LowBidPriceException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
@AllArgsConstructor
public class AuctionBidService {

    private final MemberStatusService memberStatusService;
    private final BookRepository bookRepository;
    private final AuctionRepository auctionRepository;

    public AuctionEntity modifyAuction(HttpServletRequest request, Long bookId, AuctionRequest auctionRequest) throws Exception {

        BookEntity bookEntity = bookRepository.findById(bookId).get();
        MemberEntity memberEntity = memberStatusService.getStatus(request);

        //이전에 경매한 기록이 있을때
        if(auctionRepository.findByBook(bookEntity).isPresent()){

            AuctionEntity auctionEntity = auctionRepository.findByBook(bookEntity).get();

            if(auctionEntity.getHighPrice() >= auctionRequest.getBidPrice()){
                throw new LowBidPriceException();
            }

            auctionEntity = AuctionEntity.builder()
                    .id(auctionEntity.getId())
                    .highPrice(auctionRequest.getBidPrice())
                    .book(bookEntity)
                    .bidder(memberEntity).build();

            return auctionRepository.save(auctionEntity);
        }

        //이전에 경매한 기록이 없을때
        if(bookEntity.getRowPrice() >= auctionRequest.getBidPrice()){
            throw new LowBidPriceException();
        }

        AuctionEntity auctionEntity = AuctionEntity.builder()
                .highPrice(auctionRequest.getBidPrice())
                .book(bookEntity)
                .bidder(memberEntity).build();

        return auctionRepository.save(auctionEntity);
    }
}
