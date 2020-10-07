import React from 'react';
import PostForm from './components/PostForm';

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
           <div className="col">POSTS</div>
           <div className="col">FETCHED POSTS</div>
         </div>
       </div>
     </div>
  );
}

export default App;
