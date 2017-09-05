import moment from 'moment'

const getHumanDate = dateAsText => {
  return moment(dateAsText).format('D MMM')
}

export {getHumanDate}
