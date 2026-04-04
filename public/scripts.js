document.addEventListener("DOMContentLoaded" , () => {

    const boton = document.getElementById("btn");
    
    function pedotita(){
        let animando = false;

        document.getElementById("btn").addEventListener("click", () => {
            if (animando) return;

            // Crear el elemento dinámicamente
            const circulo = document.createElement("div");
            circulo.classList.add("circulo");
            document.body.appendChild(circulo);

            let x = 100;
            let y = 100;
            let dx = 4;
            let dy = 4;
            const tamaño = 50;

            animando = true;

            function mover() {
            const ancho = window.innerWidth;
            const alto = window.innerHeight;

            x += dx;
            y += dy;

            // Rebotes
            if (x + tamaño > ancho || x < 0) dx *= -1;
            if (y + tamaño > alto || y < 0) dy *= -1;

            circulo.style.left = x + "px";
            circulo.style.top = y + "px";

            requestAnimationFrame(mover);
            }

            mover();
                });

    }

    boton.addEventListener("click",pedotita)

} )