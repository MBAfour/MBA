package com.mbafour.mba.domain.repository;

import com.mbafour.mba.domain.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookEntity, Long>  {
}
