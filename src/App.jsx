import React from 'react'
import CustomButton from './components/button/CustomButton'

const App = () => {
  return (
    <div className='flex h-svh justify-center items-center gap-3'>
      <CustomButton title='Make Quiz' />
      <CustomButton title='Give Quiz' />
    </div>
  )
}

export default App
