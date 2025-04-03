import './App.css';
import SearchBar from '../features/searchBar/SearchBar';
import Article from '../features/article/Article';
import Categories from '../features/categories/Categories';
import redditExampleData from '../assets/redditExampleData.json';

function App() {
  
  const articles = redditExampleData.data.children;
  console.log(articles);
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
