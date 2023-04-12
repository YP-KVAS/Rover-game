import styles from './Start.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from '../../utils/const-variables/routes'
import { Button } from '../../components/Button/Button'
import { Timer } from '../../components/Timer/Timer'

export const Start = () => {
  const [isStarted, setStartAnimation] = useState(false)
  const [isCalled, setCallbackCalling] = useState(false)
  const navigate = useNavigate()
  const startHandler = () => {
    setStartAnimation(true)
  }

  const timerCallback = () => {
    if (!isCalled) {
      setCallbackCalling(true)
      navigate(RoutesEnum.GAME)
    }
  }

  return (
    <div className={styles.start}>
      <div className={styles.start__content}>
        {isStarted ? (
          <div className={styles.start__timer}>
            <Timer callback={timerCallback} />
          </div>
        ) : (
          <Button clickHandler={startHandler}>Начать игру</Button>
        )}
      </div>
    </div>
  )
}
