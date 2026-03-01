import React from "react";
import "./Ofertas.css";

function Ofertas() {
  const juegosEnOferta = [
    {
      nombre: "Cyberpunk 2077",
      precioAnterior: 1399,
      precioActual: 899,
      imagen: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
    },
    {
      nombre: "God of War Ragnarök",
      precioAnterior: 1499,
      precioActual: 1099,
      imagen: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg"
    },
    {
      nombre: "Hogwarts Legacy",
      precioAnterior: 1399,
      precioActual: 999,
      imagen: "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-aa80981dd7c9b3f26b12606974a76dba_2560x1440-aa80981dd7c9b3f26b12606974a76dba"
    },
    {
      nombre: "Elden Ring",
      precioAnterior: 1499,
      precioActual: 1049,
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202501/2901/923cc29185d3522b6bee93f8babff37f7cb60b7a408472e7.jpg"
    },
    {
      nombre: "Marvel's Spider-Man 2",
      precioAnterior: 1499,
      precioActual: 1199,
      imagen: "https://cdn2.unrealengine.com/egs-marvelsspiderman2-insomniacgamesnixxessoftware-g1a-03-1920x1080-9216cc689d41.jpg?resize=1&w=480&h=270&quality=medium"
    },
    {
      nombre: "Assassin's Creed Mirage",
      precioAnterior: 1299,
      precioActual: 899,
      imagen: "https://preview.redd.it/whatd-you-guys-think-of-assassins-creed-mirage-v0-uh4lhiufg6ac1.jpeg?width=640&crop=smart&auto=webp&s=30a38b61cb9a17cb5521268818611a2578d13d46"
    },
    {
      nombre: "Mortal Kombat 1",
      precioAnterior: 1399,
      precioActual: 999,
      imagen: "https://m.media-amazon.com/images/M/MV5BZjgyNTYzMjItYzVmOS00OGM5LTg2Y2YtOTFkYjBkNjAzOTMxXkEyXkFqcGc@._V1_.jpg"
    },
    {
      nombre: "Street Fighter 6",
      precioAnterior: 1399,
      precioActual: 949,
      imagen: "https://www.streetfighter.com/6/assets/images/index/mv_edition_bg.jpg"
    }
  ];

  return (
    <div className="ofertas-container">
      <h2>Ofertas Especiales</h2>

      <div className="ofertas-grid">
        {juegosEnOferta.map((juego, index) => {
          const descuento = Math.round(
            ((juego.precioAnterior - juego.precioActual) /
              juego.precioAnterior) * 100
          );

          return (
            <div className="oferta-card" key={index}>
              <img src={juego.imagen} alt={juego.nombre} />
              <h3>{juego.nombre}</h3>

              <p className="precio-anterior">${juego.precioAnterior}</p>
              <p className="precio-actual">${juego.precioActual}</p>
              <p className="descuento">{descuento}% OFF</p>

              <button>Agregar al carrito</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ofertas;