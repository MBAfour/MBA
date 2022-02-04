package com.mbafour.mba.domain.repository;

import com.mbafour.mba.domain.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    Optional<MemberEntity> findByStudentId(String studentId);
    boolean existsByStudentId(String studentId);
}
