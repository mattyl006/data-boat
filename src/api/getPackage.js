import { API } from '../utils/globals';

const getPackage = (page, setResult) => {
  fetch(`${API}/paging/${page}`, {
    method: 'post',
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('paging data ok');
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

export default getPackage;
