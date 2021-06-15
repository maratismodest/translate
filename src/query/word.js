import { gql } from '@apollo/client'

export const GET_ALL_WORDS = gql`
    query {
        getAllWords {
            id, eng
        }
    }    

`

export const GET_ONE_WORD = gql`
    query getWord($id: ID){
        getWord(id: $id) {
            id, eng
        }
    }    

`
