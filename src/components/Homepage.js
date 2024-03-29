import React from 'react'


export default function Homepage() {

    return(

        
      <div class="card">

        <div class="box">
        <p class="title is-2 has-text-link has-text-centered">MY EXPENSE TRACKER</p>
        </div>

        <div class="card-image">
          <figure class="image is-4by3">
            <img src={require('../../src/banking.jpg')} alt="Banking" />
          </figure>
        </div>

        <div class="card-content">

          <div class="media">
            

            <div class="media-content">
              <p class="title is-4">EXPENSE TRACKER</p>
              <p class="subtitle is-6">by Mitzi Estrada</p>
            </div>

          </div>

          <div class="content">
            Support: 
              <a href="mailto:mitzi17@me.com">mitzi17@me.com</a>
              <br/>

              <time datetime="time-local"> </time>
          </div>
        </div>
      </div>
      
        
    )


}