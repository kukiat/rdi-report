import { useRef, useEffect, useState, useContext } from 'react'
import ScreenContext from '../HumanGraph/ScreenContext'

export const useRefScreen = () => {
  const humanGraphRef = useRef()
  const [offsetTop, setOffsetTop] = useState(0)

  useEffect(() => {
    setOffsetTop(humanGraphRef.current.offsetTop)
  }, [])

  return {
    offsetTop,
    ref: humanGraphRef
  }
}

const useOnScrollCheckpoint = () => {
  const { offsetTop } = useContext(ScreenContext)
  const [checkpoint, setCheckpoint] = useState(false)

  const onScroll = () => {
    console.log(offsetTop)
    if (window.scrollY > offsetTop) {
      return setCheckpoint(true)
    }
    return setCheckpoint(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    };
  }, [offsetTop])

  return checkpoint
}

export const AnimatedNumber = ({
  startValue = 0,
  stopValue,
  duration = 1000,
  children,
}) => {
  const [currentValue, setCurrentValue] = useState(startValue)
  const checkpoint = useOnScrollCheckpoint()

  const setTimer = (value) => {
    const time = setTimeout(() => setCurrentValue(value), 10)
    return () => clearTimeout(time)
  }

  useEffect(() => {
    if (currentValue < stopValue && checkpoint) {
      return setTimer(currentValue + Math.ceil(stopValue / (duration / 10)))
    } else if (currentValue > stopValue) {
      return setTimer(stopValue)
    }
  }, [currentValue, checkpoint])

  return children(currentValue.toLocaleString())
}
