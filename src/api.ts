import axios from 'axios'

export async function getUsers () {
  try {
    const res = await axios.get('https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users.json')
    return res.data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

// export async function getHerokuWords () {
//   try {
//     const res = await axios.get('https://chamala.herokuapp.com/api/word')
//     return res.data
//   } catch (error) {
//     console.log(error)
//     throw new Error(error)
//   }
// }
//
// export async function getHerokuPhrases () {
//   try {
//     const res = await axios.get('https://chamala.herokuapp.com/api/phrase')
//     return res.data
//   } catch (error) {
//     console.log(error)
//     throw new Error(error)
//   }
// }
