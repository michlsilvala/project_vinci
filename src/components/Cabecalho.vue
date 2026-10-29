<script>
export default {
    name: 'Cabecalho'
}
</script>

<template>
    <header>
        <figure><img src="../assets/logo.png" alt=""></figure>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><a href="">Sobre</a></li>
                <li class="menu-veiculos borda-menu"><a href="">Veículos</a>
                    <div class="menu">
                        <div class="cars">
                            <article>
                                <img src="../assets/menu/Rectangle 9 (1).png" alt="">
                                <h4>Modelo V1</h4>
                                <div class="menu-links">
                                    <a href="">Ver mais</a>
                                    <a href="">Comprar</a>
                                </div>
                            </article>

                            <article>
                                <img src="../assets/menu/Rectangle 9 (2).png" alt="">
                                <h4>Modelo V2</h4>
                                <div class="menu-links">
                                    <a href="">Ver mais</a>
                                    <a href="">Comprar</a>
                                </div>
                            </article>

                            <article>
                                <img src="../assets/menu/Rectangle 9 (3).png" alt="">
                                <h4>Modelo V3</h4>
                                <div class="menu-links">
                                    <a href="">Ver mais</a>
                                    <a href="">Comprar</a>
                                </div>
                            </article>

                            <article>
                                <img src="../assets/menu/Rectangle 9 (4).png" alt="">
                                <h4>Modelo V4</h4>
                                <div class="menu-links">
                                    <a href="">Ver mais</a>
                                    <a href="">Comprar</a>
                                </div>
                            </article>

                            <article>
                                <img src="../assets/menu/Rectangle 9 (5).png" alt="">
                                <h4>Modelo V5</h4>
                                <div class="menu-links">
                                    <a href="">Ver mais</a>
                                    <a href="">Comprar</a>
                                </div>
                            </article>


                            <article>
                                <img src="../assets/menu/Rectangle 9.png" alt="">
                                <h4>Modelo V7</h4>
                                <div class="menu-links">
                                    <a href="">Ver mais</a>
                                    <a href="">Comprar</a>
                                </div>
                            </article>
                        </div>
                        <aside>
                            <h4>Navegue</h4>
                            <ul>
                                <li class="menu-heading">Ofertas</li>
                                <li><a href="">Test Drive</a></li>
                                <li><a href="">Lojas</a></li>
                                <li><a href="">Serviços</a></li>
                                <li><a href="">Sac</a></li>
                                <li><a href="">Privacidade</a></li>


                            </ul>
                        </aside>
                    </div>
                </li>
                <li><a href="">Serviços</a></li>
                <li><a href="">Test Drive</a></li>
                <li><router-link to="/carro">Carro</router-link></li>
            </ul>
        </nav>
    </header>

</template>

<style>
header {
    /* background-color: #f8f9fa; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem 2rem;
}

header figure img {
    width: 224px;
    height: 38px;
}

header nav ul {
    display: flex;
    gap: 60px;

}

header nav ul li {
    list-style-type: none;
    font-size: 16px;
    text-transform: uppercase;
}

header nav ul li a {
    text-decoration: none;
    color: #1A1A1A;
    transition: color 0.3s ease;
}

header nav ul li a:hover {
    color: #E51837;
    transition: color 0.3s ease;
}

/* menu carros */

.menu-veiculos {
    position: static;
}

.menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 180px;
    gap: 2rem;
    width: 100%;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
    padding: 2rem clamp(1.25rem, 5vw, 4rem);
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(8px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
}

header {
    position: relative;
    z-index: 2;
}

.menu-veiculos:hover .menu,
.menu-veiculos:focus-within .menu {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
    
}

.borda-menu:hover {
    border-bottom: 2px solid #E51837;
}

.menu .cars {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
}

.menu .cars article {
    min-width: 0;
    text-align: center;
}

.menu .cars article img {
    display: block;
    width: 100%;
    /* aspect-ratio: 16 / 9; */
    object-fit: cover;
}

.menu .cars article h4 {
    margin: 0.75rem 0;
    font-size: 18px;
    font-weight: 500;
}

.menu aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
}

.menu aside h4 {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: #979797;
}

.menu aside ul {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    padding: 0;
    list-style: none;
}

.menu aside ul .menu-heading {
    margin-bottom: 0.25rem;
    color: #777;
    font-size: 14px;
}

.menu aside ul li a,
.menu-links a {
    font-size: 16px;
    text-transform: none;
}

.menu-links {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
}

@media (max-width: 760px) {
    .menu {
        grid-template-columns: minmax(0, 1fr);
    }

    .menu .cars {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
    }
}


</style>