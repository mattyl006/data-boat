import React from 'react';
import { FlexColumn } from '../utils/containers';
import { H1 } from '../utils/fonts';
import { Link } from 'react-router-dom';

const NextPage = () => {
  const [name, setName] = React.useState('');

  const onStorageUpdate = (e) => {
    const { key, newValue } = e;
    if (key === 'name') {
      setName(newValue);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
  };

  React.useEffect(() => {
    setName(localStorage.getItem('name') || '');
    window.addEventListener('storage', onStorageUpdate);
    return () => {
      window.removeEventListener('storage', onStorageUpdate);
    };
  }, []);

  return (
    <FlexColumn width="100%" height="calc(100vh - 48px)">
      <H1>NextPage</H1>
      <Link to="/">StartPage</Link>
      <input value={name} onChange={handleChange} />
    </FlexColumn>
  );
};

export default NextPage;
