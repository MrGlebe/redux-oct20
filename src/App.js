import React from 'react';
import PostForm from './components/PostForm';
import FetchedPosts from './components/FetchedPosts';
import Posts from './components/Posts';
import Alert from './components/Alert';

function App() {

  return (
     <div className="wrapper pt-5">
       <div className="container">
            <Alert />
         <div className="row mb-5">
           <div className="col">
             <PostForm />
           </div>
       </div>

         <div className="row">
           <div className="col">
               <h2>Sync posts</h2>
               <Posts />
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
