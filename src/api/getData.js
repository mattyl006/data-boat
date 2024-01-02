import { API } from '../utils/globals';
import { APIToken } from '../utils/globals';

const getData = (file, setResult) => {
  fetch(`${API}/static/files/${file}?token=${APIToken}`, {
    method: 'get',
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('getting data ok');
          return res.json();
        } else {
          console.log('something went wrong');
          console.log(res);
        }
      },
      (error) => {
        console.log(error);
        console.error('failed due to network error or cross domain');
      }
    )
    .then((json) => {
      console.log('json response processing');
      console.log(json);
      setResult(json);
    });
};

export default getData;
