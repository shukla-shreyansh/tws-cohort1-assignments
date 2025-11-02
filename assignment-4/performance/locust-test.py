from locust import HttpUser, task, between, LoadTestShape
import json
import random

BASE_URL = "https://shreyanshsukla.in"

class CustomLoadShape(LoadTestShape):

    stages = [
        { "duration": 60, "users": 100, "spawn_rate": 5},
        { "duration": 120, "users": 300, "spawn_rate": 1.5},
        { "duration": 240, "users": 1000, "spawn_rate": 2},
        { "duration": 120, "users": 500, "spawn_rate": 1},
        { "duration": 60, "users": 100, "spawn_rate": 1},
    ]

    def tick(self):
        run_time = self.get_run_time()

        for stage in self.stages:
            if run_time < stage["duration"]:
                tick_data = (stage["users"], stage["spawn_rate"])
                return tick_data

        return None

class HttpUserTest(HttpUser):

    wait_time = between(0.1,0.5)
    host = BASE_URL

    def on_start(self):
        print("Starting")

    @task
    def api_test(self):
        self.client.get("/health")
        self.client.get("/getParticipant", params={ "participant": { "user": "shreyansh"}})
        self.client.get("/getParticipant/shreyansh")

    def on_stop(self):
        print("Stopping")
