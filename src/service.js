const configureService = (searchService, detailsService) => {

  const getTerm = async term => {
    const ids = await searchService.invoke(term)
    const promises = ids.map(id => detailsService.invoke(Number(id)))
    const details = await Promise.all(promises)
    const flattenedDetails = flatten(details)
    const formattedDetails = flattenedDetails.map(formatDetails)
    return formattedDetails
  }

  return {
    getTerm
  }
}

const flatten = xss => [].concat(...xss)

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
