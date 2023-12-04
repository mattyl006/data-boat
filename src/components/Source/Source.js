import React from 'react';
import { FlexColumn } from '../../utils/containers';
import Loading from '../Loading';
import {
  SourceImg,
  SourceImgContainerStyle,
  SourceImagesContainerStyle,
  SourceStyle,
  BboxStyle,
  BboxTextStyle,
} from './SourceStyles';
import { TEST_TARGET_ITEMS } from '../../utils/globals';
import { useDispatch } from 'react-redux';
import { addBbox } from '../../redux/bboxesSlice';
import Menu from '../Menu';

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

  return (
    <SourceStyle key="sourceStyle">
      <Menu key="menu" />
      <SourceImagesContainerStyle>
        {imagesRender()}
        {sourceLoadingRender()}
      </SourceImagesContainerStyle>
    </SourceStyle>
  );
};

export default Source;
