package com.mbafour.mba.service;

import com.mbafour.mba.domain.entity.AuctionEntity;
import com.mbafour.mba.domain.entity.MemberEntity;
import com.mbafour.mba.domain.repository.AuctionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuctionRegisterService {

    private final AuctionRepository auctionRepository;

    public AuctionEntity addAuction(Long rowPrice, MemberEntity memberEntity) {

        return auctionRepository.save(AuctionEntity.builder()
                .highPrice(rowPrice) //초기 경매 입찰 가격은 최저 가격 (rowPrice)
                .bidder(memberEntity) //초기 경매 입찰자는 자신 (memberEntity)
                .build());
    }
}
