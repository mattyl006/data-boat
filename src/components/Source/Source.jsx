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
import { API } from '../../utils/globals';
import Menu from '../Menu';
import { useSelector, useDispatch } from 'react-redux';
import resetIco from '../../assets/reset.svg';
import zoomInIco from '../../assets/zoomIn.svg';
import zoomOutIco from '../../assets/zoomOut.svg';
import { findTableRow } from '../../redux/synchronizeSlice';

const Source = ({ images, imageBboxes }) => {
  const imagesLength = images?.length;
  const imageBboxesLength = imageBboxes?.length;
  const imagesRendered =
    imagesLength && imageBboxesLength && imagesLength === imageBboxesLength;
  const token = useSelector((state) => state.authorize.token);
  const twoScreens = useSelector((state) => state.synchronize.twoScreens);
  const dispatch = useDispatch();

  // const findTableRow = (bboxId) => {
  //   let findedItemId = null;
  //   tableRowIds.forEach((rowIds) => {
  //     rowIds.forEach((itemIds) => {
  //       if (itemIds.includes(bboxId)) {
  //         findedItemId = itemIds;
  //       }
  //     });
  //   });
  //   if (findedItemId) {
  //     if (selectedTableItem) {
  //       const element = document.getElementById(`bboxes-${selectedTableItem}`);
  //       if (element) {
  //         element.classList.remove('tableItemFocus');
  //       }
  //     }
  //     setSelectedTableItem(findedItemId);
  //     const element = document.getElementById(`bboxes-${findedItemId}`);
  //     if (element) {
  //       element.classList.add('tableItemFocus');
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // };

  const imagesRender = () => {
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
              return (
                <BboxStyle
                  key={id}
                  id={id}
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  bboxFocus={false}
                  onClick={() => dispatch(findTableRow(bbox.id))}
                >
                  <BboxTextStyle className='BboxTextStyle'>{text}</BboxTextStyle>
                </BboxStyle>
              );
            })}
            <SourceImg src={`${API}${image.url}?token=${token}`} alt="" />
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

  const icons = [
    { src: zoomInIco, handler: () => console.log('zoomIn'), disabled: true },
    { src: zoomOutIco, handler: () => console.log('zoomOut'), disabled: true },
    { src: resetIco, handler: () => console.log('reset'), disabled: true },
  ];

  return (
    <>
      {twoScreens && <Menu key="menu" icons={icons} />}
      <SourceStyle key="sourceStyle">
        {!twoScreens && <Menu key="menu" icons={icons} />}
        <SourceImagesContainerStyle>
          {imagesRender()}
          {sourceLoadingRender()}
        </SourceImagesContainerStyle>
      </SourceStyle>
    </>
  );
};

export default Source;
