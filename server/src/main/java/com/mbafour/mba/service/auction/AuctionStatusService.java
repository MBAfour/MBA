package com.mbafour.mba.service.auction;

import com.mbafour.mba.domain.entity.AuctionEntity;
import com.mbafour.mba.domain.repository.AuctionRepository;
import com.mbafour.mba.service.member.MemberStatusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@AllArgsConstructor
public class AuctionStatusService {

    private final AuctionRepository auctionRepository;
    private final MemberStatusService memberStatusService;

    public List<AuctionEntity> findAuctionByBidder(HttpServletRequest request) {
        return auctionRepository.findByBidder(memberStatusService.getStatus(request));
    }
}
