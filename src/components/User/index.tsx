import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../../ui/Header'
import Text from '../../ui/Text'
import { Modal } from 'antd'
import { initialState } from '../../localBase/base'
import i18n from 'i18next'
import AppContext from '../../AppContext'
import Tukai from './../../assets/tukai.png'
import { getUsers } from '../../api'
import { Button } from '../../ui/Button'
import { StyledBody } from '../../AppStyles'
import { auth, storage } from '../../firebaseSetup'
import classes from './User.module.scss'
import { resizeImageFn } from './apiUser'
import firebase from 'firebase'
import { AuthContext } from '../../context/AuthContext'

const User = () => {
  const user = useContext(AuthContext)
  const { setState } = useContext(AppContext)
  const [stats, setStats] = useState(true)
  const storageRef = storage.ref()
  const [users, setUsers] = useState<any>()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const history = useHistory()

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res)
    })
  }, [])
  if (!user || !users) {
    return null
  }
  const currentUser = users[user.uid]

  if (!currentUser) {
    const updated = {
      count: 0,
      correct: 0,
      mistake: 0,
      avatar: 'https://chamala.ru/static/media/tukai.361b9ae4.png',
      id: user.uid
    }
    firebase.database().ref('base/users/' + user.uid).set(updated).then(r => {
      console.log('r', r)
      window.location.reload()
    })
    return null
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const onFileChange = async (e: any) => {
    const res = await resizeImageFn(e.target.files[0])
    console.log(res)
    const file = e.target.files[0]
    const fileRef = storageRef.child(file.name)
    await fileRef.put(res)
    const link = await fileRef.getDownloadURL()
    console.log('link', link)
    // updatePhoto(link).then((res) => {
    //   setFileUrl(link)
    //   window.location.reload()
    // })
  }

  const handleClick = () => {
    const upload = document.getElementById('upload')
    console.log(upload)
    if (upload) {
      upload.click()
    }
  }
  // const addCount = () => {
  //   console.log('addCount')
  //   console.log(currentUser.count)
  //   firebase.database().ref('base/users/' + user.uid).set({ ...currentUser, count: currentUser.count + 1 }).then(r => {
  //     console.log('r', r)
  //   })
  // }

  return (
    <>
      <StyledBody>
        {/* <Button onClick={addCount}>addCount</Button> */}
        <div>
          <div className={classes.avatar} onClick={handleClick}>
            {currentUser.avatar
              ? (
              <img src={currentUser.avatar} width={115} height={115} />
                )
              : (
              <div>Нет изображения</div>
                )}
          </div>

          <Header level={2}>{user.displayName}</Header>
          <input id="upload" type="file" onChange={onFileChange} hidden />
        </div>

        <div className={classes.buttons}>
          <Button
            onClick={() => {
              setStats((prevState) => !prevState)
            }}
          >
            Статистика
          </Button>
          <Button onClick={showModal}>Настройки</Button>
          <div className={classes.stats} style={{ visibility: stats ? 'visible' : 'hidden' }}>
            <Text huge> Количество игр: {currentUser.count}</Text>
            <Text huge>Количество правильных ответов:{currentUser.correct} </Text>
            <Text huge>Количество неправильных ответов:{currentUser.mistake} </Text>
          </div>
        </div>

        <Link
          to={'/'}
          onClick={() => {
            setState({
              ...initialState,
              gameState: 'welcome'
            })
          }}
        >
          <Text underline large>
            {i18n.t('mainPage')}
          </Text>
        </Link>
      </StyledBody>
      <Modal
        title="Ваш уровень"
        visible={isModalVisible}
        footer={null}
        centered
        onCancel={() => { setIsModalVisible(false) }}
      >
        <img src={Tukai} width={'100%'} />
        <div style={{ display: 'inline-grid' }}>
          <Text huge>Тукай одобряет!</Text>
          <Text huge>Ваш уровень: {currentUser.level}</Text>
        </div>
        <Button
          small
          onClick={() => {
            auth.signOut()
            history.push('/')
            setIsModalVisible(false)
          }}
        >
          Выйти
        </Button>
      </Modal>
    </>
  )
}
export default User

// async function updatePhoto (link: string) {
//   try {
//     const current = users[user?.uid]
//
//     const res = await axios.put(
//       `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${user.uid}.json`,
//       { ...current, avatar: link }
//     )
//     return res
//   } catch (error) {
//     console.log(error)
//   }
// }
