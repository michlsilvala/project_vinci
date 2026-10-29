<template>
        <main>
        <section class="s1">
            <figure>
                <!-- <img src="./assets/Model_04 1.png" alt=""> -->
                <img src="../assets/secao1/Model_04 1.png" alt="">
            </figure>
            
            <div class="ttl">
                <h2>Vinci Model V2</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                <div class="btns">
                    <button class="bt1">Modelos</button>
                    <button class="bt2">Test Drive</button>
                </div>
                
            </div>
            <div class="info">
                    <span class="ttl-mot">Tecnologia Aliada ao Futuro</span>
                    <div class="list">
                        <div class="mot">
                            <span class="values1">520 KM</span>
                            <span class="values2">Com 1 Carga</span>
                        </div>
                        <div class="mot">
                            <span class="values1">2.800 RPM</span>
                            <span class="values2">De Torque</span>
                        </div>
                        <div class="mot">
                            <span class="values1">10 Anos</span>
                            <span class="values2">Garantia</span>
                        </div>
                    </div>
                </div>
        
        </section>

        <section class="s2">
            <figure class="f1">
                <!-- <img src="./assets/secao02/Rectangle 6.png" alt=""> -->
                <img src="../assets/secao02/Rectangle 6.png" alt="">
            </figure>
            <div class="articles">
                <article>
                    <h3>Recarga Rápida</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fugit quaerat facere dolore quam eius blanditiis hic maxime. Omnis voluptatum exercitationem aliquam fugit, </p>
                    <img src="../assets/secao02/Rectangle 7 (3).png" alt="">
                </article>
                <article>
                    <h3>Painel de Instrumentos</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fugit quaerat facere dolore quam eius blanditiis hic maxime. Omnis voluptatum exercitationem aliquam fugit, </p>
                    <img src="../assets/secao02/Rectangle 7 (2).png" alt="">
                </article>
                <article>
                    <h3>Pontos de Recarga</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fugit quaerat facere dolore quam eius blanditiis hic maxime. Omnis voluptatum exercitationem aliquam fugit, </p>
                    <img src="../assets/secao02/Rectangle 7 (1).png" alt="">
                </article>
                <article>
                    <h3>Design Premiado</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fugit quaerat facere dolore quam eius blanditiis hic maxime. Omnis voluptatum exercitationem aliquam fugit, </p>
                    <img src="../assets/secao02/Rectangle 7.png" alt="">
                </article>
            </div>
        </section>
        <section class="s3">
            <div class="container">
                <div class="left">
                    <h3>Vinci Model V2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas cumque, necessitatibus autem dolore quod quam labore vitae enim expedita esse? </p>
                </div>
                <div class="right">
                    <ol type="A">
                        <li>Retrovisores Inteligentes</li>
                        <li>Rodas de Liga Leve</li>
                        <li>Reconhecimento de Digital</li>
                        <li>Sensor de Proximidade</li>
                        <li>Antena 5G</li>
                        <li>Design Sofisticado</li>
                        <li>Abertura Automática</li>
                        <li>Camera de Estacionamento</li>
                    </ol>
                </div>
            </div>

            <figure>
                <img src="../assets/secao03/Model_04 1.png" alt="">
            </figure>
        </section>

        <section class="s4">
            
                <h3>FAQ</h3>
                <p>Perguntas frequentes</p>

                <ul>
                    <li><a href="#">Qual é a autonomia real da bateria em diferentes condições de condução? <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Quanto tempo o carro leva para carregar em tomadas residenciais e em carregadores rápidos? <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Como funciona a infraestrutura de recarga para viagens de longa distância? <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Qual é o tempo de garantia da bateria e qual a sua vida útil estimada? <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Quais são as principais economias em manutenção e impostos comparado a um carro a combustão? <i class="fa-solid fa-chevron-down"></i></a></li>

                </ul>
            
        </section>
        



        
    </main>
</template>

<style scoped>
*:not(i) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Genos", sans-serif;
}

/* Menu dos viculos do header */


.s1 {

    display: flex;
    flex-direction: column;
    align-items: center;   
    
    /* padding: 0 6rem; */
}

.s1 .ttl {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    margin: 4rem 0;
}


.s1 .ttl h2 {
    font-family: "Genos", sans-serif;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 72px;
    font-weight: 400;
}

.s1 .ttl p {
    width: 60%;
    text-align: center;
    line-height: 1.9;
    font-size: 20px;
     font-family: "Host Grotesk", sans-serif;
     color: #666666;
    /* margin: 0 auto; */
}

.btns button {
    padding: 1.2rem 7rem;
    font-size: 20px;
    text-transform: uppercase;
    
    border-radius: 8px;
    font-weight: 600;
    margin-right: 5rem;
    letter-spacing: 2px;
}

.bt1 {
    background-color: #E51837;
    border: 2px solid #E51837;
    color: white;
}

.bt2 {
    background-color: white;
    border: 2px solid #000;
}

.info {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 4rem;
}

.info .list { 
    display: flex;
    justify-content: space-around;
    
    
}

.ttl-mot {
    text-align: center;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 30px;
    letter-spacing: 2px;
    color: #666666;
}

.list {

}

.mot {
    display: flex;
    flex-direction: column;
    /* margin: 0 50px; */
    /* margin-right: 10rem; */
}

.mot .values1 {
    font-size: 72px;
    font-weight: 300;

}

.mot .values2 {
    font-size: 24px;
    font-weight: 200;
    text-transform: uppercase;
}

.info div span {
    text-align: center;
}

/* fim seção 1 */

/* Seção 2 */

.s2 .f1 img {
    width: 100%;
    padding: 0 2rem;
}

.s2 .articles {
    display: flex;
    margin-top: 2.5rem;

}

.s2 .articles article {
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    flex-direction: column;
    gap: 2rem;

}

.s2 .articles article h3 {
    text-transform: uppercase;
    font-size: 26px;
    padding: 0 1.4rem;
    font-weight: 500;
    letter-spacing: 1px;
}

.s2 .articles article p {
    padding: 0 1.4rem;
    font-family: "Host Grotesk", sans-serif;
    font-size: 16px;
    line-height: 1.9;
    color: #979797;
    font-weight: 600;
    letter-spacing: 2px;
}


.s2 .articles img {
    width: 100%;
    margin-top: auto;
}

/* Fim da seção 2 */

.s3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-bottom: 1px solid #ccc; */
}
.s3 .container {
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;
}

.left h3 {
    font-size: 42px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.left p {
    font-size: 18px;
    line-height: 1.9;
    color: #666666;
    width: 50%;
}

.right ol {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 1rem 3rem;
    font-size: 16px;
    color: #666666;
    width: 500px;
    list-style: none;
    padding: 0;
    counter-reset: item;
}

.right ol li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    counter-increment: item;
}

.right ol li::before {
    content: counter(item, upper-alpha);
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
/* Seção 3   */

/* secao 4 */

.s4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0 6rem 4rem 6rem;
    border-bottom: 1px solid #ccc;
}

.s4 h3 {
    font-size: 42px;
}

.s4 p {
    font-size: 26px;
    color: #979797;
    letter-spacing: 2px;
    font-weight: 500;
}

.s4 ul {
    list-style: none;
}

.s4 ul li {
    font-size: 26px;
    
    text-transform: uppercase;
    letter-spacing: 1px;

    display: flex;
    justify-content: space-between;
    gap: 5rem;
    margin-bottom: 30px;
}

.s4 ul li a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    color: #1A1A1A;
    transition: color 0.2s ease;
}

.s4 ul li a:hover {
    color: #E51837;
}

.s4 ul li a i {
    margin-left: 50px;
}





</style>