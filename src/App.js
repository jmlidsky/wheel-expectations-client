import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Context from './Context'
// import config from './config'
import DATA from './DummyData'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import BikeFilterForm from './components/Bikes/BikeFilterForm'
import BikeInfo from './components/Bikes/BikeInfo'
import PartsFilterForm from './components/Parts/PartsFilterForm'
import Safety from './components/Safety/Safety'
import FindShopsForm from './components/FindShops/FindShopsForm'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   bikes: [],
    //   parts: [],
      bikes: DATA.bikes,
      parts: DATA.parts,
      category: " ",
    }
  }

  setCategory = (filter) => {
    this.setState({
      category: filter
    })
  }

  // componentDidMount() {
  //   Promise.all([
  //     fetch(`${config.API_ENDPOINT}/bikes`),
  //     fetch(`${config.API_ENDPOINT}/parts`)
  //   ])
  //     .then(([bikesRes, partsRes]) => {
  //       if (!bikesRes.ok)
  //         return bikesRes.json().then(e => Promise.reject(e));
  //       if (!partsRes.ok)
  //         return partsRes.json().then(e => Promise.reject(e));

  //       return Promise.all([bikesRes.json(), partsRes.json()]);
  //     })
  //     .then(([bikes, parts]) => {
  //       this.setState({ bikes, parts });
  //     })
  //     .catch(error => {
  //       console.error({ error });
  //     });
  // }

  render() {
    const contextValue = {
      bikes: this.state.bikes,
      parts: this.state.parts,
      setCategory: this.setCategory,
      category: this.state.category,
    }
    
    return (
      <div className="App">
        <Context.Provider value={contextValue}>
          <div className="content" aria-live="polite">
            <header>
              <Header />
            </header>
            <main className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bikes" component={BikeFilterForm} />
                <Route path="/bikes/:id" component={BikeInfo} />
                <Route path="/parts" component={PartsFilterForm} />
                <Route path="/safety" component={Safety} />
                <Route path="/find-shops" component={FindShopsForm} />
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
