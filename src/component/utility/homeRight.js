import React from 'react'
import '../css/style.css';
import BlogImg from '../assests/Blog.png';
import Contactimg from '../assests/Contact.png';
import FileCodeImg from '../assests/file-code.png';
import homeImg from '../assests/Home.png';
import PortfolioImg from '../assests/Portfolio.png';
import CVImg from '../assests/cv.png';
import ContrastImg from '../assests/Contrast.png';


function HomeRight() {

  const images = [
    { URL: homeImg },
    { URL: FileCodeImg },
    { URL: CVImg },
    { URL: PortfolioImg },
    { URL: BlogImg },
    { URL: Contactimg },
  ]

  return <div className="home-right">
    <div class="d-flex flex-column flex-shrink-0 " style={{ height: '100%' }}>
      <a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
        <svg class="bi" width="40" height="32"><use href="#bootstrap"></use></svg>
        <span class="visually-hidden">Icon-only</span>
      </a>
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item">
          <a href="#" class="nav-link  py-3 mb-5" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
            <img src={ContrastImg} />
          </a>
        </li>
        {images.map((e) => (
          <li class="nav-item">
            <a href="#" class="nav-link  py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
              <img src={e.URL} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>;
}

export default HomeRight;