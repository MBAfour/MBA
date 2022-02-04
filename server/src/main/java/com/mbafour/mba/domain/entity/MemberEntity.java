package com.mbafour.mba.domain.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "member")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String studentId;
    private String password;
    private String name;
    private String email;
    private String phone;
    private MemberAuthority memberAuthority;
}
