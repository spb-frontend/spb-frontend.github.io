exports.createPages = async gatsby => {
  await require('./podcast')(gatsby);
  await require('./person')(gatsby);
  return Promise.resolve();
};
