const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

const BASE_URL = 'http://lr-node-kata.herokuapp.com'

describe('integration tests', function () {

  // Increase the 'slow' config setting because these tests hit real endpoints.
  this.slow(500)

  // Increase the 'timeout' config setting because the endpoints live on the
  // free Heroku tier and we may have to wait for them to spin up.
  this.timeout(15 * 1000)

  describe('searchService tests', () => {

    const configureSearchService = require('../src/searchService')
    const searchService = configureSearchService(BASE_URL)

    it('basic invoke test', async function () {
      const term = 'example'
      const actual = await searchService.invoke(term)
      expect(actual).to.have.length(5)
    })
  })

  describe('detailsService tests', () => {

    const configureDetailsService = require('../src/detailsService')
    const detailsService = configureDetailsService(BASE_URL)

    it('basic invoke test', async function () {
      const ids = ['12815136', '13650991', '16844357', '16296371', '16837690']
      const actual = await detailsService.invoke(ids)
      expect(actual).to.have.length(5)
    })
  })

  describe('termService tests', () => {
    const app = require('../src/app')
    it('basic test', async function () {
      const res = await chai.request(app).get('/example')
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(5)
    })
  })
})
