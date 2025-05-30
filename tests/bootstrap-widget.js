import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
  vus: 300,
  duration: '30s',
};

export default function() {
  let res = http.get(`${__ENV.BASE_URL}/v1/feedback/embed-scripts/bootstrap-widget.js`);
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}
