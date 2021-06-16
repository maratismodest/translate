import { gql } from '@apollo/client'

export const CREATE_PHRASE = gql`
    mutation createPhrase($input: PhraseInput) {
        createPhrase(input: $input) {
            rus, tat, eng, lat, audio
        }
    }
`
