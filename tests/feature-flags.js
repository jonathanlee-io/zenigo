import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    vus: 500,
    duration: '30s',
};

export default function() {
    let res = http.get(`${__ENV.BASE_URL}/v1/flags`, {
        headers: {
            'X-Api-Key': `${__ENV.FLAG_API_KEY}`,
            'X-User-Email': `${__ENV.FLAG_USER_EMAIL}`,
        },
    });
    check(res, { "status is 200": (res) => res.status === 200 });
    sleep(1);
}
