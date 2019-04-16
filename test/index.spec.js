const expect = require('chai').expect
const configureTermService = require('../src/termService')

const MOCK_RECORDS = [
  {
    id: 16296355,
    type: "r",
    count: 999,
    text: "Manchester"
  },
  {
    id: 16844357,
    type: "k",
    count: 999,
    text: "Manchester City Centre"
  }
]

const searchServiceMock = {
  invoke: term => {
    switch (term) {
      case "example": return ["16296355", "16844357"]
      default: throw new Error(`Unknown term, "${term}".`)
    }
  }
}

const detailsServiceMock = {
  invoke: ids => ids
    .map(Number)
    .map(id => MOCK_RECORDS.find(record => record.id === id))
}

describe('temrService tests', () => {
  it('given example', async () => {
    const termService = configureTermService(searchServiceMock, detailsServiceMock)
    const actual = await termService.getTerm('example')
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
