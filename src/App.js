import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Context from './Context'
import config from './config'
import Header from './Header/Header'
import Home from './Home/Home'
import Types from './Types/Types'
import BikeType from './Types/BikeType'
import Parts from './Parts/Parts'
import Safety from './Safety/Safety'
// import FindShopsForm from './FindShops/FindShopsForm'
import PageNotFound from './PageNotFound/PageNotFound'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
      parts: [],
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/types`),
      fetch(`${config.API_ENDPOINT}/parts`)
    ])
      .then(([typesRes, partsRes]) => {
        if (!typesRes.ok)
          return typesRes.json().then(e => Promise.reject(e));
        if (!partsRes.ok)
          return partsRes.json().then(e => Promise.reject(e));

        return Promise.all([typesRes.json(), partsRes.json()]);
      })
      .then(([types, parts]) => {
        this.setState({ types, parts });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  render() {
    const contextValue = {
      types: this.state.types,
      parts: this.state.parts,
    }
    
    return (
      <div className="App">
        <Context.Provider value={contextValue}>
          <div className='content' aria-live='polite'>
            <header>
              <Header />
            </header>
            <main className='main'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/types' component={Types} />
                <Route path='/types/:id' component={BikeType} />
                <Route path='/parts' component={Parts} />
                <Route path='/safety' component={Safety} />
                {/* <Route path='/find-shops' component={FindShopsForm} /> */}
                <Route component={PageNotFound} />
              </Switch>
            </main>
          </div>
        </Context.Provider>
      </div>
    )
  }
}


export default App;
