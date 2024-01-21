const hazel = require('./index')

const {
  INTERVAL: interval,
  ACCOUNT: 'DJMahirNationTV',
  REPOSITORY: 'updatetester',
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  VERCEL_URL
} = process.env

const url = VERCEL_URL || PRIVATE_BASE_URL

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
