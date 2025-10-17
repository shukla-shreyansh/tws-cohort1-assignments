package com.testwithshreyansh;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ApiClient {

    private final RequestSpecification request;

    public ApiClient() {
        Properties prop = new Properties();
        try (FileInputStream fis = new FileInputStream("src/test/resources/config.properties")) {
            prop.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
        RestAssured.baseURI = prop.getProperty("base_url");
        request = RestAssured.given();
    }

    public Response get(String endpoint) {
        return request.get(endpoint);
    }

    public Response post(String endpoint, String body) {
        return request.contentType("application/json").body(body).post(endpoint);
    }

    public Response put(String endpoint, String body) {
        return request.contentType("application/json").body(body).put(endpoint);
    }

    public Response delete(String endpoint) {
        return request.delete(endpoint);
    }
}
