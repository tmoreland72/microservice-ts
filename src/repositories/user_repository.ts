export {}
const Repository = require('./repository')
const FirestoreAdapter = require('../adapters/firestore_adapter')

type CreateUserProps = Record<string, unknown>
type CreateUserResponse = Record<string, unknown> | Error

const adapter = new FirestoreAdapter()

module.exports = class UserRepository extends Repository {
   constructor() {
      super()
   }

   createUser = (props: CreateUserProps): CreateUserResponse => {
      const result = adapter.createDoc(props)
      console.log('user_repository', 'createDoc', result)
      return result
   }
}
