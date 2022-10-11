const HttpController = require('./controllers/http_controller')
const BusController = require('./controllers/bus_controller')

const http = new HttpController()
const bus = new BusController()

/**
 * This is a dummy initiation of what would be a POST request
 * to a running Express server.
 */
const httpRequest = {
   method: 'POST',
   path: '/users',
   body: {
      name: 'Bob Smith',
      email: 'bob@smitty.com',
   },
}
/**
 * The combination of the method and path tells us the action
 * to be invoked.  POST /users binds to the HTTP Controller's
 * createUser method.
 */
http.createUser(httpRequest.body)

/**
 * This is a dummy initiation of what would be triggered
 * by a PubSub subscription.  A Cloud Function can only subscribe
 * to one topic so the request could be for any action handled by
 * this microservice.
 */
const busRequest = {
   action: 'createUser',
   request: {
      firstName: 'Bob',
      lastName: 'Watson',
      emailAddress: 'bob@watson.com',
   },
}
/**
 * The action value tells us the action to be invoked.  In this
 * case we need to execute the createUser method of the Bus Controller.
 */
bus.createUser(busRequest.request)
