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
import { useSelector } from 'react-redux';

const Source = ({ images, imageBboxes }) => {
  const imagesLength = images?.length;
  const imageBboxesLength = imageBboxes?.length;
  const imagesRendered =
    imagesLength && imageBboxesLength && imagesLength === imageBboxesLength;
  const tableRowIds = useSelector((state) => state.rowIds.rowIds);
  const [selectedTableItem, setSelectedTableItem] = React.useState(null);

  const findTableRow = (bboxId) => {
    let findedItemId = null;
    tableRowIds.forEach((rowIds) => {
      rowIds.forEach((itemIds) => {
        if (itemIds.includes(bboxId)) {
          findedItemId = itemIds;
        }
      });
    });
    if (findedItemId) {
      if (selectedTableItem) {
        const element = document.getElementById(`bboxes-${selectedTableItem}`);
        element.classList.remove('tableItemFocus');
      }
      setSelectedTableItem(findedItemId);
      const element = document.getElementById(`bboxes-${findedItemId}`);
      element.classList.add('tableItemFocus');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                  onClick={() => findTableRow(bbox.id)}
                >
                  <BboxTextStyle>{text}</BboxTextStyle>
                </BboxStyle>
              );
            })}
            <SourceImg src={`${API}${image.url}`} alt="" />
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
