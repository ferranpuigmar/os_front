import React, { useEffect, useState } from 'react'
import Location, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

type Viewport = {
  width: string | number,
  height: string | number,
  latitude: number,
  longitude: number,
  zoom: number
}

type MapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const Map = ({ latitude, longitude, zoom = 16 }: MapProps) => {
  const [viewport, setViewport] = useState<Viewport | null>(null)

  console.log('latitude:', latitude)
  console.log('longitude:', longitude)

  useEffect(() => {
    setViewport({
      width: "90%",
      height: 500,
      latitude,
      longitude,
      zoom
    })
  }, [])

  if (!viewport) {
    return <p>...loading map</p>
  }

  return <Location
    initialViewState={{
      longitude: viewport?.longitude,
      latitude: viewport?.latitude,
      zoom: viewport?.zoom
    }}

    mapboxAccessToken="pk.eyJ1IjoicHVpZ21hciIsImEiOiJja2Q1cTRjMHoyOWc1MzBwZzUxNnBqZjgzIn0.Dl_LIKPYzM72_QZAE0wZWQ"
    style={{
      width: viewport?.width, height: viewport?.height, borderRadius: "10px", marginLeft: "auto",
      marginRight: "auto",
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <Marker longitude={viewport?.longitude} latitude={viewport?.latitude} anchor='bottom'>
      <img src="https://img.icons8.com/color/48/000000/marker.png" />
    </Marker>
    <NavigationControl />
  </Location>
}

export default Map