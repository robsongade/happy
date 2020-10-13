import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerimg from './../images/map-marker.svg'
import './../styles/orphanages-map.css'

const url_map = process.env.REACT_APP_MAPBOX_TOKEN
                ?`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`:
                `https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`
function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerimg} alt="logo marker happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estãoesperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Santa Terezinha</strong>
                    <span>Belo Horizonte</span>
                </footer>
            </aside>

           
            <Map 
                center={[-19.8716463,-44.010583]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
            >
                <TileLayer url={url_map} />
            </Map>
            
            <Link to="/app" className="create-orphanage">
                <FiPlus size="32" color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap