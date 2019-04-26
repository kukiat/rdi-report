import { useRef, useEffect, useState, useContext } from 'react'
import ScreenContext from '../HumanGraph/ScreenContext'

export const useScreenSize = (initialValue = 0) => {
  const [width, setwidth] = useState(initialValue)

  const onResizeScreen = () => {
    setwidth(window.innerWidth)
  }

  useEffect(() => {
    onResizeScreen()
    window.addEventListener('resize', onResizeScreen, true)
    return () => window.removeEventListener('resize', onResizeScreen, true)
  }, [width])

  return { width }
}

export const useRefScreen = () => {
  const humanGraphRef = useRef()
  const [offsetTop, setOffsetTop] = useState(0)

  useEffect(() => {
    setOffsetTop(humanGraphRef.current.offsetTop)
  }, [offsetTop])

  return {
    offsetTop,
    ref: humanGraphRef
  }
}

const useOnScrollCheckpoint = () => {
  const { offsetTop } = useContext(ScreenContext)
  const [checkpoint, setCheckpoint] = useState(false)

  const onScroll = () => {
    if (window.scrollY > 2700) {
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
