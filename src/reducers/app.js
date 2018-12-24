const loginInfo = (state = {phoneNumber: '', email: '', displayName: ''}, action) => {
  switch (action.type) {
    case 'loginInfo':
      return {...state, ...action.data}
    default:
      return state
  }
}

const menus = (state = [], action) => {
  switch (action.type) {
    case 'menus':
      return [...state, ...action.data]
    default:
      return state
  }
}

export {loginInfo, menus}
