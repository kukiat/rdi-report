const pathFile = require('path')
const partners = require('./src/static/data/partnersList.json')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  for (let partner of partners) {
    createPage({
      path: `/partners/${partner.partnerId}`,
      component: pathFile.resolve(`src/pages/partner/index.js`),
      context: {
        id: partner.partnerId,
      },
    })
  }
}
