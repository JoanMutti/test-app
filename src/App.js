import './App.css'
import Home from './pages/Home'
import { Route } from 'wouter'
import SearchResults from './pages/SearchResults'
import StaticContext from './context/StaticContext'
import Detail from './pages/Detail'
import { GifsContextProvider } from './context/GifsContext'

const App = () => {
	return (
		<StaticContext.Provider
			value={{
				name: 'midudev',
				suscribeteAlCanal: true,
			}}>
			<div className='App'>
				<section className='App-content'>
					<h1>App</h1>
					<GifsContextProvider>
						<Route path='/' component={Home} />
						<Route path='/search/:keyword' component={SearchResults} />
						<Route path='/gif/:id' component={Detail} />
					</GifsContextProvider>
				</section>
			</div>
		</StaticContext.Provider>
	)
}

export default App
