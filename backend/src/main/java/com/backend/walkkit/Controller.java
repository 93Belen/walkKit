package com.backend.walkkit;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@org.springframework.stereotype.Controller
public class Controller {
    private String response;

    @CrossOrigin("http://localhost:5500")
    @GetMapping("/apicall/{cityName}")
    @ResponseBody
    public String getResponseFromApi(@PathVariable String cityName,  @Value("${api.key}") String apikey) throws Exception {
        System.out.println(cityName);
        HttpRequest getRequest = HttpRequest.newBuilder()
                .uri(new URI("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apikey))
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Origin", "http://localhost:5500")
                .header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
                .GET()
                .build();
        HttpClient httpClient = java.net.http.HttpClient.newHttpClient();
        HttpResponse<String> getApi =  httpClient.send(getRequest, HttpResponse.BodyHandlers.ofString());
        this.response = getApi.body();
        return response;
    }


    @CrossOrigin("http://localhost:5500")
    @GetMapping("/apicall/{lat}/{lon}")
    @ResponseBody
    public String getResponseFromApi2(@PathVariable String lat, @PathVariable String lon,  @Value("${api.key}") String apikey) throws Exception {

        HttpRequest getRequest = HttpRequest.newBuilder()
                .uri(new URI("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apikey))
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Origin", "http://localhost:5500")
                .header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
                .GET()
                .build();
        HttpClient httpClient = java.net.http.HttpClient.newHttpClient();
        HttpResponse<String> getApi =  httpClient.send(getRequest, HttpResponse.BodyHandlers.ofString());
        this.response = getApi.body();
        return response;
    }
}
