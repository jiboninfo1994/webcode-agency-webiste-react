export const excerpt = (text, length) => {
  let description = '';
  if (text) {
    description = text.substr(0, length) + '...';
  }

  return description;
};
