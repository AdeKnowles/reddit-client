import './App.css';
import SearchBar from '../features/searchBar/SearchBar';
import Article from '../features/article/Article';
import Categories from '../features/categories/Categories';
import redditExampleData from '../assets/redditExampleData.json';

function App() {
  
  const articles = redditExampleData.data.children;
  const subreddits = [{name: "subreddit1", icon: "1", link: "https://reddit.com/r/subreddit1"},{name: "subreddit2", icon: "2", link: "https://reddit.com/r/subreddit2"},{name: "subreddit3", icon: "3", link: "https://reddit.com/r/subreddit3"},{name: "subreddit4", icon: "4", link: "https://reddit.com/r/subreddit4"},{name: "subreddit5", icon: "5", link: "https://reddit.com/r/subreddit5"}];

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
