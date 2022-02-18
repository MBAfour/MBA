package com.mbafour.mba.domain.repository;

import com.mbafour.mba.domain.entity.AuctionEntity;
import com.mbafour.mba.domain.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuctionRepository extends JpaRepository<AuctionEntity, Long> {
    List<AuctionEntity> findByBidder(MemberEntity bidder);
}
