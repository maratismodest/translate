import { gql } from '@apollo/client'

export const GET_ALL_WORDS = gql`
    query {
        getAllWords {
            id, rus, tat, eng, lat, audio
        }
    }    

`

export const GET_ONE_WORD = gql`
    query getWord($id: ID){
        getWord(id: $id) {
            id, rus, tat, eng, lat, audio
        }
    }    

`
