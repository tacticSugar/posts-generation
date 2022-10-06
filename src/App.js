import FetchedPosts from './components/FetchedPosts'
import Posts from './components/Posts'
import PostForm from './components/PostForm'

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <PostForm />
      </div>

      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  )
}

export default App
