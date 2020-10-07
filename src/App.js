import React from 'react';
import PostForm from './components/PostForm';
import FetchedPosts from './components/FetchedPosts';
import Posts from './components/Posts';

function App() {
  return (
     <div className="wrapper pt-3">
       <div className="container">

         <div className="row">
           <div className="col">
             <PostForm />
           </div>
       </div>

         <div className="row">
           <div className="col">
               <h2>Sync posts</h2>
               <Posts posts={[1,2,3]}/>
           </div>
           <div className="col">
               <h2>Async posts</h2>
              <FetchedPosts />
           </div>
         </div>
       </div>
     </div>
  );
}

export default App;
