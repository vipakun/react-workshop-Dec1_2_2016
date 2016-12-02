import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  getInitialState() {
    return {
      searchTerm: 'this is default string'
    }
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' value={this.state.searchTerm}/>
        </header>
        <div>
          {preload.shows.map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })}
        </div>
      </div>
    )
  }
})
export default Search
