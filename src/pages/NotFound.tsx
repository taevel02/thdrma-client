import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const [second, setSecond] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      if (second > 1) setSecond(second - 1)
      else navigate('/', { replace: true })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [second])

  return (
    <>
      <div>404</div>
      <div>찾을 수 없는 페이지입니다. {second}초 후 메인으로 이동합니다.</div>
    </>
  )
}

export default NotFound
