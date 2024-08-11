import React from 'react'

const RegisterContext = React.createContext({
  registerStatus: false,
  name: '',
  topic: 'ARTS_AND_CULTURE',
  showError: false,
  changeRegisterStatus: () => {},
  updateError: () => {},
  updateName: () => {},
  updateTopic: () => {},
})

export default RegisterContext
