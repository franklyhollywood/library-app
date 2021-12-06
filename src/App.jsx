import { BrowserRouter as Router, Switch, Route, Navlink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <h1>Library Catalog</h1>

        <Switch>
          <Route path="/books" component={BookList} />
          <Route path="/books:booksId" component={BookDetail} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
