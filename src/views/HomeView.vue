<template>
             <main>
        <section class="s1">
                <div class="d">
                    <h2>VINCI MODEL V3</h2>
                    <div class="par">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolores amet eligendi ex </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolores amet  </p>
                    </div>

                    <div class="modelos">
                        <a href="#" class="bt1 b">MODELOS</a>
                        <a href="#" class="bt2 b">TEST DRIVE</a>
                    </div>
                </div>
        </section>
        <section class="s2">
            <div class="s2-div1">
                <!-- Trocar cada div por um article -->
                <div class="s2-div">
                    <div class="s2-div3">
                        <h3>VINCI<br>MODEL V2</h3>
                        <div class="div-list">
                            <ul class="list1">
                                <li>Potência</li>
                                <li>Autonomia:</li>
                                <li>Peso:</li>
                                <li>Tecnologia:</li>
                            </ul>
                            <ul class="list2">
                                <li>300 cavalos</li>
                                <li>500km por carga</li>
                                <li>1.500 kg</li>
                                <li>Gps e Smartik</li>
                            </ul>
                        </div>
                    </div>
                    <figure>
                        <img src="../assets/secao1/Rectangle 3 (1).png" alt="Vinci Model V2">
                    </figure>
                </div>
                <div class="txt-s2">
                    <p>A SUV mais robusta da categoria</p>
                    <a href="#">CONHEÇA</a>
                </div>
            </div>

            <div class="s2-div1">
                <div class="s2-div">
                    <div class="s2-div3">
                        <h3>VINCI<br>MODEL V2</h3>
                        <div class="div-list">
                            <ul class="list1">
                                <li>Potência</li>
                                <li>Autonomia:</li>
                                <li>Peso:</li>
                                <li>Tecnologia:</li>
                            </ul>
                            <ul class="list2">
                                 <li>300 cavalos</li>
                                <li>500km por carga</li>
                                <li>1.500 kg</li>
                                <li>Gps e Smartik</li>
                            </ul>
                        </div>
                    </div>
                    <figure>
                        <img src="../assets/secao1/Rectangle 3.png" alt="Vinci Model V2">
                    </figure>
                </div>
                <div class="txt-s2">
                    <p>A SUV mais robusta da categoria</p>
                    <a href="#">CONHEÇA</a>
                </div>
            </div>
        </section>

        <section class="s3">
            <figure><img src="../assets/secao1/carro_secao_3.png" alt="carro"></figure>
            <div class="s3-links">
                <a href="#">Agende um test drive <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="#">Ver ofertas <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="#">Encontre uma loja <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
            </div>
            <figure>
                <img src="../assets/secao1/Rectangle 5.png" alt="">
            </figure>
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


.s1 {
    min-height: 80vh;
    /* background-image: url('../assets/secao1/car-banner-1 1.png'); */
    background-image: url('../assets/secao1/car-banner-1 1.png');
    background-size: cover;
    background-position: center;
    color: white;
}

.s1 .d {
    display: flex;
    min-height: 80vh;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
    padding: clamp(32px, 6vw, 80px) clamp(20px, 5vw, 50px);
}

.s1 .d h2 {
    font-size: clamp(40px, 7vw, 72px);
    font-weight: 400;
}

.s1 .d p {
    font-size: 20px;
}

.s1 .d .par p {
    margin-bottom: 5px;
}

.s1 .modelos {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

@media (max-width: 600px) {
    .s1,
    .s1 .d {
        min-height: 70vh;
    }

    .s1 .d p {
        font-size: 18px;
    }
}

.b {
    text-decoration: none;
    color: white;
    padding: 12px 60px;
    border-radius: 3px;
    border: none;
    font-size: 20px;
}

.bt1 {
    background-color: #E51837;
    border: 1px solid #E51837;
    transition: background-color 0.3s, border 0.3s;
}

.bt1:hover {
    background-color: #c7152b;
    border: 1px solid #c7152b;
    transition: background-color 0.3s, border 0.3s;
}

.bt2 {
    background-color: rgba(0, 0, 0, 0.0);
    border: 1px solid rgba(255, 255, 255, 0.7);
    transition: background-color 0.3s, border 0.3s;
}

.bt2:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.9);
    transition: background-color 0.3s, border 0.3s;
}

.s2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
    padding: 4rem clamp(1.25rem, 5vw, 3rem);
}

.s2-div1 {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
}

.txt-s2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.s2-div3 h3 {
    font-size: 26px;
    font-weight: 400;
    letter-spacing: clamp(3px, 0.8vw, 12px);
}

.div-list {
    display: flex;
    justify-content: space-between;
    gap: clamp(1rem, 3vw, 3rem);
}

.list1 {
    font-size: 18px;
}

.list2 {
    font-size: 18px;
    color: #979797;
}

.list2 li:last-child {
    white-space: nowrap;
}

.div-list ul li {
    list-style-type: none;
}

.s2-div3 {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.s2-div figure img {
    display: block;
    width: 100%;
    height: auto;
}

.txt-s2 {
    font-size: 20px;
}

.txt-s2 a {
    color: #1a1a1a;
    text-decoration: none;
    border-bottom: 1px solid #000;
    transition: color 0.2s, border-color 0.2s;
}

.txt-s2 a:hover {
    color: #e51837;
    border-color: #e51837;
}

@media (max-width: 760px) {
    .s2 {
        grid-template-columns: minmax(0, 1fr);
        gap: 2.5rem;
    }
}

/* secao 3 */

.s3 .s3-links{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}

.s3 .s3-links a {
    text-decoration: none;
    font-size: 6.5rem;
    font-family: "Genos", sans-serif;
    color: #222;
    font-weight: 500;
    letter-spacing: 6px;
    font-size: 2.5rem;
    text-transform: uppercase;
    transition: color 0.2s ease;
}

.s3 .s3-links a:hover {
    color: #E51837;
}

.s3 .s3-links a {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.s3 .s3-links a i {
    font-size: 2.5rem;
    margin-top: 10px;

}

.s3 figure {
    display: flex;
    justify-content: center;

}

.s3 figure img {
    width: 100%;
}

.s3-links {
    /* justify-content: flex-start; */
    
    gap: 1rem;    
    padding: 2rem 5rem;
}




</style>