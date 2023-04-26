 //  Code B by chatgpt

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCom from './NewsCom.jsx';

export default function News(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2c37926ae04a4674a3d9532546463bb5';
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className='container'>
        <h2>this main heading</h2>
        <div className='row mx-3'>
          {articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsCom tittle={element.title} desc={element.description} url={element.urlToImage} newsurl={element.url} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}



// code  A myself


// // import React from 'react'
// import React, { useEffect, useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import NewsCom from './NewsCom.jsx'

// export default function News(props) {

//   // const [tittle ,desc ,imgUrl]= useState();
//   // const [t, st] = useState(1);
  
//   const [article,setArticles] = useState();
  
//   useEffect(() => {
//     async function fetchData() {
//       console.log('cmd');
//       const url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2c37926ae04a4674a3d9532546463bb5';
      
      
//       const response = await fetch(url);
//       const data = await response.json();
      
//       const parseData=await data.json();
//       console.log('parseData:', data);
//       setArticles(parseData.articles);
//     }
//     fetchData();
  

//   }, []);
    
//   return (
//     <>
      
//         <div className='container'>
//           <h2>this main  heading </h2>
//           <div className='row mx-3'  >
//             {article.map((element) => {
//               return <div className='col-md-4' key={element.url}  >
//                 <NewsCom tittle={element.title.slice(0,45)} desc={element.description.slice(0,70)} url={element.urlToImage} newsurl={element.url} />
//               </div>
//             })}
//           </div>
//           {/* <div className='row mx-3'>


//           <div className='col-md-4'>

//             <NewsCom tittle="heading 4" desc="this is desc 4 " url="https://picsum.photos/200" />
//           </div>

//           <div className='col-md-4'>

//             <NewsCom tittle="heading 5" desc="this is desc 5 " url="https://picsum.photos/280" />
//           </div>

//           <div className='col-md-4'>

//             <NewsCom tittle="heading 6" desc="this is desc 6 " url="https://picsum.photos/300" />
//           </div>


//         </div> */}
//         </div>
    
//     </>

//   )
// }
