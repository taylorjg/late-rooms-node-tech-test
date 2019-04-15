const configureService = (searchService, detailsService) => {

  const getTerm = term => {
    const ids = searchService.invoke(term)
    const details = ids.map(id => detailsService.invoke(Number(id)))
    const formattedDetails = details.map(formatDetails)
    return formattedDetails
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

module.exports = configureService
