import http from 'k6/http';
import {check, sleep} from k6;

export const options = {
    // stages: [
    //     { duration: '2m', target: 200},
    //     { duration: '2m', target: 500},
    //     { duration: '2m', target: 800},
    //     { duration: '2m', target: 1000},
    //     { duration: '2m', target: 0}
    // ],
    stages: [
        { duration: '1m', target: 100},
        { duration: '1m', target: 300},
        { duration: '4m', target: 1000},
        { duration: '3m', target: 500},
        { duration: '1m', target: 0}
    ],
    thresholds: {
        'http_req_duration' : ['p(95) < 500'],
        'http_req_failed' : ['rate < 0.01']
    }
};

export default function(){

    const base_url = 'https://shreyanshsukla.in';
    let response = http.get(`${base_url}/health`);
    check(response, {'API STATUS CODE':(r) => r.status === 200});
    sleep(1);

    let response1 = http.get(`${base_url}/getParticipant`, { participant: { user: 'shreyansh'}});
    check(response1, {'API STATUS CODE':(r) => r.status === 200});
    sleep(1);

    let response2 = http.get(`${base_url}/getParticipant/shreyansh`);
    check(response2, {'API STATUS CODE':(r) => r.status === 200});
    sleep(1);

}

// 1M -> 