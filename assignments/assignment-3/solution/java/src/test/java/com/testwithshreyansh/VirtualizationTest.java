package com.testwithshreyansh;

import com.github.tomakehurst.wiremock.WireMockServer;
import io.restassured.RestAssured;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.github.tomakehurst.wiremock.client.WireMock.*;
import static org.hamcrest.Matchers.equalTo;

public class VirtualizationTest {

    private WireMockServer wireMockServer;

    @BeforeEach
    public void setup() {
        wireMockServer = new WireMockServer(8089);
        wireMockServer.start();
        setupStub();
    }

    @AfterEach
    public void teardown() {
        wireMockServer.stop();
    }

    public void setupStub() {
        stubFor(post(urlEqualTo("/api/payments"))
            .willReturn(aResponse().withHeader("Content-Type", "application/json")
                .withStatus(201)
                .withBody("{\"status\":\"success\",\"transaction_id\":\"txn_12345\"}")));
    }

    @Test
    public void testMockPaymentApi() {
        RestAssured.baseURI = "http://localhost:8089";
        String paymentData = "{\"amount\":100.00,\"currency\":\"USD\",\"card_number\":\"1234-5678-9012-3456\"}";

        RestAssured.given()
            .contentType("application/json")
            .body(paymentData)
        .when()
            .post("/api/payments")
        .then()
            .statusCode(201)
            .body("status", equalTo("success"))
            .body("transaction_id", equalTo("txn_12345"));
    }
}
