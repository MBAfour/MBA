package com.mbafour.mba.controller;

import com.mbafour.mba.dto.*;
import com.mbafour.mba.service.MemberLoginService;
import com.mbafour.mba.service.MemberRegisterService;
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
    public ApiResult<?> signUpMember(@Valid @RequestBody SignUpDto signUpDto) {

        boolean signUpResult = memberRegisterService.signUp(signUpDto);

        if(signUpResult == false){
            return ApiResult.ERROR("Student Id is already taken!", HttpStatus.BAD_REQUEST);
        }
        return ApiResult.OK("Sign Up successful!");
    }

    @PostMapping("/signin")
    public ApiResult<?> signInMember(@Valid @RequestBody SignInDto signInDto) {
        return ApiResult.OK(memberLoginService.signIn(signInDto));
    }
}
