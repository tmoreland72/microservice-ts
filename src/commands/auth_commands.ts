export {}
const Commands = require('./commands')
const AuthService = require('../services/auth_service')

type CreateUserProps = Record<string, unknown>
type CreateUserResponse = Record<string, unknown>

const service = new AuthService()

module.exports = class AuthCommands extends Commands {
   constructor() {
      super()
   }

   createUser = (props: CreateUserProps): CreateUserResponse => {
      const result = service.createUser(props)
      console.log('auth_commands', 'createUser', result)
      return result
   }
}
