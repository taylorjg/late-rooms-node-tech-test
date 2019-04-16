const configureTermService = (searchService, detailsService) => {

  const getTerm = async term => {
    const ids = await searchService.invoke(term)
    const details = await detailsService.invoke(ids)
    return details.map(formatDetails)
  }

  return {
    getTerm
  }
}

const formatDetails = ({ id, type, text }) => ({
  id: String(id),
  url: makeUrl(type, id, text),
  text
})

const makeUrl = (type, id, text) =>
  `${type}${id}_${cleanText(text)}`

const cleanText = text =>
  text.toLowerCase().replace(/[^\w]/g, '-')

module.exports = configureTermService
