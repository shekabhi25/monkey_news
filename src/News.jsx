// import React from 'react'
import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCom from './NewsCom.jsx'

export default function News(props) {


  const articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Listen: IPL - Sunrisers Hyderabad v Delhi Capitals",
      "description": "Listen to BBC Radio 5 Sports Extra commentary as Sunrisers Hyderabad face Delhi Capitals in the 2023 Indian Premier League.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/65179782",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2023-04-24T17:07:23.1336083Z",
      "content": "You need one to watch live TV on any channel or device, and BBC programmes on iPlayer. Its the law.\r\nFind out more"
    },

    
    {
      "source": {
        "id": "ansa",
        "name": "ANSA.it"
      },
      "author": "ANSA.it",
      "title": "Onu, la popolazione indiana supererà quella cinese in settimana - Ultima Ora",
      "description": "L'India supererà la Cina come Paese più popoloso del mondo entro la fine di aprile. (ANSA)",
      "url": "http://www.ansa.it/sito/notizie/topnews/2023/04/24/onu-la-popolazione-indiana-superera-quella-cinese-in-settimana_b8994a3e-fa15-4018-ab58-558e9d5f5690.html",
      "urlToImage": "https://www.ansa.it/webimages/img_700/2023/2/18/8ab0b425d9e40e71a67038e9baa6c818.jpg",
      "publishedAt": "2023-04-24T16:43:00Z",
      "content": "Se hai scelto di non accettare i cookie di profilazione e tracciamento, puoi aderire all’abbonamento \"Consentless\" a un costo molto accessibile, oppure scegliere un altro abbonamento per accedere ad … [+320 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Han Chen",
      "title": "UN: India to overtake China as most populous nation by end of April",
      "description": "The milestone will have geopolitical, economic and social implications in the two countries and worldwide.",
      "url": "https://www.axios.com/2023/04/24/india-most-population-overtake-china",
      "urlToImage": "https://images.axios.com/Hcd9kgZYCq_UBHtaB8H6gX3PbpA=/0x0:5086x2861/1366x768/2023/04/24/1682347698347.jpg",
      "publishedAt": "2023-04-24T16:11:20Z",
      "content": "India will overtake China as the most populous country this month, the UN Department of Economic and Social Affairs said on Monday, offering the most definitive timeframe on when the shift will take … [+1298 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "KRUTIKA PATHI and JOE McDONALD",
      "title": "UN: By month's end, India population to be world's largest",
      "description": "NEW DELHI (AP) — India will be the world’s most populous country by the end of this month, eclipsing an aging China, the United Nations said Monday. The milestone raises questions about whether India can repeat the economic success that has made China central…",
      "url": "https://apnews.com/f87956b53ac07436438fd96cd1d12092",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/a3a78896c9344d898a4c67537781e499/3000.jpeg",
      "publishedAt": "2023-04-24T16:02:56Z",
      "content": "NEW DELHI (AP) — India will be the world’s most populous country by the end of this month, eclipsing an aging China, the United Nations said Monday. The milestone raises questions about whether India… [+4783 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Listen: IPL - Sunrisers Hyderabad v Delhi Capitals",
      "description": "Listen to BBC Radio 5 Sports Extra commentary as Sunrisers Hyderabad face Delhi Capitals in the 2023 Indian Premier League.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/65179782",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2023-04-24T17:07:23.1336083Z",
      "content": "You need one to watch live TV on any channel or device, and BBC programmes on iPlayer. Its the law.\r\nFind out more"
    },  {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Listen: IPL - Sunrisers Hyderabad v Delhi Capitals",
      "description": "Listen to BBC Radio 5 Sports Extra commentary as Sunrisers Hyderabad face Delhi Capitals in the 2023 Indian Premier League.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/65179782",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2023-04-24T17:07:23.1336083Z",
      "content": "You need one to watch live TV on any channel or device, and BBC programmes on iPlayer. Its the law.\r\nFind out more"
    }

  ]
  const [myarticle] = useState(articles);
  // const [tittle ,desc ,imgUrl]= useState();
  // const [t, st] = useState(1);
  return (
    <>
      
        <div className='container'>
          <h2>this main  heading </h2>
          <div className='row mx-3'  >
            {myarticle.map((element) => {
              return <div className='col-md-4' key={element.url}  >
                <NewsCom tittle={element.title.slice(0,45)} desc={element.description.slice(0,70)} url={element.urlToImage} newsurl={element.url} />
              </div>
            })}
          </div>
          {/* <div className='row mx-3'>


          <div className='col-md-4'>

            <NewsCom tittle="heading 4" desc="this is desc 4 " url="https://picsum.photos/200" />
          </div>

          <div className='col-md-4'>

            <NewsCom tittle="heading 5" desc="this is desc 5 " url="https://picsum.photos/280" />
          </div>

          <div className='col-md-4'>

            <NewsCom tittle="heading 6" desc="this is desc 6 " url="https://picsum.photos/300" />
          </div>


        </div> */}
        </div>
    
    </>

  )
}
