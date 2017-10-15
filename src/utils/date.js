import moment from 'moment'

export const getHumanDate = dateAsText => {
  const dateToConvert = moment(dateAsText).locale('ru')
  const format = dateToConvert.isBefore(moment().startOf('year'))
    ? 'D MMM YYYY'
    : 'D MMM'

  return dateToConvert.format(format)
}
