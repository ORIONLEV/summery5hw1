import './App.css'
import data from './data.json'


function App() {


  return (
    <>

    <ul>{ data.map(({id, name, age, email, isActive, address: { country, city, street }})=>{
      return (
        <li key={id}>
          <h1>{name}</h1>
          <h2>{age}</h2>
          <a href={email}>{email}</a>
          <p>{isActive?"Online":"Offline"}</p>
          <p>{address.country}</p>
          <p>{address.city}</p>
          <p>{address.street}</p>
        </li>
      )

    })}

    </ul>


    </>
  );
}





//=====================================================


// const image = {
//   img: "https://png.pngtree.com/thumb_back/fh260/background/20240731/pngtree-nature-beautiful-background-pictures-image_16118133.jpg",
//   alt: "neutral",
//   name: "hello world",
//   desk:"lorem ipsum dolor sit amet ",

// }

// function App() {

//   const { img, alt, name, desk } = image;

//   return (
//     <>
//       <h1>{name}</h1>
//       <h2>{desk}</h2>
//       <img src={img} alt={alt} width="300px" />



//     </>
//   );
// }



//=====================================================

// const text = "Hello world"
// const imageUrl = "https://png.pngtree.com/thumb_back/fh260/background/20240731/pngtree-nature-beautiful-background-pictures-image_16118133.jpg"

// const imgDesk = "neutral"

// const citeUrl = "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Duk_UA"

// function App() {
//   return (
//     <>
//       <h1>{text}</h1>
//       <h2>Lorem, ipsum dolor.</h2>
//       <img src={imageUrl} alt={imgDesk} />

//       <a target="_blank" href={citeUrl}>Facebook</a>


//     </>
//   );
// }

export default App
