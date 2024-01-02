import { API } from '../utils/globals';

const getSalt = async (username, setResult) => {
  fetch(`${API}/get-salt/${username}`, {
    method: 'get',
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('getting salt ok');
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
      setResult(json.salt);
    });
};

export default getSalt;
