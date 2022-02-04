package com.mbafour.mba.dto;

import lombok.Getter;

@Getter
public class JwtDto {
    private String tokenType = "Bearer";
    private String accessToken;

    public JwtDto(String accessToken) {
        this.accessToken = accessToken;
    }
}
