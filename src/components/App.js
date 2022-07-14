import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <ArticleList posts={blogData.posts} />
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
    </div>
  );
}

export default App;
