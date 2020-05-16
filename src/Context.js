import React from 'react'

const Context = React.createContext({
    bikes: [],
    parts: [],
    setCategory: () => {},
    category: " ",
})

export default Context