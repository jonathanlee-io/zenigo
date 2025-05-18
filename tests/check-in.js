import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    vus: 500,
    duration: '30s',
};

export default function() {
    let res = http.post(`${__ENV.BASE_URL}/v1/users/authenticated/check-in`, JSON.stringify({}), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${__ENV.TOKEN}`
        },
    });
    check(res, { "status is 200": (res) => res.status === 200 });
    sleep(1);
}
