package com.mbafour.mba.service;

import com.mbafour.mba.dto.BookApiDto;
import com.mbafour.mba.dto.BookInfoDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;

@Service
public class BookOpenApiService {

    @Value("${app.bookApiUrl}")
    private String url;
    @Value("${app.bookApiKey}")
    private String key;

    //제목을 통해 책에 대한 정보를 책 검색 API를 통해 찾기
    public List<BookInfoDto> getByTitle(String title){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization", "KakaoAK " + key); //헤더에 키 설정
        URI targetUrl = UriComponentsBuilder
                .fromUriString(url) //url
                .queryParam("query", title)
                .build()
                .encode(StandardCharsets.UTF_8) //한글 깨지는거 막기
                .toUri();
        HttpEntity<String> httpEntity = new HttpEntity<>(httpHeaders);

        return Arrays.asList(restTemplate.exchange(targetUrl, HttpMethod.GET, httpEntity, BookApiDto.class).getBody().getDocuments());
    }
}
