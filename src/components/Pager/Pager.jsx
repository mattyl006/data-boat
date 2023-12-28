import React from 'react';
import { FlexRow, Svg } from '../../utils/containers';
import theme from '../../utils/theme';
import arrow from '../../assets/arrow.svg';
import { Medium } from '../../utils/fonts';
import { useDispatch, useSelector } from 'react-redux';
import { decreasePage, increasePage } from '../../redux/packagesSlice';

const Pager = () => {
  const packages = useSelector((state) => state.packages.packages);
  const page = useSelector((state) => state.packages.page);
  const dispatch = useDispatch();

  if (packages) {
    return (
      <FlexRow margin="auto 0 0 0" gap="6px">
        <Svg
          src={arrow}
          backgroundColor={theme.colors.white}
          rotate="180deg"
          size="cover"
          width="10px"
          height="10px"
          cursor="pointer"
          onClick={() => dispatch(decreasePage())}
        />
        <Medium>{page}</Medium>
        <Svg
          src={arrow}
          backgroundColor={theme.colors.white}
          size="cover"
          width="10px"
          height="10px"
          cursor="pointer"
          onClick={() => dispatch(increasePage())}
        />
      </FlexRow>
    );
  }
};

export default Pager;
