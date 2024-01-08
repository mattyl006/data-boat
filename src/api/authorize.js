import { API } from '../utils/globals';

const authorize = async (username, hash, setResult) => {
  fetch(`${API}/authorize/${username}/${hash}`, {
    method: 'get',
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('authorize salt ok');
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
      if (json) {
        setResult(json.token);
      } else {
        console.log('getting salt failed');
      }
    });
};

export default authorize;
