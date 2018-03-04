geo2svg -w 960 -h 960  < /tmp/ireland.geojson  > /tmp/ie.svg
geoproject 'd3.geoMercator().rotate([120, 0]).fitSize([960, 960], d)'  /tmp/ireland.geojson > /tmp/ie.json
geo2svg -w 960 -h 960  < /tmp/ie.json  > /tmp/ie.svg
geo2topo -n tracts=ie.json ie.topo.json
       1459  geo2topo -n tracts=ie.json > ie.topo.json
        1460  geo2topo tracts=ie.json > ie.topo.json
toposimplify -p 1 -f ie.topo.json ie.simple.json
toposimplify -p 1 -f ie.topo.json > ie.simple.json
topoquantize 1e5 ie.simple.json > ie.quant.json

topo2geo tracts=- < ie.quant.json | geo2svg -w 960 -h 960  > ie.svg
#ndjson-split 'd.features' < ireland.geojson > ireland.ndjson
