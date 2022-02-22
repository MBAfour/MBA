package com.mbafour.mba.dto.auth;

import lombok.Getter;

@Getter
public class SignInRequest {
    String studentId;
    String password;
}
