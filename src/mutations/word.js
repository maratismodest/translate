import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser($input: WordInput) {
        createWord(input: $input) {
            id, username, age
        }
    }
`
