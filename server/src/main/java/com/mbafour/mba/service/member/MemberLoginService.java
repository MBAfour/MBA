package com.mbafour.mba.service.member;

import com.mbafour.mba.dto.auth.JwtDto;
import com.mbafour.mba.dto.auth.SignInRequest;
import com.mbafour.mba.security.JwtTokenProvider;
import com.mbafour.mba.security.User;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MemberLoginService {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    public JwtDto signIn(SignInRequest signInRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        signInRequest.getStudentId(),
                        signInRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        ////getPrincipal()을 실행하면 UserDetails를 구현한 사용자 객체를 반환
        String token = jwtTokenProvider.generateToken(((User)authentication.getPrincipal()).getId());

        return new JwtDto(token);
    }
}
