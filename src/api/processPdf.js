import { API } from '../utils/globals';

// import { APIToken } from '../utils/globals';

const processPdf = (e, setResult, setFileName, APIToken) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('pdf_file', file);
  fetch(`${API}/process-pdf/?token=${APIToken}`, {
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
      setFileName(file.name);
    });
};

export default processPdf;
