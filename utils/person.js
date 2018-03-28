const { slugify } = require('transliteration')

const getPersonId = (name, lastname) => slugify(`${name} ${lastname}`)

module.exports = {
  getPersonId,
}
