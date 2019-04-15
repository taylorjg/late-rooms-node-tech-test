const expect = require('chai').expect
const configureService = require('../src/service')

describe('service tests', () => {

  // TODO: add tests:
  // - invalid term
  //  - too short
  //  - non-alphanumerics
  // - error handling
  //  - searchEndpoint causes an error
  //  - detailsEndpoint causes an error
  //  - detailsEndpoint fails to lookup id

  it('given example', async () => {
    const searchService = {
      invoke: term => {
        switch (term) {
          case "example": return ["16296355", "16844357"]
          default: throw new Error(`Unknown term, "${term}".`)
        }
      }
    }
    const detailsService = {
      invoke: id => {
        switch (id) {
          case 16296355: return {
            "id": 16296355,
            "type": "r",
            "count": 999,
            "text": "Manchester"
          }

          case 16844357: return {
            "id": 16844357,
            "type": "k",
            "count": 999,
            "text": "Manchester City Centre"
          }

          default: throw new Error(`Unknown id, "${id}".`)
        }
      }
    }
    const service = configureService(searchService, detailsService)
    const actual = await service.getTerm('example')
    const expected =
      [{
        id: "16296355",
        url: "r16296355_manchester",
        text: "Manchester"
      },
      {
        id: "16844357",
        url: "k16844357_manchester-city-centre",
        text: "Manchester City Centre"
      }]
    expect(actual).to.deep.equal(expected)
  })
})
