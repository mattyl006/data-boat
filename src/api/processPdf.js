import { API } from '../utils/globals';

const processPdf = (e, setResult) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('pdf_file', file);
  console.log(formData);
  fetch(`${API}/process-pdf/`, {
    method: 'post',
    body: formData,
  })
    .then(
      (res) => {
        if (res.ok) {
          console.log('sending pdf ok');
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

export default processPdf;
