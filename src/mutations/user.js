import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser($input: UserInputCreate) {
        createUser(input: $input) {
            uid, count, correct, mistake, avatar
        }
    }
`
export const UPDATE_USER = gql`
    mutation updateUser($input: UserInput) {
        updateUser(input: $input) {
             id, uid, count, correct, mistake, avatar
        }
    }
`

// mutation updatePost($patch: UpdatePostInput!) {
//   updatePost(input: $patch) {
//     post {
//       postID
//       title
//       text
//     }
//   }
// }

// export const CREATE_USER = gql`
//     mutation createUser($input: UserInput) {
//         createUser(input: $input) {
//             id, username, age
//         }
//     }
// `
