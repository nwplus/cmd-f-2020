module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'yarn start'
    },
    // leaving assertions out until other problems are fixed
    // assert: {
    //   preset: 'lighthouse:recommended'
    // },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
