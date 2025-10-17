package com.testwithshreyansh;

import au.com.dius.pact.consumer.dsl.PactDslWithProvider;
import au.com.dius.pact.consumer.junit5.PactConsumerTestExt;
import au.com.dius.pact.consumer.junit5.PactTestFor;
import au.com.dius.pact.core.model.RequestResponsePact;
import au.com.dius.pact.core.model.annotations.Pact;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(PactConsumerTestExt.class)
@PactTestFor(providerName = "TestWithShreyanshAPI", port = "8080")
public class ContractTest {

    @Pact(consumer = "MyJavaConsumer")
    public RequestResponsePact createPact(PactDslWithProvider builder) {
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json");

        return builder
            .given("a user with ID 1 exists")
            .uponReceiving("a request for user 1")
                .path("/api/users/1")
                .method("GET")
            .willRespondWith()
                .status(200)
                .headers(headers)
                .body("{\"id\":1,\"name\":\"Shreyansh Shukla\",\"email\":\"testwithshreyansh@gmail.com\"}")
            .toPact();
    }

    @Test
    void testGetUser() {
        RestAssured.baseURI = "http://localhost:8080";
        io.restassured.response.Response response = RestAssured.get("/api/users/1");
        assertEquals(200, response.getStatusCode());
    }
}
