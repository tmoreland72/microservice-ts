export {}
const { validate } = require('jsonschema')
const Model = require('./model')

type CreateProps = Record<string, unknown>
type CreateResponse = boolean

module.exports = class UserModel extends Model {
   constructor() {
      super()
   }

   create(props: CreateProps): CreateResponse {
      const schema = {
         $id: 'http://yunibas.app/schema/logs.schema.json',
         $schema: 'http://json-schema.org/draft-07/schema#',
         type: 'object',
         properties: {
            name: { type: 'string' },
            email: { type: 'string' },
         },
         required: ['name', 'email'],
      }
      const result = validate(props, schema)
      return result.valid
   }
}
