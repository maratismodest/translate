import { gql } from '@apollo/client'

export const CREATE_WORD = gql`
    mutation createUser($input: WordInput) {
        createWord(input: $input) {
            rus, tat, eng, lat, audio
        }
    }
`
