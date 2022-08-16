import React from 'react'

function Header() {
    return (
        <div>
        <div>   
        <div class="nav-wrapper fixed-top">
        <div class="container">
          <nav class="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a class="navbar-brand mx-auto" href="#"
              ><i class="ri-apple-fill"></i></a>
  
            <div class="navbar-collapse collapse">
              <ul class="navbar-nav nav-justified w-100 nav-fill">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/laptop/">Laptops</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#">Phones</a>
                </li>
               
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#">Watch</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#">Music</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#">Help</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/search/"
                    >
                <i class="ri-search-line"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="/cart/"
                    ><i class="ri-handbag-line"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
        </div>
        </div>
    )
}

export default Header
