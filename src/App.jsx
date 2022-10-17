import { useState } from 'react'
import { initializeApp } from "firebase/app";

function App() {
  const [imgs, setImgs] = useState([])

  const firebaseConfig = {
    apiKey: "AIzaSyC--0Wt3fev7IcrzRl6K30ecWgu2QwVmzM",
    authDomain: "buenaspracticas-65028.firebaseapp.com",
    projectId: "buenaspracticas-65028",
    storageBucket: "buenaspracticas-65028.appspot.com",
    messagingSenderId: "1017996803962",
    appId: "1:1017996803962:web:ea64f09fc10f6342c360c3",
    measurementId: "G-HNJEP1KX1T"
  };
  
  const app = initializeApp(firebaseConfig);
  
  const add = (ruta) =>{
      const images = imgs
      images.push(ruta)
      setImgs(images)
  }


  const show = () =>{
    if(imgs.length > 0){
      return imgs.map((data, key) =>{
         return <div>
              <imgs src={data} key={key}  className='img'/>
          </div>
      })
    }
  }

  return (
    <div className="App">
      <button onClick={() => add('https://picsum.photos/200/300')}>ADD</button>
      <button onClick={() => show()}>SHOW</button>
    </div>
  )
}

export default App
