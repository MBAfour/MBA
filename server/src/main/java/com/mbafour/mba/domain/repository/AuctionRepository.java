package com.mbafour.mba.domain.repository;

import com.mbafour.mba.domain.entity.AuctionEntity;
import com.mbafour.mba.domain.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuctionRepository extends JpaRepository<AuctionEntity, Long> {
}
