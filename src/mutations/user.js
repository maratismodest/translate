import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser($input: UserInput) {
        createUser(input: $input) {
            uid, count, correct, mistake, avatar
        }
    }
`
export const UPDATE_USER = gql`
    mutation updateUser($uid: String, $input: UserInput) {
        updateUser(uid: $uid, input: $input) {
            uid, input
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
