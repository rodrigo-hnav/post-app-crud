import PostForm from "./components/PostForm";
import PostSearch from "./components/PostSearch";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div className="p-2 flex-grow-1 text-center">
          <h2>App Post</h2>
        </div>
      </div>
      <div className="row">
        <div className="p-2 flex-grow-1 text-center">
          <PostSearch />
          <PostForm />
        </div>
      </div>
    </div>
  );
}

export default App;
