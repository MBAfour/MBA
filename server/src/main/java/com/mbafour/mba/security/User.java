package com.mbafour.mba.security;

import com.mbafour.mba.domain.entity.MemberAuthority;
import com.mbafour.mba.domain.entity.MemberEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class User implements UserDetails {

    private Long id;
    private String studentId;
    private String password;
    private String name;
    private String email;
    private String phone;
    private MemberAuthority memberAuthority;

    public User (MemberEntity memberEntity) {
        this.id = memberEntity.getId();
        this.studentId = memberEntity.getStudentId();
        this.password = memberEntity.getPassword();
        this.name = memberEntity.getName();
        this.email = memberEntity.getEmail();
        this.phone = memberEntity.getPhone();
        this.memberAuthority = memberEntity.getMemberAuthority();
    }

    public Long getId() {return id;}

    @Override
    public String getUsername() {
        return studentId;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

        authorities.add(new SimpleGrantedAuthority(this.memberAuthority.name()));

        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if(this == o)
            return true;
        if(o == null || getClass() != o.getClass())
            return false;
        User that = (User) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
