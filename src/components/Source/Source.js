import React from 'react';
import { FlexColumn } from '../../utils/containers';
import Loading from '../Loading';
import {
  SourceImg,
  SourceImgContainerStyle,
  SourceStyle,
  BboxStyle,
  BboxTextStyle,
} from './SourceStyles';
import { TEST_TARGET_ITEMS } from '../../utils/globals';
import { useDispatch } from 'react-redux';
import { addBbox } from '../../redux/bboxesSlice';
import { Svg } from '../../utils/containers';
import styled from 'styled-components';
import theme from '../../utils/theme';
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from 'react-zoom-pan-pinch';
import resetIco from '../../assets/reset.svg';
import zoomInIco from '../../assets/zoomIn.svg';
import zoomOutIco from '../../assets/zoomOut.svg';

const MenuStyle = styled(FlexColumn)`
  padding: 14px 0;
  justify-content: flex-start;
  background: linear-gradient(180deg, #2c95d8 0%, #18356d 91.15%);
  width: 60px;
  height: 100%;
  gap: 28px;
`;

const Menu = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <MenuStyle>
      <Svg
        src={zoomInIco}
        width="20px"
        height="20px"
        backgroundColor={theme.colors.white}
        onClick={() => zoomIn()}
      />
      <Svg
        src={zoomOutIco}
        width="20px"
        height="20px"
        backgroundColor={theme.colors.white}
        onClick={() => zoomOut()}
      />
      <Svg
        src={resetIco}
        width="20px"
        height="20px"
        backgroundColor={theme.colors.white}
        onClick={() => resetTransform()}
      />
    </MenuStyle>
  );
};

const Source = ({ images, imageBboxes }) => {
  const imagesLength = images?.length;
  const imageBboxesLength = imageBboxes?.length;
  const imagesRendered =
    imagesLength && imageBboxesLength && imagesLength === imageBboxesLength;

  const dispatch = useDispatch();

  const imagesRender = React.useCallback(() => {
    if (imagesRendered) {
      return images.map((image, i) => {
        const imageId = `pdf-image-${image.id}`;
        return (
          <SourceImgContainerStyle id={imageId} key={imageId}>
            {imageBboxes[i].map((bbox) => {
              const x = bbox.x_center;
              const y = bbox.y_center;
              const width = bbox.width;
              const height = bbox.height;
              const text = bbox.text;
              const id = `bbox-${bbox.id}`;

              TEST_TARGET_ITEMS.forEach((item, index) => {
                let a = '';
                let b = '';
                let c = '';
                let d = '';

                if (text.includes(item.a + ' ')) {
                  a = id;
                }
                if (text.includes(item.b)) {
                  b = id;
                }
                const itemD = item.d.replace('\n', '');
                if (itemD.includes(text)) {
                  console.log(itemD);
                  d = id;
                }
                if (a.length || b.length || d.length) {
                  dispatch(
                    addBbox({ index: index, row: { a: a, b: b, c: c, d: d } })
                  );
                }
              });

              return (
                <BboxStyle
                  key={id}
                  id={id}
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  bboxFocus={false}
                  onClick={() => console.log(text)}
                >
                  <BboxTextStyle>{text}</BboxTextStyle>
                </BboxStyle>
              );
            })}
            <SourceImg src={`http://127.0.0.1:8000${image.url}`} alt="" />
          </SourceImgContainerStyle>
        );
      });
    }
  }, [imageBboxes, images, imagesRendered, dispatch]);

  const sourceLoadingRender = () => {
    if (!imagesRendered) {
      return (
        <FlexColumn width="100%" height="100%">
          <Loading />
        </FlexColumn>
      );
    }
  };

  // overflow-y: scroll;
  // padding: 60px 85px 0;
  // width: 100%;
  // height: 100%;

  return (
    <SourceStyle key="sourceStyle">
      <TransformWrapper disabled>
        <Menu key="menu" />
        <TransformComponent
          wrapperStyle={{
            overflowY: 'scroll',
            padding: '60px 85px 0',
            width: '100%',
            height: '100%',
          }}
        >
          {/* <SourceImagesContainerStyle> */}
          {imagesRender()}
          {sourceLoadingRender()}
          {/* </SourceImagesContainerStyle> */}
        </TransformComponent>
      </TransformWrapper>
    </SourceStyle>
  );
};

export default Source;
