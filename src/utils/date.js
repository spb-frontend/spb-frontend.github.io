import moment from 'moment'

export const getHumanDate = dateAsText => {
  const dateToConvert = moment(dateAsText).lang('ru')
  const format = dateToConvert.isBefore(moment().startOf('year'))
    ? 'D MMM YYYY'
    : 'D MMM'

  return dateToConvert.format(format)
}
