package com.mbafour.mba.controller;

import com.mbafour.mba.dto.*;
import com.mbafour.mba.dto.auth.SignInRequest;
import com.mbafour.mba.dto.auth.SignUpRequest;
import com.mbafour.mba.dto.member.MemberDto;
import com.mbafour.mba.service.member.MemberLoginService;
import com.mbafour.mba.service.member.MemberRegisterService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@ResponseBody
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {

    private final MemberRegisterService memberRegisterService;
    private final MemberLoginService memberLoginService;

    @PostMapping("/signup")
    public ApiResult<?> signUpMember(@Valid @RequestBody SignUpRequest signUpRequest) {
        try{
            return ApiResult.OK(new MemberDto(memberRegisterService.signUp(signUpRequest)));
        } catch (Exception e){
            return ApiResult.ERROR(e,HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/signin")
    public ApiResult<?> signInMember(@Valid @RequestBody SignInRequest signInRequest) {
        return ApiResult.OK(memberLoginService.signIn(signInRequest));
    }
}
