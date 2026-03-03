import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "220px",
  borderRadius: "10px",
};

const sucursales = [
  {
    nombre: "Sucursal CDMX",
    direccion: "Av. Reforma 123, CDMX",
    telefono: "55 1234 5678",
    horario: "9:00 AM - 8:00 PM",
    lat: 19.4326,
    lng: -99.1332,
  },
  {
    nombre: "Sucursal Guadalajara",
    direccion: "Av. Vallarta 456, Guadalajara",
    telefono: "33 9876 5432",
    horario: "10:00 AM - 7:00 PM",
    lat: 20.6597,
    lng: -103.3496,
  },
  {
    nombre: "Sucursal Monterrey",
    direccion: "Av. Constitución 789, Monterrey",
    telefono: "81 5555 2222",
    horario: "9:00 AM - 9:00 PM",
    lat: 25.6866,
    lng: -100.3161,
  },
];

function Branches() {
  return (
    <div className="container">
      <h2>Nuestras Sucursales</h2>

      <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
        <div className="grid">
          {sucursales.map((sucursal, index) => (
            <div className="card" key={index}>
              <h3>{sucursal.nombre}</h3>

              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: sucursal.lat, lng: sucursal.lng }}
                zoom={14}
              >
                <Marker position={{ lat: sucursal.lat, lng: sucursal.lng }} />
              </GoogleMap>

              <p><strong>Dirección:</strong> {sucursal.direccion}</p>
              <p><strong>Teléfono:</strong> {sucursal.telefono}</p>
              <p><strong>Horario:</strong> {sucursal.horario}</p>
            </div>
          ))}
        </div>
      </LoadScript>
    </div>
  );
}

export default Branches;