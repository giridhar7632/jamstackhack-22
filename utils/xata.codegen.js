import { buildClient } from '@xata.io/client'
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = []
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient()
const defaultOptions = {
  databaseURL: process.env.XATA_DB_URL,
}
/** @extends DatabaseClient<SchemaTables> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables)
  }
}
let instance = undefined
export const getXataClient = () => {
  if (instance) return instance
  instance = new XataClient()
  return instance
}
