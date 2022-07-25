import React from 'react';
import '../../css/Style.css';

const Navbar = () => {
  return (
    <>
        <div class="container-fluid position-relative nav-bar p-0">
        <div class="container-lg position-relative p-0 px-lg-3" style={{zIndex: '9'}}>
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                <a href="index.html" class="navbar-brand d-block d-lg-none">
                    <h1 class="m-0 display-4"><span class="text-secondary">Multi</span>Services</h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto py-0">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">Sobre Nosotros</a>
                        <a href="product.html" class="nav-item nav-link">Productos</a>
                    </div>
                    <a href="index.html" class="navbar-brand mx-5 d-none d-lg-block">
                        <h1 class="m-0 display-4 text-primary"><span class="text-secondary">Multi</span>Service</h1>
                    </a>
                    <div class="navbar-nav mr-auto py-0">
                        <a href="service.html" class="nav-item nav-link">Servicios</a>
                        <a href="gallery.html" class="nav-item nav-link">Galeria</a>
                        <a href="contact.html" class="nav-item nav-link">Contactanos!</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  )
}

export default Navbar