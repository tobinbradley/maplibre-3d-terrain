import './style.css'
import './maplibre-gl.css'
import './maplibre-gl'
import mapStyle from './osm-geoportal.json'

const mapOptions = {
  container: "map",
  style: mapStyle,
  hash: true,
  bounds: [
    [
      -81.058154,
      35.001622
    ],
    [
      -80.550364,
      35.515198
    ]
  ]
}

const map = new maplibregl.Map(mapOptions)

map.addControl(
  new maplibregl.NavigationControl({
    visualizePitch: true,
    showZoom: true,
    showCompass: true,
  })
);

map.addControl(
  new maplibregl.TerrainControl({
    source: "terrain_source",
    exaggeration: 1,
  })
);
