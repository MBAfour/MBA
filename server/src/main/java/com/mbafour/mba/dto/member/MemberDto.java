package com.mbafour.mba.dto.member;

import com.mbafour.mba.domain.entity.MemberAuthority;
import com.mbafour.mba.domain.entity.MemberEntity;
import lombok.Getter;
import lombok.Setter;

import static org.springframework.beans.BeanUtils.copyProperties;

@Getter
@Setter
public class MemberDto {

    private Long id;
    private String studentId;
    private String name;
    private String email;
    private String phone;
    private MemberAuthority memberAuthority;

    public MemberDto(MemberEntity memberEntity) {
        copyProperties(memberEntity, this);
    }
}
