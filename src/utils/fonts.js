import styled from 'styled-components';
import { Container } from './containers';

const H1 = styled(Container)`
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-size: 44px;
    line-height: 48px;
  }
`;

const H2 = styled(H1)`
  font-size: 24px;
  line-height: 28px;
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const H3 = styled(H1)`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-size: 24px;
    line-height: 26px;
  }
`;

const Body = styled(Container)`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

const Medium = styled(Body)`
  font-weight: 400;
  @media (min-width: ${({ theme }) => theme.overMobile}) {
    font-weight: 500;
  }
`;

export { H1, H2, H3, Body, Medium };
