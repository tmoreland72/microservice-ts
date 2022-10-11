export {}
const Controller = require('./controller')
const AuthCommands = require('../commands/auth_commands')

type CreateUserProps = Record<string, unknown>
type CreateUserResponse = Record<string, unknown>

const authCommands = new AuthCommands()

module.exports = class HttpController extends Controller {
   constructor() {
      super()
   }

   createUser = (props: CreateUserProps): CreateUserResponse => {
      const { name, email } = props
      const payload = { name, email }
      const result = authCommands.createUser(payload)
      console.log('http_controller', 'createUser', result)
      return result
   }
}
