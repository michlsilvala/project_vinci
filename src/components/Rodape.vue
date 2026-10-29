<script>
// import Logo from '../assets/logo.png'
export default {
    name: 'Rodape'
}
</script>

<template>
    <footer>
        <div class="footer-links">
            <figure>
                <img src="../assets/logo.png" alt="Logo">
            </figure>

            <div>
                <h4>Sobre</h4>
                <ul>
                    <li><a href="">A marca</a></li>
                    <li><a href="">História</a></li>
                    <li><a href="">Qualidade</a></li>
                    <li><a href="">Onde estamos</a></li>
                    <li><a href="">Investidores</a></li>
                </ul>
            </div>

            <div>
                <h4>Contato</h4>
                <ul>
                    <li><a href="">Fale conosto</a></li>
                    <li><a href="">Atendimento</a></li>
                    <li><a href="">SAC</a></li>

                </ul>
            </div>

            <div>
                <h4>Sac</h4>
                <ul>
                    <li><a href="">Canais Oficiais</a></li>
                    <li><a href="">Redes Sociais</a></li>
                    <li><a href="">Suporte</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-copy">
            <p>&copy; Copyright 2026</p>
            <p>Todos os Direitos Reservados</p>
        </div>

    </footer>

</template>

<style>
footer {
    background-color: #f8f9fa;
    /* height: 100px; */
    padding: 2rem 6rem;
    font-family: "Genos", sans-serif;
}

footer .footer-links {
    display: flex;
    justify-content: space-between;
}

footer .footer-links div h4 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 5px;
    margin-bottom: 30px;
    color: #000;

}

footer .footer-links div ul li {
    list-style-type: none;
    margin-bottom: 15px;
}

footer .footer-links div ul li a {
    font-size: 20px;
    text-decoration: none;
    color: #666666;
    transition: color 0.2s ease;
}

footer .footer-links div ul li a:hover {
    color: #E51837;
}

footer .footer-copy p {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 4px;
}
</style>