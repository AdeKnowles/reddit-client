import './App.css';
import SearchBar from '../features/searchBar/SearchBar';
import Article from '../features/article/Article';
import Categories from '../features/categories/Categories';

function App() {
  
  const articles = ["Article 1","Article 2","Article 3","Article 4","Article 5","Article 6", "Article 7"];

  return (
    <>
      <div>
        <SearchBar />
        <main>
          <div id="articles">
            {articles.map((article)=>(
              <Article article={article} />
            ))}
          </div>
          <div id="categories">
            <Categories />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
