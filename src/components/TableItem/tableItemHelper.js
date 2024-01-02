const onItemBlur = (selectedBboxes, setScrollPage) => {
  if (selectedBboxes?.length) {
    selectedBboxes.forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.classList.remove('bboxFocus');
    });
  }
  setScrollPage(0);
};

const onItemFocus = (itemValue, setSelectedBboxes) => {
  const newSelectedBboxes = [];
  itemValue?.forEach((bbox) => {
    const id = `bbox-${bbox.id}`;
    newSelectedBboxes.push(id);
    const element = document.getElementById(id);
    if (element) element.classList.add('bboxFocus');
  });
  setSelectedBboxes(newSelectedBboxes);
};

const onItemClick = (itemValue, scrollPage, setScrollPage) => {
  if (itemValue) {
    const pages = [
      ...new Set(
        itemValue?.map((bbox) => 'pdf-image-' + bbox.id?.split('_')[0])
      ),
    ];
    let pageId = pages[scrollPage];
    const element = document.getElementById(pageId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (scrollPage < pages.length - 1) {
        setScrollPage(scrollPage + 1);
      } else setScrollPage(0);
    }
  }
};

export { onItemBlur, onItemFocus, onItemClick };
