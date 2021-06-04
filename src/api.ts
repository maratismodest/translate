import axios from 'axios'
import { storage } from './firebaseSetup'

export async function getInfo () {
  try {
    const res = await axios.get('https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users.json')
    return res.data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export async function getWords () {
  try {
    const res = await axios.get('https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/words.json')
    return res.data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export async function getWordAudio (name: string) {
  try {
    const starsRef = storage.ref().child(`audio/words/${name}.mp3`)
    const url = await starsRef.getDownloadURL()
    return url
  } catch (error) {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break
      case 'storage/canceled':
        // User canceled the upload
        break

        // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break
    }
  }
}

export async function getPhraseAudio (name: string) {
  try {
    const starsRef = storage.ref().child(`audio/phrases/${name}.mp3`)
    const url = await starsRef.getDownloadURL()
    return url
  } catch (error) {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break
      case 'storage/canceled':
        // User canceled the upload
        break

        // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break
    }
  }
}

export async function getAudio (name: string) {
  try {
    const starsRef = storage.ref().child(`audio/words/${name}.mp3`)
    const url = await starsRef.getDownloadURL()
    console.log('url', url)
    return url
  } catch (error) {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break
      case 'storage/canceled':
        // User canceled the upload
        break

        // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break
    }
  }
}
