var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CULT_BLD_Roof_Feature_A__1 = new ol.format.GeoJSON();
var features_CULT_BLD_Roof_Feature_A__1 = format_CULT_BLD_Roof_Feature_A__1.readFeatures(json_CULT_BLD_Roof_Feature_A__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CULT_BLD_Roof_Feature_A__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULT_BLD_Roof_Feature_A__1.addFeatures(features_CULT_BLD_Roof_Feature_A__1);
var lyr_CULT_BLD_Roof_Feature_A__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CULT_BLD_Roof_Feature_A__1, 
                style: style_CULT_BLD_Roof_Feature_A__1,
                popuplayertitle: "CULT_BLD_Roof_Feature_A_",
                interactive: true,
                title: '<img src="styles/legend/CULT_BLD_Roof_Feature_A__1.png" /> CULT_BLD_Roof_Feature_A_'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CULT_BLD_Roof_Feature_A__1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CULT_BLD_Roof_Feature_A__1];
lyr_CULT_BLD_Roof_Feature_A__1.set('fieldAliases', {'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_CULT_BLD_Roof_Feature_A__1.set('fieldImages', {'Entity': '', 'Level': '', 'Layer': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', });
lyr_CULT_BLD_Roof_Feature_A__1.set('fieldLabels', {'Entity': 'header label - always visible', 'Level': 'inline label - always visible', 'Layer': 'inline label - visible with data', 'Color': 'hidden field', 'Linetype': 'inline label - always visible', 'Elevation': 'inline label - visible with data', 'LineWt': 'header label - always visible', 'RefName': 'header label - always visible', });
lyr_CULT_BLD_Roof_Feature_A__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});