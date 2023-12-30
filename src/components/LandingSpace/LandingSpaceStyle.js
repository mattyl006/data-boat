import styled from 'styled-components';
import { Container } from '../../utils/containers';

const LandingSpaceStyle = styled(Container)`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #2c95d8 0%, #18356d 91.15%);
  padding: 156px 180px 136px 60px;

.LandingSpace__document-input {
gap: 20px;
padding: 6px 12px;
position: relative;
justify-content: flex-start;
cursor: pointer;
width: 300px;

&:hover {
  background-color: rgba(83, 82, 106, 1);
}

* {
  cursor: pointer;
}
}

.LandingSpace__input-label {
font-size: 24px;
font-weight: 400;
color: #fff;
}

.LandingSpace__login {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
}

input {
opacity: 0;
position: absolute;
top: 0;
left: 0;
}
input.login-form__input {
    opacity: 1;
    position: relative;
    top: 0;
    left: 0;
    margin-right: 16px;
    margin-left: 16px;
}
`;

export default LandingSpaceStyle;
