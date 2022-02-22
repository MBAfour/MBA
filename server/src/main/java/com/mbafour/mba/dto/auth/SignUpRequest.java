package com.mbafour.mba.dto.auth;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
public class SignUpRequest {
    @NotBlank
    private String studentId;
    @NotBlank
    private String password;
    @NotBlank
    private String name;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String phone;
}
