import React from 'react';
import { FlexColumn } from '../../utils/containers';
import Menu from '../Menu';
import Loading from '../Loading';
import {
  SourceImg,
  SourceImgContainerStyle,
  SourceStyle,
  BboxStyle,
  BboxTextStyle,
} from './SourceStyles';

const Source = ({ imageUrls, imageBboxes }) => {
  const imageUrlsLength = imageUrls?.length;
  const imageBboxesLength = imageBboxes?.length;
  const imagesRendered =
    imageUrlsLength &&
    imageBboxesLength &&
    imageUrlsLength === imageBboxesLength;

  const imagesRender = () => {
    if (imagesRendered) {
      return imageUrls.map((url, i) => {
        return (
          <SourceImgContainerStyle key={`pdf-image-${i}`}>
            {imageBboxes[i].map((bbox, j) => {
              const x = bbox.x_center;
              const y = bbox.y_center;
              const width = bbox.width;
              const height = bbox.height;
              const text = bbox.text;

              return (
                <BboxStyle
                  key={`bbox-${i}-${j}`}
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  bboxFocus={false}
                >
                  <BboxTextStyle>{text}</BboxTextStyle>
                </BboxStyle>
              );
            })}
            <SourceImg src={`http://127.0.0.1:8000${url}`} alt="" />
          </SourceImgContainerStyle>
        );
      });
    }
  };

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
    <>
      <Menu key="menu" />
      <SourceStyle key="sourceStyle">
        {imagesRender()}
        {sourceLoadingRender()}
      </SourceStyle>
    </>
  );
};

export default Source;
