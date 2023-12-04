import styled from 'styled-components';
import { Container, FlexColumn, FlexRow } from '../../utils/containers';

const SourceStyle = styled(FlexRow)`
  width: 50%;
  justify-content: flex-start;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const SourceImagesContainerStyle = styled(FlexColumn)`
  overflow: scroll;
  padding: 60px 85px 0;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

const SourceImg = styled.img`
  width: 100%;
`;

const SourceImgContainerStyle = styled(Container)`
  width: 100%;
  margin: 0 0 40px 0;
  position: relative;
`;

const BboxTextStyle = styled(Container)`
  font-size: calc(1em - 2px);
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 100px);
`;

const BboxStyle = styled(Container)`
  position: absolute;
  background-color: transparent;
  width: 100%;
  color: transparent;
  width: ${({ width }) => `calc(100% * ${width} + 4px)`};
  height: ${({ height }) => `calc(100% * ${height} + 4px)`};
  top: ${({ y, height }) =>
    `calc((100% * ${y}) - (100% * ${height} / 2) - 2px)`};
  left: ${({ x, width }) =>
    `calc((100% * ${x}) - (100% * ${width} / 2) - 4px)`};
  z-index: 3;

  &:hover {
    border: 1px solid rgba(0, 208, 132, 1);
  }
`;

export {
  SourceStyle,
  SourceImg,
  SourceImgContainerStyle,
  BboxStyle,
  BboxTextStyle,
  SourceImagesContainerStyle,
};
