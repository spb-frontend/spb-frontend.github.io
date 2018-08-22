exports.createPages = async gatsby => {
  await require('./podcast')(gatsby);
  await require('./persons')(gatsby);
  await require('./meetups')(gatsby);
  await require('./talks')(gatsby);
  // eslint-disable-next-line
  return Promise.resolve();
};
