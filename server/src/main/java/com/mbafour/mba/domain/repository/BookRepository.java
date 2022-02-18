package com.mbafour.mba.domain.repository;

import com.mbafour.mba.domain.entity.BookEntity;
import com.mbafour.mba.domain.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<BookEntity, Long>  {
    List<BookEntity> findBySeller(MemberEntity seller);
}
