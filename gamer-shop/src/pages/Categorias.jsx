import "./Categorias.css";

function Categorias() {
  const categorias = [
    {
      nombre: "Acción",
      descripcion: "Juegos rápidos donde importa la habilidad y los reflejos.",
      ejemplo: "Call of Duty",
      imagen: "https://wallpapercave.com/wp/wp11547718.jpg"
    },
    {
      nombre: "Aventura",
      descripcion: "Se enfocan en la historia y exploración.",
      ejemplo: "The Legend of Zelda: Breath of the Wild",
      imagen: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero"
    },
    {
      nombre: "RPG",
      descripcion: "Interpretas un personaje que mejora habilidades y progresa.",
      ejemplo: "Final Fantasy VII",
      imagen: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png"
    },
    {
      nombre: "Shooter",
      descripcion: "Pueden ser en primera persona (FPS) o tercera persona.",
      ejemplo: "Fortnite",
     imagen: "https://www.hdwallpapers.in/download/mega_city_fortnite_hd_fortnite-HD.jpg"
    },
    {
      nombre: "Estrategia",
      descripcion: "Requieren planificación y toma de decisiones.",
      ejemplo: "Age of Empires II",
      imagen: "https://i.ytimg.com/vi_webp/24VGBMYV0b4/maxresdefault.webp"
    },
    {
      nombre: "Deportes",
      descripcion: "Simulan deportes reales.",
      ejemplo: "EA Sports FC 24",
      imagen: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_EaSportsFc24_Uefa_image1600w.jpg"
    },
    {
      nombre: "Carreras",
      descripcion: "Competencias de velocidad.",
      ejemplo: "Mario Kart 8 Deluxe",
      imagen: "http://cdn.wccftech.com/wp-content/uploads/2017/04/mario_kart_8_deluxe_art.jpg"
    },
    {
      nombre: "Puzzle",
      descripcion: "Juegos de lógica y resolución de problemas.",
      ejemplo: "Tetris",
      imagen: "https://wallpapers.com/images/hd/tetris-99-first-game-px63kolmzixsl12k.jpg"
    },
    {
      nombre: "Terror",
      descripcion: "Buscan asustar o crear tensión.",
      ejemplo: "Five Nights at Freddy's",
      imagen: "https://www.fnafjuegos.com/images/logo.png"
    },
    {
      nombre: "Simulación",
      descripcion: "Recrean experiencias de la vida real o situaciones específicas.",
      ejemplo: "Assetto Corsa Competizione",
      imagen: "https://hb.imgix.net/49e28be1164bd5f8725edc4a5270d9ddcd780d1b.jpg?auto=compress,format&fit=crop&h=353&w=616&s=e64fe9247512be8dd4a3d41f20223605"
    }
  ];

  return (
    <div className="categorias-container">
      <h2>Categorías de Videojuegos</h2>

      <div className="categorias-grid">
        {categorias.map((cat, index) => (
          <div className="categoria-card" key={index}>
            <img src={cat.imagen} alt={cat.nombre} />
            <div className="contenido">
              <h3>{cat.nombre}</h3>
              <p>{cat.descripcion}</p>
              <span className="ejemplo">Ejemplo: {cat.ejemplo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;