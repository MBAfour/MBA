package com.mbafour.mba.service;

import com.mbafour.mba.domain.entity.MemberAuthority;
import com.mbafour.mba.domain.entity.MemberEntity;
import com.mbafour.mba.domain.repository.MemberRepository;
import com.mbafour.mba.dto.SignUpRequest;
import com.mbafour.mba.exception.AlreadyExistStudentIdException;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MemberRegisterService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public MemberEntity signUp(SignUpRequest signUpRequest) throws Exception {

        if(memberRepository.existsByStudentId(signUpRequest.getStudentId())) {
            throw new AlreadyExistStudentIdException();
        }

        MemberEntity memberEntity = MemberEntity.builder()
                .studentId(signUpRequest.getStudentId())
                .password(passwordEncoder.encode(signUpRequest.getPassword()))
                .name(signUpRequest.getName())
                .email(signUpRequest.getEmail())
                .phone(signUpRequest.getPhone())
                .memberAuthority(MemberAuthority.ROLE_USER)
                .build();

        return memberRepository.save(memberEntity);
    }
}
