import './App.css';
import './components/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Firstcomp from './components/Firstcomp';
import Movieslist from './components/Movieslist';
import { useState } from 'react';
import Footer from './components/Footer';


function App() {
  const [movies, setmovies] = useState([
    {
        name: "beasts of no nation",
        posterurl:
          "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQcsOKPBHHBH4i2JGy0OJI3l4blWwCHjoewRWeLWaZ_n6yzjtW56apfhfQcc2Pb2WGfEAs2Qgs71OA4oTEocr3LZTPcE.jpg?r=b78",
        description:
          "As civil war rages in Africa...",
        rating: 5,
      },
      {
        name: "13 hours in benghazi",
        posterurl:
          "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRse3fgA3r6z5xMgjuVJlZlaXk8VKMNHxTV6f6_hcHVoTOwQka7dA48iui2uaWf77kkExQVywKkNVDwEB9T4Z9ofiTrl.jpg?r=44a",
        description:
          "A security team consisting of six members fights.",
        rating: 4,
      },
      {
        name: "The Circle",
        posterurl:
          "https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg",
        description:
          "Mae is ecstatic to be employed in the biggest tech company in the world. ",
        rating: 2,
      },
      {
        name: "Inception",
        posterurl:
          "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/Inception-characters-film-crew.jpg",
        description:
          "Cobb steals information from his targets by entering their dreams. ",
        rating: 3,
      },
      {
        name: "Shutter Island",
        posterurl:
          "https://images.squarespace-cdn.com/content/v1/5b76c81055b02cf394f9ece5/1573132285768-0ALN9MWORAVTHBW7UBVI/ke17ZwdGBToddI8pDm48kNovdPSmLXrGMIo6NKEdEUEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcwA5BL7WQp-UtG0T9B_ANEONHo-Gj1DAsyRwVYWk8R2xfkNmKPWrmaFhthYewTpvH/Shutter%2BIsland%2B1.jpg?format=1000w",
        description:
          "Teddy Daniels and Chuck Aule, two US marshals.",
        rating: 5,
      },
      {
        name: "Warcraft",
        posterurl:
          "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-243610-8J07_WF0170_COMP_143639R_G_SRGB_000000_HR.jpg",
        description:
          "A few human survivors must team up with a group of dissenting Orcs",
        rating: 1,
      },
      {
        name: "The Godfather",
        posterurl:
          "https://m.media-amazon.com/images/M/MV5BYWNlN2U4YjQtMzI3NC00ZjkxLWEwMTItYWRlNDUxYTYwYjVlXkEyXkFqcGdeQWpvaG5oYXJ0._V1_UX477_CR0,0,477,268_AL_.jpg",
        description:
          "The Godfather is an American film series.",
        rating: 5,
      },
      {
        name: "Taxi Driver",
        posterurl:
          "https://www.indiewire.com/wp-content/uploads/2016/04/taxi-driver-1.jpg?w=670&h=377&crop=1",
        description:
          "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City.",
        rating: 3,
      },
      {
        name: "Fight Club",
        posterurl:
          "https://img.huffingtonpost.com/asset/5bb49916220000ba01dc2840.jpeg?ops=scalefit_630_noupscale",
        description:
          "Discontented with his capitalistic lifestyle...",
        rating: 5,
      },
      {
        name: "The Lord of the Rings",
        posterurl:
          "https://imgix.bustle.com/uploads/image/2020/1/21/7f69561d-3863-4b82-8196-f6bfd3074f03-lord-of-the-rings-frodo-sam-ftr.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
        description:
          "The Lord of the Rings is a film series of three epic fantasy adventure films.",
        rating: 5,
      },
  
      {
        name: "Dachra",
        posterurl:
          "https://cdn.nawaat.org/wp-content/uploads/2018/11/DACHRA-3-2000px.jpg",
        description:
          "A young journalism student and her friends become trapped in an isolated village.",
        rating: 5,
      },
      {
        name: "Paper Lives",
        posterurl:
          "http://www.doyouknowturkey.com/wp-content/uploads/2021/02/C%CC%A7ag%CC%86atay-Ulusoy-is-acting-as-Mehmet-in-Kag%CC%86ittan-Hayatlar-Papar-Lives-Turkish-original-film-on-Netflix.jpg",
        description:
          "Mehmet runs a solid waste warehouse in an impoverished Istanbul neighbourhood.",
        rating: 2,
      },
      {
        name: "Seaspiracy",
        posterurl:
          "https://i.guim.co.uk/img/media/0b019b69ec3c618610bd78a84f39e491ac65fde2/120_0_3600_2160/master/3600.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=f792f8e3427117d08ad88b2dc68d68ae",
        description:
          "Seaspiracy is a 2021 documentary film ...",
        rating: 5,
      },      
])
const [text, settext] = useState("");
const [stars, setstars] = useState(0)
  return (
   <div>
    <Menu settext={settext} setstars={setstars}/>
    <Firstcomp/>
    <Movieslist movies={movies} setmovies={setmovies} text={text} stars={stars}/>
    <Footer/>
   </div>
  );
}

export default App;
