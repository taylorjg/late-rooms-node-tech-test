const expect = require('chai').expect
const configureSearchService = require('../src/searchService')
const configureDetailsService = require('../src/detailsService')

const BASE_URL = 'http://lr-node-kata.herokuapp.com'

describe('integration tests', () => {

  describe('searchService tests', () => {

    const searchService = configureSearchService(BASE_URL)

    it('basic invoke test', async () => {
      const term = 'example'
      const actual = await searchService.invoke(term)
      expect(actual).to.have.length(5)
    })
  })

  describe('detailsService tests', () => {

    const detailsService = configureDetailsService(BASE_URL)

    it('basic invoke test', async () => {
      const ids = ['12815136', '13650991', '16844357', '16296371', '16837690']
      const actual = await detailsService.invoke(ids)
      expect(actual).to.have.length(5)
    })
  })
})
