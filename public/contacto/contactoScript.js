document.addEventListener("DOMContentLoaded" , () => {

    const boton = document.getElementById("btn");
    
    const btn = document.getElementById("btn");
    const contenedor = document.getElementById("img");

    btn.addEventListener("click", () => {
      // Evita agregar múltiples imágenes (opcional)
      if (document.querySelector(".imagen-dinamica")) return;

      const img = document.createElement("img");
      img.src = "exitoso.jpg"; // podés cambiar la URL
      img.classList.add("imagen-dinamica");

      // Evento para agrandar/achicar
      img.addEventListener("click", () => {
        img.classList.toggle("grande");
      });

      contenedor.appendChild(img);
    });

    boton.addEventListener("click",rotarImagen)

} )

