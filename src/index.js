const express = require('express')
const app = express()
const configureApi = require('./api')

const PORT = process.env.PORT || 3010

const searchEndpoint = { /* TODO */ }
const detailsEndpoint = { /* TODO */ }
app.use(configureApi(searchEndpoint, detailsEndpoint))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
