package com.mbafour.mba.service.member;

import com.mbafour.mba.domain.entity.MemberEntity;
import com.mbafour.mba.domain.repository.MemberRepository;
import com.mbafour.mba.security.JwtTokenProvider;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
@AllArgsConstructor
public class MemberStatusService {

    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    public MemberEntity getStatus(HttpServletRequest request){
        String token = jwtTokenProvider.getTokenFromRequest(request);
        Long id = jwtTokenProvider.getIdFromToken(token);
        return memberRepository.findById(id).get();
    }
}
