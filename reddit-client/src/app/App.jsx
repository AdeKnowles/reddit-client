import './App.css';
import SearchBar from '../features/searchBar/SearchBar';
import Articles from '../features/articles/Articles';

function App() {
  
  return (
    <>
      <div>
        <SearchBar />
        <main>
          <Articles />
        </main>
      </div>
    </>
  )
}

export default App
