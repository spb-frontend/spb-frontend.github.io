const moment = require('moment');

const getMeetupPath = dateAsText => moment(dateAsText).format('YYYY-MM-DD');

module.exports = {
  getMeetupPath,
};
