const ELEMENTS_PER_PAGE = 12;
const MINI_DESCRIPTION_LENGTH = 70;
const API = '';

const MINI_DESCRIPTION_RENDER = (description) => {
  if (description) {
    if (description.length <= MINI_DESCRIPTION_LENGTH) return description;
    return `${description.slice(0, MINI_DESCRIPTION_LENGTH)}...`;
  }
  return 'xxx';
};

const CALC_PAGES = (objects) => {
  if (objects.length === 0) return 1;
  return Math.ceil(objects.length / ELEMENTS_PER_PAGE);
};

const IS_MOBILE = () => {
  return document.body.clientWidth <= 768;
};

export {
  ELEMENTS_PER_PAGE,
  API,
  MINI_DESCRIPTION_LENGTH,
  MINI_DESCRIPTION_RENDER,
  CALC_PAGES,
  IS_MOBILE,
};
