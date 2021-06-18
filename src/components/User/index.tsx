import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Header, Text, Button } from 'ui'
import { Modal } from 'antd'
import { InitialStateInterface } from '../../localBase/interfaces'
import i18n from 'i18next'
import AppContext from '../../context/AppContext'
import Tukai from '../../assets/tukai.png'
import { StyledBody } from 'App'
import { auth, storage } from '../../firebase/firebaseSetup'
import classes from './User.module.scss'
import { resizeImageFn } from './apiUser'
import { AuthContext } from '../../context/AuthContext'
import _ from 'lodash'
import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../graphql/query/user'
import { CREATE_USER, UPDATE_USER } from '../../graphql/mutations/user'

const User = () => {
  const user = useContext(AuthContext)
  if (!user || !user.uid) {
    return (
      <div>Авторизуйтесь!</div>
    )
  }
  const { loading, data } = useQuery(GET_ALL_USERS)
  const { setState } = useContext(AppContext)
  const [stats, setStats] = useState(true)
  const storageRef = storage.ref()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const history = useHistory()
  const [createUser] = useMutation(CREATE_USER)
  const [updateUser] = useMutation(UPDATE_USER)

  if (loading && !data) {
    return (
      <div>Загрузка...</div>
    )
  }

  const users = data.getAllUsers
  // console.log('user', user)
  // console.log('users', users)

  const currentUser = _.find(users, { uid: user.uid })

  async function createUserNow (uid: string) {
    createUser({
      variables: {
        input: {
          count: 0,
          correct: 0,
          mistake: 0,
          avatar: 'https://chamala.ru/static/media/tukai.361b9ae4.png',
          uid: uid
        }
      }
    }).then((res) => {
      // console.log(new Date())
    })
  }
  if (user && !currentUser) {
    setState(() => {
      createUserNow(user.uid).then((res) => {
        window.location.reload()
      })
    })
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const onFileChange = async (e: any) => {
    const res = await resizeImageFn(e.target.files[0])
    // console.log(res)
    const file = e.target.files[0]
    const fileRef = storageRef.child(file.name)
    await fileRef.put(res)
    const link = await fileRef.getDownloadURL()

    const current = _.find(users, { uid: user.uid })

    const updated = {
      id: current.id,
      uid: current.uid,
      avatar: link,
      count: current.count,
      correct: current.correct,
      mistake: current.mistake
    }

    updateUser({
      variables: {
        input: updated
      }
    }).then(() => {
      window.location.reload()
    })

    // console.log('link', link)
  }

  const handleClick = () => {
    const upload = document.getElementById('upload')
    // console.log(upload)
    if (upload) {
      upload.click()
    }
  }

  // console.log(state)
  return (
    <>
      <StyledBody>
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
            setState((prevState : InitialStateInterface) => ({
              ...prevState,
              gameState: 'welcome'
            }))
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
//     if (user && user.uid) {
//       const current = users[user.uid]
//
//       const res = await axios.put(
//         `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${user.uid}.json`,
//         { ...current, avatar: link }
//       )
//       return res
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
