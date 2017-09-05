import moment from 'moment'

const getHumanDate = dateAsText => {
  const dateToConvert = moment(dateAsText)
  const format = dateToConvert.isBefore(moment().startOf('year')) ? 'D MMM YYYY' : 'D MMM'

  return dateToConvert.format(format)
}

export {getHumanDate}
