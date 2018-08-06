const moment = require('moment');

const getHumanDate = dateAsText => {
  const dateToConvert = moment(dateAsText).locale('ru');
  const format = dateToConvert.isBefore(moment().startOf('year'))
    ? 'D MMM YYYY'
    : 'D MMM';

  return dateToConvert.format(format);
};
const getMeetupPath = dateAsText => moment(dateAsText).format('YYYY-MM-DD');
// LOL
module.exports = {
  getHumanDate,
  getMeetupPath,
};
