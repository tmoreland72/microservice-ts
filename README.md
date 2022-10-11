# Flow

## Controller

Inbound requests are handled by controllers.  This project demonstrates having an HTTP and event bus controller.  This would be necessary when an action can be triggered from multiple sources.  For example, we can provide an HTTP endpoint for `POST /users` and expect a message from the event bus that contains a `createUser` action.  Both of these requests have the same requirements for creating a user but they are unique in how they format their request.

Once the action is identified, the Controller must then normalize the request and then call the appropriate Command with the normalized request parameters.

### HttpController

Normally an HTTP Controller would be implemented using an Express.js instance.  The different methods and paths would tell the Controller what action is to be performed.

### BusController

The Bus Controller (short for Event Bus) is used when the microservice is subscribed to a topic on the event bus.  The message should have instructions that tell the Controller what action is to be performed.

## Commands

Commands prepare operations that are going to make changes to the current state.  Normally this would only include create, update, and delete operations; however, it is fine to include query operations here as we are not strictly enforcing the CQRS pattern.

### AuthCommands

This project implements a fraction of what could be a microservice for authentication and authorization.  For brevity sake we are only implementing some actions against `User` entities which would be required for someone to authenticate to our application.

## Service

A Service implements the business logic for a domain.  From our perspective that simply means it orchestrates the validation, execution, and notifications for the operations requested.

### AuthService

First, the AuthService will validate the structure of a request.  For example, the object passed in to create a new user is checked for required and properly formatted fields.

Secondly, the AuthService submits the request to the appropriate Respository.

Once the Repository responds, the AuthService is responsible for publishing message to the event bus to inform other microservices.

## Model

A Model defines the schema of an entity or an abstract that combines multiple other models.  This implementation of a Model is similar to using DTO's because they are validating the request is properly formatted.

A Model will return a boolean to inform the calling Service if the request is properly formatted.

### User Model

Previously we used the "Auth" prefix for our implementation.  Once we got to the Model definitions it made sense to break out the User Model because that is the construct that would be passed to the downstream Repository and later the persisted layer.  In the User Model we are performing validation of the user object using a JSON schema validation library.

## Repository

Repositories transforms requests to the requirements of the database or other persistent layer.  For example, writing to a relational database would require an SQL statement to be formed, whereas a document database has a specific object structure including collection and document requirements.

### UserRepository

The UserRepository will provide methods to transform our normalized requests into the format required by the database where we store users.  This project mocks the use of Cloud Firestore.

## Adapter

An Adapter communicates with the external services.  Each external service involved in the actions of this microservice will require a one-to-one mapping of an Adapter.  Typically this is where SDK's or RESTful API's would be implemented.

### FirestoreAdapter

As mentioned previously, this project implements a "mock" Firestore instance so we implement a FirestoreAdapter to interface with our fake database.