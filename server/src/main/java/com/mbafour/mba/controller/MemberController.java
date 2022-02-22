package com.mbafour.mba.controller;

import com.mbafour.mba.dto.ApiResult;
import com.mbafour.mba.dto.member.MemberDto;
import com.mbafour.mba.service.member.MemberStatusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@ResponseBody
@RequestMapping("/member")
@AllArgsConstructor
public class MemberController {

    private final MemberStatusService memberStatusService;

    @GetMapping(value= "/status")
    public ApiResult<?> memberStatus(HttpServletRequest request){
        return ApiResult.OK(new MemberDto(memberStatusService.getStatus(request)));
    }
}
