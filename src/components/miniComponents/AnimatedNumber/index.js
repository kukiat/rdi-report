import React, { useEffect, useState } from 'react'

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
  children,
}) => {
  const [currentValue, setCurrentValue] = useState(startValue)
  const checkpoint = useOnScrollCheckpoint()
  const duration = 2100

  const setTimer = (value) => {
    const time = setTimeout(() => setCurrentValue(value), 3)
    return () => clearTimeout(time)
  }

  useEffect(() => {
    if (currentValue < stopValue && checkpoint) {
      return setTimer(currentValue + Math.ceil(stopValue / (duration / 3)))
    }
  }, [currentValue, checkpoint])
  return children(currentValue.toLocaleString())
}

export default AnimatedNumber