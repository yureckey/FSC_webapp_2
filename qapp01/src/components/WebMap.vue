<template>
  <div style="padding: 0; margin: 0; width: 100%; height: 100%; min-height:400px;"></div>
</template>

<script>
import { loadModules } from 'esri-loader'

export default {
  name: 'web-map',
  data () {
    return {
      sites: [{
        type: 'point',
        geometry: {
          type: 'point',
          longitude: -40,
          latitude: -8
        },
        attributes: {
          ObjectID: 1,
          name: 'Name 1',
          desc: 'Desc 1',
          type: 'Type 1'
        }
      },
      {
        type: 'polygon',
        geometry: {
          type: 'polygon',
          rings: [
            [[-40.162649, -8.391989],
              [-40.127973, -8.359381],
              [-40.041456, -8.350889],
              [-40.050382, -8.442932],
              [-40.110807, -8.436820],
              [-40.162649, -8.391989]
            ],
            [[-40.868293, -8.758140],
              [-40.755683, -8.637323],
              [-40.586768, -8.671264],
              [-40.437080, -8.652936],
              [-40.404121, -8.790035],
              [-40.281211, -8.917586],
              [-40.322410, -9.034242],
              [-40.621650, -9.091472],
              [-40.735633, -8.858158],
              [-40.868293, -8.758140]
            ]
          ]
        },
        attributes: {
          ObjectID: 2,
          name: 'object Name2',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          desc2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          desc3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      }]
    }
  },
  methods: {
    all_layers_loaded: function () {
      // something
      this.$root.$emit('all_layers_loaded')
    }
  },
  mounted () {
    loadModules([
      'esri/WebMap',
      'esri/Map',
      'esri/widgets/BasemapGallery',
      'esri/widgets/BasemapToggle',
      'esri/widgets/Feature',
      'esri/layers/FeatureLayer',
      'esri/widgets/FeatureTable',
      'esri/widgets/LayerList',
      'esri/layers/GeoJSONLayer',
      // 'esri/layers/CSVLayer',
      // 'esri/layers/KMLLayer',
      'esri/widgets/CoordinateConversion',
      'esri/widgets/Measurement',
      'esri/widgets/DistanceMeasurement2D',
      'esri/widgets/AreaMeasurement2D',
      'esri/views/MapView',
      'esri/Graphic',
      'esri/layers/GraphicsLayer',
      'esri/widgets/ScaleBar',
      'esri/widgets/Bookmarks',
      'esri/widgets/Expand',
      'esri/widgets/Search',
      'esri/widgets/Directions'
    ], { css: true })
      .then(([WebMap, ArcGISMap, BasemapGallery, BasemapToggle, Feature, FeatureLayer, FeatureTable, LayerList, GeoJSONLayer, CoordinateConversion, Measurement, DistanceMeasurement2D, AreaMeasurement2D, MapView, Graphic, GraphicsLayer, ScaleBar, Bookmarks, Expand, Search, Directions]) => {
        /* const kmlLayer = new KMLLayer({
          url: 'https://dservices8.arcgis.com/32TQOipPYLOeSkYk/arcgis/services/Tree_loss_cluster/WFSServer?service=WFS&request=GetFeature&typename=Tree_loss_cluster&outputFormat=KML&BBOX=-53.22,-7.62,-45.26,15.96'
        }) */

        var that = this

        // bounding box set to Brasil
        const geojsonLayer = new GeoJSONLayer({
          url: 'https://dservices8.arcgis.com/32TQOipPYLOeSkYk/arcgis/services/Tree_loss_cluster/WFSServer?service=WFS&request=GetFeature&typename=Tree_loss_cluster&outputFormat=GEOJSON&BBOX=-53.22,-7.62,-45.26,15.96',
          title: 'Deforestation in Region'
          // copyright: "USGS Earthquakes",
          // popupTemplate: template,
          // renderer: renderer //optional
        })
        geojsonLayer.when(function () {
          console.log('geojsonLayer loaded')
          // this is heavies layer, so it's ok
          // this.all_layers_loaded()
          that.$root.$emit('all_layers_loaded')
        })
        // const features = [];
        /* const map = new WebMap({
          portalItem: { id: 'b01014c707494c5da35406aca5e1436d', title: 'custom title' }, // Casos de Covid19 no Brasil
          basemap: 'topo-vector',
          // portalItem: { id: '4748d82f0da94bef8888b4fa999f21d6' }, // brasil covid heatmap. old, not updated
          // { id: '1f9d63cb01bd44c081be529038f4a7ed' }, // { id: '21b5474378f949ca97872a1e34ba76b3' }, // it's not loading from arcgis online created map. message: "Unsupported layer type WFS"
          layers: [geojsonLayer]
        }) */

        const eqRenderer = {
          type: 'simple',
          field: 'mag',
          symbol: {
            type: 'simple-marker',
            color: 'gray',
            outline: {
              color: 'white'
            }
          },
          visualVariables: [
            {
              type: 'size',
              field: 'mag',
              stops: [
                {
                  value: 2.5,
                  size: '4px'
                },
                {
                  value: 8,
                  size: '40px'
                }
              ]
            }
          ]
        }
        // todo: dynamic area and dates
        // alternative https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=layers-geojson
        // using different url - https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson - how to boundbox it?
        const earthquakesLayer = new GeoJSONLayer({
          url: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-08-20&endtime=2020-08-25&&minlatitude=-35&minlongitude=-85&maxlatitude=16&maxlongitude=-30',
          title: 'Earthquakes in Region',
          // copyright: "USGS Earthquakes",
          popupTemplate: {
            title: '{title}',
            content: [
              {
                type: 'fields',
                fieldInfos: [
                  { fieldName: 'type' },
                  { fieldName: 'place' },
                  { fieldName: 'mag' },
                  { fieldName: 'time', format: { dateFormat: 'short-date-short-time' } },
                  { fieldName: 'url' },
                  { fieldName: 'alert' },
                  { fieldName: 'felt' },
                  { fieldName: 'cdi' },
                  { fieldName: 'mmi' },
                  { fieldName: 'status' },
                  { fieldName: 'dmin' },
                  { fieldName: 'rms' },
                  { fieldName: 'gap' },
                  { fieldName: 'magType' }
                ]
              }
            ]
          },
          renderer: eqRenderer
        })
        earthquakesLayer.when(function (res) {
          console.log('earthquakesLayer loaded', res)
          // "alert, cdi, code, detail, dmin, felt, gap, ids, mag, magtype, mmi, net, objectid, place, rms, sig, sources, status, time, title, tsunami, type, types, updated, url"
        })

        const map = new ArcGISMap({
          basemap: 'topo-vector',
          layers: [geojsonLayer, earthquakesLayer]
        })

        this.view = new MapView({
          container: this.$el, // 'viewDiv',
          map: map,
          center: [-50, 0],
          zoom: 5
        })

        var covidPopupTemplate = {
          // title: '{NOMEUF}', // it's too wide for some reason
          overwriteActions: true,
          content: function (feature) {
            var graphic, attributes, attributesArr = [], content
            graphic = feature.graphic
            attributes = graphic.attributes
            // console.log('attributes: ', attributes)
            for (var [key, value] of Object.entries(attributes)) {
              // console.log(key + ': ' + value)
              key = key.replace('_obitosNovos', ' new deaths').replace('_obitosAcumu', ' accumulated deaths').replace('_casosAcumu', ' accumulated cases').replace('_casosNovos', ' new cases')
              if (key !== 'NOMEUF' && key !== 'OBJECTID' && key !== 'UF1' && key !== 'letal') attributesArr.push(key + ': ' + value)
            }

            content = '<strong>' + attributes.NOMEUF + '</strong> (death rate: ' + ('' + attributes.letal).substr(0, 4) + '%) <br><br>' + attributesArr.slice(-28).reverse().join('<br>')
            // console.log('content: ', content)
            return content
          },
          outFields: ['*']
        }
        // set to Brasil cases
        const covidFeatLayer = new FeatureLayer({
          url: 'https://services3.arcgis.com/XZ39KTu1uWewj4of/arcgis/rest/services/Covid_BRa_WFL1/FeatureServer',
          title: 'COVID-19 cases',
          popupTemplate: covidPopupTemplate
        })
        covidFeatLayer.when(function () {
          console.log('covidFeatLayer loaded')
        })
        map.add(covidFeatLayer)
        // covidFeatLayer.when(function (res) {
        //   console.log('covidFeatLayer ', res)
        // })

        var basemapGallery = new BasemapGallery({
          view: this.view
        })
        // this.view.ui.add(basemapGallery, {
        //   position: 'bottom-left'
        // })
        var expand1 = new Expand({
          expandIconClass: 'esri-icon-collection',
          view: this.view,
          content: basemapGallery,
          expandTooltip: 'Basemap Gallery'
        })
        this.view.ui.add(expand1, 'bottom-left')

        // basemap gallery is better, I guess, more choice, although it's not user defined
        /* var toggle = new BasemapToggle({
          view: this.view,
          nextBasemap: 'hybrid'
        })
        this.view.ui.add(toggle, 'bottom-left') */

        // directions require user login to arcgis.online
        /* var directionsWidget = new Directions({
          view: this.view
        })
        var expandDirections = new Expand({
          expandIconClass: 'esri-icon-directions',
          view: this.view,
          content: directionsWidget,
          expandTooltip: 'Directions'
        })
        this.view.ui.add(expandDirections, 'top-left') */

        var ccWidget = new CoordinateConversion({
          view: this.view
        })
        // this.view.ui.add(ccWidget, 'bottom-right')
        var expand2 = new Expand({
          expandIconClass: 'esri-icon-cursor',
          view: this.view,
          content: ccWidget,
          expandTooltip: 'Coordinates Conversion Tool'
        })
        this.view.ui.add(expand2, 'bottom-right')

        const searchWidget = new Search({
          view: this.view
        })
        // this.view.ui.add(searchWidget, { position: 'top-left', index: 2 })
        var expandSearch = new Expand({
          expandIconClass: 'esri-icon-search',
          view: this.view,
          content: searchWidget,
          expandTooltip: 'Search Address'
        })
        this.view.ui.add(expandSearch, 'top-left')

        var scalebar = new ScaleBar({
          view: this.view
        })
        this.view.ui.add(scalebar, 'bottom-left')

        var layerList = new LayerList({
          view: this.view,
          listItemCreatedFunction: defineActions
        })
        function defineActions (event) {
          // console.log('defineActions: ', event)

          var item = event.item

          if (item.title === 'Applicant Company Sites') {
            item.actionsSections = [
              [
                {
                  title: 'Zoom to',
                  className: 'esri-icon-zoom-in-magnifying-glass',
                  id: 'zoomto'
                }
                /* {
                  title: 'Layer information',
                  className: 'esri-icon-description',
                  id: 'information'
                } */
              ]
            ]
          }
        }

        // var that = this // not sure it's proper way
        layerList.on('trigger-action', function (event) {
          // console.log('trigger-action: ', event)

          // var visibleLayer = graphLayer // USALayer.visible ? USALayer : censusLayer

          var id = event.action.id

          if (id === 'zoomto') {
            // that.view.goTo(visibleLayer.fullExtent)
            that.view.goTo([pointGraphic, polygonGraphic])
          }
        })

        this.view.ui.add(layerList, 'top-right')

        var measurementWidget1 = new DistanceMeasurement2D({
          view: this.view,
          unit: 'kilometers',
          label: 'Calculate Distance' // it's not working!
          // iconClass: 'esri-icon-zoom-in-magnifying-glass'
        })
        // this.view.ui.add(measurementWidget1, 'top-right')
        var expand3 = new Expand({
          expandIconClass: 'esri-icon-measure-line',
          view: this.view,
          content: measurementWidget1,
          expandTooltip: 'Measure Distance Tool'
        })
        this.view.ui.add(expand3, 'top-right')

        var measurementWidget2 = new AreaMeasurement2D({
          view: this.view,
          unit: 'square-kilometers',
          label: 'Calculate Area' // it's not working!
        })
        // this.view.ui.add(measurementWidget2, 'top-right')
        var expand4 = new Expand({
          expandIconClass: 'esri-icon-measure-area',
          view: this.view,
          content: measurementWidget2,
          expandTooltip: 'Measure Area Tool'
        })
        this.view.ui.add(expand4, 'top-right')

        // DATA begin

        var point = { type: 'point', longitude: -40, latitude: -8 }

        var markerSymbol = {
          type: 'simple-marker',
          color: [250, 0, 0, 0.5],
          outline: { color: [255, 255, 255], width: 1 }
        }

        var attrs1 = {
          ObjectID: 1,
          name: 'Name 1',
          desc: 'Desc 1',
          type: 'Type 1'
        }

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
          attributes: attrs1,
          popupTemplate: {
            title: '{name}',
            content: [
              {
                type: 'fields',
                fieldInfos: [
                  { fieldName: 'name' },
                  { fieldName: 'desc' },
                  { fieldName: 'type' }
                ]
              }
            ]
          }
        })

        // was used during debug process
        // Create a polygon geometry
        var polygon = {
          type: 'polygon',
          rings: [
            [[-40.162649, -8.391989],
              [-40.127973, -8.359381],
              [-40.041456, -8.350889],
              [-40.050382, -8.442932],
              [-40.110807, -8.436820],
              [-40.162649, -8.391989]
            ],
            [[-40.868293, -8.758140],
              [-40.755683, -8.637323],
              [-40.586768, -8.671264],
              [-40.437080, -8.652936],
              [-40.404121, -8.790035],
              [-40.281211, -8.917586],
              [-40.322410, -9.034242],
              [-40.621650, -9.091472],
              [-40.735633, -8.858158],
              [-40.868293, -8.758140]
            ]
          ]
        }

        var fillSymbol = {
          type: 'simple-fill',
          color: [250, 0, 0, 0.5],
          outline: { color: [255, 255, 255], width: 1 }
        }

        var attrs2 = {
          ObjectID: 2,
          name: 'object Name2',
          desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          desc2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          desc3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
        console.log(attrs2)

        var polygonGraphic = new Graphic({
          geometry: this.sites[1].geometry, // polygon,
          symbol: fillSymbol,
          attributes: this.sites[1].attributes, // attrs2
          popupTemplate: {
            title: '{name}',
            content: [
              {
                type: 'fields',
                fieldInfos: [
                  { fieldName: 'desc1' },
                  { fieldName: 'desc2' },
                  { fieldName: 'desc3' }
                ]
              }
            ]
          }
        })

        // DATA end

        // console.log(pointGraphic, polylineGraphic)
        // this.view.graphics.addMany([pointGraphic, polylineGraphic, polygonGraphic])

        var graphLayer = new GraphicsLayer({
          graphics: [pointGraphic, polygonGraphic],
          title: 'Applicant Company Sites'
        })
        map.add(graphLayer)

        // todo: this should be launched when both geojsonLayer and geometry loaded
        this.view.whenLayerView(geojsonLayer).then(function (layerView) {
          //
          var query = geojsonLayer.createQuery()
          query.geometry = polygon
          query.distance = 10
          query.units = 'kilometers'
          query.spatialRelationship = 'intersects'
          query.returnGeometry = true
          // query.outFields = ['POPULATION']

          geojsonLayer.queryFeatures(query)
            .then(function (res) {
              console.log('query res: ', res)
              if (res.features && res.features.length > 0) {
                console.log('INTERSECTION DETECTED')
                // highlight will select ALL deforestaion polygon. Maybe use not exported geojson?
                /* if (highlight) {
                  highlight.remove()
                }
                highlight = layerView.highlight(res.features) */
              }
            })
          //
        })
      })
  },
  beforeDestroy () {
    if (this.view) {
      // destroy the map view
      this.view.container = null
    }
  }
}

</script>

<style>
/* esri styles */
/* @import url("https://js.arcgis.com/4.16/esri/themes/light/main.css" ); */

/*#viewDiv {
  padding: 0;
  margin: 0;
  height: 70vh;
  width: 100%;
}
.container {
  height: 300px;
  width: 100%;
}*/

/*div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}*/

.esri-view-root {
  height: calc(100vh - 350px);
}
</style>
