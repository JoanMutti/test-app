import React from 'react'

const Context = React.createContext({
	name: 'este valor lo recibira un componente que no tenga provider',
})

export default Context
