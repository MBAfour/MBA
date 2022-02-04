package com.mbafour.mba.service;

import com.mbafour.mba.domain.entity.MemberAuthority;
import com.mbafour.mba.domain.entity.MemberEntity;
import com.mbafour.mba.domain.repository.MemberRepository;
import com.mbafour.mba.dto.SignUpDto;
import com.mbafour.mba.security.JwtTokenProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MemberRegisterService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public boolean signUp(SignUpDto signUpDto) {

        if(memberRepository.existsByStudentId(signUpDto.getStudentId())) {
            return false;
        }
        MemberEntity memberEntity = MemberEntity.builder()
                .studentId(signUpDto.getStudentId())
                .password(passwordEncoder.encode(signUpDto.getPassword()))
                .name(signUpDto.getName())
                .email(signUpDto.getEmail())
                .phone(signUpDto.getPhone())
                .memberAuthority(MemberAuthority.ROLE_USER)
                .build();
        memberRepository.save(memberEntity);
        return true;
    }
}
