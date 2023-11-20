import React from 'react';
import { Container, FlexRow, Svg } from '../utils/containers';
import { H1 } from '../utils/fonts';
import styled from 'styled-components';
import theme from '../utils/theme';
import shipImage from '../assets/ship.png';
import fileImage from '../assets/file.png';

const StartPageStyle = styled(Container)`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #2c95d8 0%, #18356d 91.15%);
  padding: 156px 180px 136px 60px;

  .StartPage__document-input {
    gap: 20px;
    padding: 6px 12px;
    position: relative;
    justify-content: flex-start;
    cursor: pointer;

    * {
      cursor: pointer;
    }
  }

  label {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StartPage = () => {
  // const [name, setName] = React.useState('');

  // const onStorageUpdate = (e) => {
  //   const { key, newValue } = e;
  //   if (key === 'name') {
  //     setName(newValue);
  //   }
  // };

  // const handleChange = (e) => {
  //   setName(e.target.value);
  //   localStorage.setItem('name', e.target.value);
  // };

  // React.useEffect(() => {
  //   setName(localStorage.getItem('name') || '');
  //   window.addEventListener('storage', onStorageUpdate);
  //   return () => {
  //     window.removeEventListener('storage', onStorageUpdate);
  //   };
  // }, []);

  const id = 'documentInput';

  return (
    <StartPageStyle>
      <H1 margin="0 0 20px 0" color={theme.colors.white}>
        Widok i edycja dokumentu PDF
      </H1>
      <FlexRow className="StartPage__document-input">
        <Svg
          backgroundColor={theme.colors.white}
          src={fileImage}
          width="40px"
          height="40px"
        />
        <label htmlFor={id}>Otwórz dokument</label>
        <input id={id} name={id} type="file" accept="application/pdf" />
      </FlexRow>
      <Svg
        backgroundColor={theme.colors.white}
        src={shipImage}
        width="500px"
        height="490px"
        margin="0 0 0 auto"
      />
      {/* <Link to="/next-page">NextPage</Link> */}
      {/* <input value={name} onChange={handleChange} /> */}
    </StartPageStyle>
  );
};

export default StartPage;
