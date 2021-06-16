import { gql } from '@apollo/client'

export const GET_ALL_PHRASES = gql`
    query {
        getAllPhrases {
            id, rus, tat, eng, lat, audio
        }
    }    

`
