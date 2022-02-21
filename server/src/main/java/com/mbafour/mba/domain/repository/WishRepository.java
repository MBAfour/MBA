package com.mbafour.mba.domain.repository;

import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.entity.WishEntity;
import com.mbafour.mba.domain.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishRepository extends JpaRepository<WishEntity, Long>{

    boolean existsByMemberAndBook(MemberEntity memberEntity, BookEntity bookEntity);
    List<WishEntity> findByMember(MemberEntity member);
}
