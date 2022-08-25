import React from 'react'
import Accounts from './Accounts'

export default function Navbar() {

  return (
    <nav class="navbar is-info has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true">HOME</span>
          <span aria-hidden="true">PROFILE</span>
          <span aria-hidden="true">ACCOUNTS</span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href='/'>
            Home
          </a>
    
          <a class="navbar-item" href='/accounts'>
            Accounts
          </a>

          <a class="navbar-item" href='/accounts/new'>
            Create Account
          </a>
  
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

}