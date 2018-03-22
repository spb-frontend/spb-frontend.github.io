const tr = require('transliteration')

const getPersonId = (name, lastname) => tr.slugify(`${name} ${lastname}`)

module.exports = {
  getPersonId,
}
