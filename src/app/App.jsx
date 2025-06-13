import './App.css';
import SearchBar from '../features/searchBar/SearchBar';
import Article from '../features/article/Article';
import Categories from '../features/categories/Categories';
import {useSelector} from 'react-redux';
import { selectSubreddits } from '../features/categories/categoriesSlice';
import { selectReddits } from '../features/article/articleSlice';

function App() {
  
  const subreddits = useSelector(selectSubreddits);
  const articles = useSelector(selectReddits);
  return (
    <>
      <div>
        <SearchBar />
        <main>
          <div id="articles">
            {articles.map((article)=>(
              <Article key = {article.id} article={article} />
            ))}
          </div>
          <div id="categories">
            <Categories subreddits={subreddits}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
