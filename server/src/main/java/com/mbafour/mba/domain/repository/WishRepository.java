package com.mbafour.mba.domain.repository;

import com.mbafour.mba.domain.entity.WishEntity;
import com.mbafour.mba.domain.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishRepository extends JpaRepository<WishEntity, Long>{
    boolean existsByBookAndMember(Long bookId, MemberEntity memberEntity);
}
