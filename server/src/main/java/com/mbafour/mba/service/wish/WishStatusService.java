package com.mbafour.mba.service.wish;

import com.mbafour.mba.domain.entity.WishEntity;
import com.mbafour.mba.domain.repository.WishRepository;
import com.mbafour.mba.service.member.MemberStatusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@AllArgsConstructor
public class WishStatusService {

    private final WishRepository wishRepository;
    private final MemberStatusService memberStatusService;

    public List<WishEntity> findWishByMember(HttpServletRequest request) {
        return wishRepository.findByMember(memberStatusService.getStatus(request));
    }

}
