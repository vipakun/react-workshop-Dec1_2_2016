import reducers from './reducers'

test('@@INIT', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({searchTerm: '', omdbData: {}})
})

test('SET_SEARCH_TERM', () => {
  let state
  state = reducers({searchTerm:'hous',omdbData:{tt1856010:{Title:'House of Cards',Year:'2013–',Rated:'TV-MA',Released:'01 Feb 2013',Runtime:'51 min',Genre:'Drama',Director:'N/A',Writer:'Beau Willimon',Actors:'Kevin Spacey, Robin Wright, Michael Kelly, Nathan Darrow',Plot:'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',Language:'English',Country:'USA',Awards:'Won 2 Golden Globes. Another 25 wins & 162 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'9.0',imdbVotes:'326,913',imdbID:'tt1856010',Type:'series',totalSeasons:'5',Response:'True'}}}, {type:'SET_SEARCH_TERM',searchTerm:'house'})
  expect(state).toEqual({searchTerm:'house',omdbData:{tt1856010:{Title:'House of Cards',Year:'2013–',Rated:'TV-MA',Released:'01 Feb 2013',Runtime:'51 min',Genre:'Drama',Director:'N/A',Writer:'Beau Willimon',Actors:'Kevin Spacey, Robin Wright, Michael Kelly, Nathan Darrow',Plot:'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',Language:'English',Country:'USA',Awards:'Won 2 Golden Globes. Another 25 wins & 162 nominations.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'9.0',imdbVotes:'326,913',imdbID:'tt1856010',Type:'series',totalSeasons:'5',Response:'True'}}})
})

test('ADD_OMDB_DATA', () => {
  let state
  state = reducers({searchTerm:'',omdbData:{}}, {type:'ADD_OMDB_DATA',imdbID:'tt3986586',omdbData:{Title:'Fuller House',Year:'2016–',Rated:'TV-G',Released:'26 Feb 2016',Runtime:'30 min',Genre:'Comedy, Family',Director:'N/A',Writer:'Jeff Franklin',Actors:'Candace Cameron Bure, Jodie Sweetin, Andrea Barber, Michael Campion',Plot:'In a continuation of Full House, D.J. Fuller is a mother of three young boys and is a recent widow. D.J.\'s sister Stephanie, her best friend Kimmy and Kimmy\'s teenage daughter all move in to help raise her sons. The house is now a lot fuller.',Language:'English',Country:'USA',Awards:'1 win.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NzA0ODAyMF5BMl5BanBnXkFtZTgwNDE5MTIxMDI@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'7.2',imdbVotes:'13,415',imdbID:'tt3986586',Type:'series',totalSeasons:'2',Response:'True'}})
  expect(state).toEqual({searchTerm:'',omdbData:{tt3986586:{Title:'Fuller House',Year:'2016–',Rated:'TV-G',Released:'26 Feb 2016',Runtime:'30 min',Genre:'Comedy, Family',Director:'N/A',Writer:'Jeff Franklin',Actors:'Candace Cameron Bure, Jodie Sweetin, Andrea Barber, Michael Campion',Plot:'In a continuation of Full House, D.J. Fuller is a mother of three young boys and is a recent widow. D.J.\'s sister Stephanie, her best friend Kimmy and Kimmy\'s teenage daughter all move in to help raise her sons. The house is now a lot fuller.',Language:'English',Country:'USA',Awards:'1 win.',Poster:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NzA0ODAyMF5BMl5BanBnXkFtZTgwNDE5MTIxMDI@._V1_SX300.jpg',Metascore:'N/A',imdbRating:'7.2',imdbVotes:'13,415',imdbID:'tt3986586',Type:'series',totalSeasons:'2',Response:'True'}}})
})
