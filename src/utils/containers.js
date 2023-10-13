import styled from 'styled-components';

const Container = styled.div`
  position: ${({ position }) => (position ? position : 'static')};
  top: ${({ top }) => (top ? top : 'auto')};
  left: ${({ left }) => (left ? left : 'auto')};
  right: ${({ right }) => (right ? right : 'auto')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'transparent'};
  color: ${({ theme, color }) => (color ? color : theme.colors.dark)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0')};
  box-shadow: ${({ shadow }) => (shadow ? shadow : 'none')};
  border: ${({ border }) => (border ? border : 'none')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
  display: ${({ display }) => (display ? display : 'block')};
  text-decoration: ${({ textDecoration }) =>
    textDecoration ? textDecoration : 'none'};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : 'none'};
  opacity: ${({ opacity }) => (opacity ? opacity : '1')};
  transform: translate(
    ${({ translateX }) => (translateX ? translateX : 0)},
    ${({ translateY }) => (translateY ? translateY : 0)}
  );
  order: ${({ order }) => (order ? order : '0')};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : '0')};
`;

const FlexRow = styled(Container)`
  display: ${({ display }) => (display ? display : 'flex')};
  justify-content: ${({ alignmentX }) => (alignmentX ? alignmentX : 'center')};
  align-items: ${({ alignmentY }) => (alignmentY ? alignmentY : 'center')};
  gap: ${({ gap }) => (gap ? gap : '0')};
`;

const FlexColumn = styled(FlexRow)`
  flex-direction: column;
  justify-content: ${({ alignmentY }) => (alignmentY ? alignmentY : 'center')};
  align-items: ${({ alignmentX }) => (alignmentX ? alignmentX : 'center')};
  gap: ${({ gap }) => (gap ? gap : '0')};
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns ? gridTemplateColumns : 'auto'};
  grid-template-rows: ${({ gridTemplateRows }) =>
    gridTemplateRows ? gridTemplateRows : 'auto'};
  grid-gap: ${({ gridGap }) => (gridGap ? gridGap : '0')};
`;

const Svg = styled(Container)`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.dark};
  -webkit-mask: url(${({ src }) => src}) no-repeat center;
  mask: url(${({ src }) => src}) no-repeat center;
  width: ${({ width }) => (width ? width : '16px')};
  height: ${({ height }) => (height ? height : '16px')};
  transform: rotate(${({ rotate }) => (rotate ? rotate : '0')});
  mask-size: ${({ size }) => (size ? size : 'auto')};
`;

const TransBack = styled(FlexRow)`
  position: fixed;
  width: 100%;
  height: 100vh;
  transition: ${({ transition }) => (transition ? transition : 'opacity')}
    ${({ animTime }) => (animTime ? animTime : '0.3s')} ease-in-out;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'transparent'};
`;

const ImageBackground = styled(FlexColumn)`
  background-size: ${({ size }) => (size ? size : 'cover')};
  background-position: center;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
`;

export {
  Container,
  FlexRow,
  FlexColumn,
  Grid,
  Svg,
  TransBack,
  ImageBackground,
};
