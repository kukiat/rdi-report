const pathFile = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allPartnersListJson {
        edges {
          node {
            path
            id
          }
        }
      }
    }
  `)

  return result.data.allPartnersListJson.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/partners/${node.id}`,
      component: pathFile.resolve('./src/components/partner/index.js'),
      context: {
        id: 'efb723cf-62ed-588d-958e-8552181a98bc',
      },
    })
    return Promise.resolve()
  })
}
