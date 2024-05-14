import React from 'react'

const Header = () => {
  return (
    <header class="header-black">
      <div class="container">
        <div class="nav">
          <div class="nav1"><a href='#'><img src="./assets/images/gifs/logo2.png" alt="Logo"/></a></div>
          <div class="nav2">
            <div class="menu"><a href="#about">about Me</a></div>
            <div class="menu"><a href="#services">services</a></div>
            <div class="menu"><a href="#">Blogs</a></div>
            <div class="menu">
              <a href="./template/portifolio.html">Portifolio</a>
            </div>
            <div class="menu"><a href="#contact">contact Me</a></div>
          </div>
          <div id="opened" onclick="openNav()">&#9776;</div>
        </div>
      </div>
    </header>
  )
}

export default Header