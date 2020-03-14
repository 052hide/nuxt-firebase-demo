import * as admin from 'firebase-admin'

admin.initializeApp()

const modules = {
  scraping: './modules/scraping'
}

const loadFunctions = (modules: { [key: string]: any }) => {
  Object.keys(modules).forEach((key) => {
    if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === key) {
      exports[key] = require(modules[key])
    }
  })
}

loadFunctions(modules)
