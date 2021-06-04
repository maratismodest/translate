import React, { useEffect, useState } from 'react'
import { getWords } from '../../api'
import { Topics } from './Topics'
import { Topic } from './Topics/Topic'
import { Button } from '../../ui/Button'
import { app } from '../../base'

export interface WordInterface {
  original: string;
  translate: string;
  sound: string;
  image: string;
}
export interface WordsInterface {
  word: WordInterface;
  setWordIndex: any;
  words: Array<WordInterface>;
  wordIndex: number;
}

export const CourseContext = React.createContext<any>({})
export const Course = () => {
  const [wordIndex, setWordIndex] = useState(0)

  const [words, setWords] = useState<WordInterface[] | []>([])
  const [word, setWord] = useState<WordInterface>()
  const topics: string[] = ['Местоимения', 'Семья']
  const [start, setStart] = useState<boolean>(false)

  const handleButton = () => {
    // Create a reference to the file we want to download
    const starsRef = app.storage().ref().child('images/мин.jpg')

    // Get the download URL
    starsRef
      .getDownloadURL()
      .then((url: any) => {
        console.log('url', url)
        // Insert url into an <img> tag to "download"
      })
      .catch((error) => {
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
      })
  }

  useEffect(() => {
    getWords().then((res) => {
      setWords(res)
      setWord(res[0])
    })
  }, [])

  useEffect(() => {
    console.log('start', start)
  }, [start])
  if (words.length < 1) {
    return <div>Loading...</div>
  }

  const context = {
    words,
    word,
    topics,
    setStart,
    setWord,
    wordIndex,
    setWordIndex
  }

  if (wordIndex === words.length) {
    return <div>Done!</div>
  }

  if (start) {
    return (
      <CourseContext.Provider value={context}>
        <Topic />
      </CourseContext.Provider>
    )
  }

  return (
    <CourseContext.Provider value={context}>
      <Topics />
      <Button onClick={handleButton}>test</Button>
    </CourseContext.Provider>
  )
}
