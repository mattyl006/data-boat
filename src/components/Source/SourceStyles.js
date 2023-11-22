import styled from 'styled-components';
import { Container, FlexColumn } from '../../utils/containers';

const SourceStyle = styled(FlexColumn)`
  width: 50%;
  padding: 60px 85px 0;
  height: 100%;
  overflow-y: scroll;
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
  border: ${({ bboxFocus }) =>
    bboxFocus ? 'border: 1px solid rgba(0, 208, 132, 1)' : 'none'};

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
};
