import './App.css';
import SearchBar from '../features/searchBar/SearchBar';
import Article from '../features/article/Article';
import Categories from '../features/categories/Categories';
import redditExampleData from '../assets/redditExampleData.json';
import {useSelector} from 'react-redux';
import { selectSubreddits } from '../features/categories/categoriesSlice';
import { selectReddits } from '../features/article/articleSlice';

function App() {
  
  const subreddits = useSelector(selectSubreddits);
  const importArticles = useSelector(selectReddits);
  //const articles = redditExampleData.data.children;
  const articles = importArticles[0].data.children;
  console.log(importArticles[0].data.children);
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
            <Categories subreddits={subreddits}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
