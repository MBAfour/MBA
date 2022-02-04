package com.mbafour.mba.security;

import com.mbafour.mba.domain.entity.MemberEntity;
import com.mbafour.mba.domain.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

//Spring Security에서 유저를 찾는 메소드 제공
@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String studentId) throws UsernameNotFoundException {
        MemberEntity memberEntity = memberRepository.findByStudentId(studentId)
                .orElseThrow(() -> new UsernameNotFoundException("Member not found with Student Id : " + studentId));
        return new User(memberEntity);
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        MemberEntity memberEntity = memberRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Member not found with Id : " + id));
        return new User(memberEntity);
    }


}
