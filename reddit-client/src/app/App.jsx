import './App.css';
import SearchBar from '../features/searchBar/SearchBar';
import Articles from '../features/articles/Articles';
import Categories from '../features/categories/Categories';

function App() {
  
  return (
    <>
      <div>
        <SearchBar />
        <main>
          <Articles />
          <Categories />
        </main>
      </div>
    </>
  )
}

export default App
