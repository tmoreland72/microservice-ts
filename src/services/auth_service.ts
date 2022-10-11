export {}
const Service = require('./service')
const UserModel = require('../models/user_model')
const UserRepository = require('../repositories/user_repository')

type CreateUserProps = Record<string, unknown>
type CreateUserResponse = Record<string, unknown> | Error

const model = new UserModel()
const repo = new UserRepository()

module.exports = class AuthService extends Service {
   constructor() {
      super()
   }

   createUser = (props: CreateUserProps): CreateUserResponse => {
      if (!model.create(props)) throw new Error('Malformed request')

      const result = repo.createUser(props)
      console.log('auth_service', 'createUser', result)

      // Publish success or failed user create to PubSub
      // pubsub.publish(message)
      return result
   }
}
