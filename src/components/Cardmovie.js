import React from 'react'

function Cardmovie({el}) {
  return (
            <div className='body'>
              <div className="wrapper">
                <div className="card">
                  <div className="descriptions">
                    <h1>{el.name}</h1>
                    <p>
                     {el.description}
                    </p>
                    <button>
                      <i className="fab fa-youtube" />
                      Play trailer on YouTube
                    </button>
                  </div>
                </div>
                <div className="card">
                  <img src={el.posterurl} alt="" />
                  <div className="descriptions">
                    <h1>Equalizer 2</h1>
                    <p>
                      {el.description}  </p>
                    <button>
                      <i className="fab fa-youtube" />
                      Play trailer on YouTube
                    </button>
                  </div>
                </div>
              </div>
              <footer>
                <p>
                  Created with <i className="fa fa-heart" /> by
                  <a target="_blank" href="https://codepen.io/ahmadbassamemran/">Ahmad Emran</a>
                  Follow me : 
                  <a target="_blank" href="https://www.instagram.com/ahmadbassamemran/"><i className="fab fa-instagram" /></a>
                  <a target="_blank" href="https://www.linkedin.com/in/ahmademarn/"><i className="fab fa-linkedin" /></a>
                  <a target="_blank" href="https://codepen.io/ahmadbassamemran/"><i className="fab fa-codepen" /></a> 
                  <a target="_blank" href="https://dev.to/ahmadbassamemran"><i className="fab fa-dev" /></a> 
                  <a target="_blank" href="https://twitter.com/ahmadbassamemra"><i className="fab fa-twitter-square" /></a> 
                </p>
              </footer>
              <div className="youtubeBtn">
                <a target="_blank" href="https://www.youtube.com/AhmadEmran?sub_confirmation=1">
                  <span>Watch on YouTube</span>
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          );
        }
export default Cardmovie