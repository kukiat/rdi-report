import { useEffect, useState } from 'react'

const useOnScrollCheckpoint = () => {
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
  }, [])
  return checkpoint
}

const AnimatedNumber = ({
  startValue = 0,
  stopValue,
  duration = 2100,
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

export default AnimatedNumber