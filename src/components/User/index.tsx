import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { Header, Text, Button } from 'ui'
import { Modal } from 'antd'
import { initialState } from '../../localBase/base'
import i18n from 'i18next'
import AppContext from '../../AppContext'
import Tukai from './../../assets/tukai.png'
import { getUsers } from '../../api'
import { StyledBody } from '../../AppStyles'
import { auth, storage } from '../../firebaseSetup'
import classes from './User.module.scss'
import { resizeImageFn } from './apiUser'
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
    console.log('useEffect', user?.uid)
    getUsers().then((res) => {
      setUsers(res)
    })
  }, [])
  if (!user || !users) {
    return null
  }

  async function updatePhoto (link: string) {
    try {
      if (user && user.uid) {
        const current = users[user.uid]

        const res = await axios.put(
          `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${user.uid}.json`,
          { ...current, avatar: link }
        )
        return res
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function addUser (id: string) {
    try {
      const updated = {
        count: 0,
        correct: 0,
        mistake: 0,
        avatar: 'https://chamala.ru/static/media/tukai.361b9ae4.png'
      }
      const res = await axios.put(
        `https://chamala-317a8-default-rtdb.europe-west1.firebasedatabase.app/base/users/${id}.json`,
        updated
      )
      return res
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  const currentUser = users[user.uid]

  if (!currentUser) {
    addUser(user.uid).then((res) => {
      return window.location.reload()
    })
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
    updatePhoto(link).then((res) => {
      window.location.reload()
    })
  }

  const handleClick = () => {
    const upload = document.getElementById('upload')
    console.log(upload)
    if (upload) {
      upload.click()
    }
  }
  console.log('users', users)
  console.log('currentUser', users[user.uid])

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
