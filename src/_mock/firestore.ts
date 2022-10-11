const short = require('short-uuid')

type GetDocsProps = {
   collection: string
   where?: Array<Array<string | number>>
   orderBy?: Array<Array<string | number>>
   limit?: number
}
type GetDocsResponse = Array<Record<string, unknown>>

type GetDocProps = {
   collection: string
   id: string | number
}
type GetDocResponse = Record<string, unknown> | undefined

type CreateDocProps = {
   collection: string
   doc: Record<string, unknown>
}
type CreateDocResponse = Record<string, unknown> | string | number | boolean

type UpdateDocProps = {
   collection: string
   id: string | number
   updates: Record<string, unknown>
}
type UpdateDocResponse = Record<string, unknown> | boolean

type DeleteDocProps = {
   collection: string
   id: string | number
}
type DeleteDocResponse = boolean

const users = [
   { id: 1, name: 'Sam Perkins' },
   { id: 2, name: 'Thomas Silvey' },
]

module.exports = {
   getDocs(props: GetDocsProps): GetDocsResponse {
      console.log('firestore', 'getDocs', props)
      return users
   },

   getDoc(props: GetDocProps): GetDocResponse {
      console.log('firestore', 'getDoc', props)
      return users.find((f) => f.id === props.id)
   },

   createDoc(props: CreateDocProps): CreateDocResponse {
      console.log('firestore', 'createDoc', props)
      return { id: short.generate(), ...props }
   },

   updateDoc(props: UpdateDocProps): UpdateDocResponse {
      console.log('firestore', 'updateDoc', props)
      return true
   },

   deleteDoc(props: DeleteDocProps): DeleteDocResponse {
      console.log('firestore', 'deleteDoc', props)
      return true
   },
}
