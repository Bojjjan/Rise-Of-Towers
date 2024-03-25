(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Map1Data",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 10, 34, 35, 36, 36, 34, 35, 36, 34, 35, 36, 12, 38, 38, 38, 38, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 38, 38, 38, 38, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 13, 1, 1, 2, 3, 4, 2, 3, 4, 5, 1, 9, 38, 38, 38, 38, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 21, 1, 9, 38, 38, 38, 38, 38, 38, 13, 1, 17, 38, 38, 38, 38, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 29, 1, 17, 38, 38, 38, 38, 38, 38, 21, 1, 25, 38, 38, 38, 38, 38, 38, 38, 38,
            34, 35, 36, 35, 36, 37, 1, 9, 38, 38, 38, 38, 38, 38, 29, 1, 9, 38, 38, 38, 10, 35, 34, 35, 36,
            1, 1, 1, 1, 1, 1, 1, 17, 38, 38, 38, 38, 38, 38, 21, 1, 9, 38, 38, 38, 21, 1, 1, 1, 1,
            2, 3, 4, 4, 2, 3, 4, 28, 38, 38, 10, 35, 36, 36, 37, 1, 17, 38, 38, 38, 21, 1, 1, 2, 3,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 21, 1, 1, 1, 1, 1, 25, 38, 38, 38, 13, 1, 9, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 21, 1, 1, 2, 3, 4, 28, 38, 38, 38, 21, 1, 17, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 21, 1, 17, 38, 38, 38, 38, 38, 38, 38, 29, 1, 9, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 21, 1, 17, 38, 38, 38, 38, 38, 38, 38, 29, 1, 17, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 21, 1, 33, 36, 34, 35, 36, 34, 35, 36, 37, 1, 25, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 26, 3, 4, 2, 3, 4, 2, 3, 2, 3, 4, 3, 28, 38, 38,
            38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
         "height":20,
         "id":1,
         "name":"Background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 0, 0, 81, 81, 81, 0, 0, 0, 0,
            0, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0,
            101, 81, 81, 81, 0, 0, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 0, 0, 0, 81, 81, 81, 81, 81, 0, 81, 81, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 81, 81, 81, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 80, 0, 0,
            0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 101, 0, 0,
            0, 0, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 77, 0, 0, 0, 0, 0, 97, 97, 0, 0, 0, 77, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77, 77, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 82, 82, 0, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 82, 0, 82, 82, 82, 77, 0, 0, 0, 0, 0, 0, 0, 0, 77, 77, 0, 0, 0, 0, 0, 80,
            0, 0, 0, 101, 82, 0, 82, 82, 77, 77, 0, 0, 0, 0, 0, 0, 0, 77, 0, 0, 0, 0, 0, 101, 0,
            0, 0, 82, 82, 82, 0, 82, 82, 0, 77, 0, 0, 0, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 82, 0, 82, 82, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 82, 82, 82, 82, 82, 82, 82, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 80, 80, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":3,
         "name":"Grass",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":6,
         "name":"TowerAllowed",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 109, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":4,
         "name":"Misc",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 134, 0,
            134, 0, 0, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            109, 134, 0, 76, 76, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 76, 0, 139, 0, 0, 0, 0, 134, 0, 70, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            134, 0, 0, 0, 0, 0, 134, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 134, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141,
            0, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0,
            0, 0, 0, 0, 134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0,
            84, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 76, 76, 70, 0,
            136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 0, 0],
         "height":20,
         "id":2,
         "name":"Decoration",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"path1, route 1",
         "objects":[
                {
                 "height":0,
                 "id":1,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-96,
                         "y":320
                        }, 
                        {
                         "x":192,
                         "y":320
                        }, 
                        {
                         "x":192,
                         "y":160
                        }, 
                        {
                         "x":512,
                         "y":160
                        }, 
                        {
                         "x":512,
                         "y":416
                        }, 
                        {
                         "x":384,
                         "y":416
                        }, 
                        {
                         "x":384,
                         "y":544
                        }, 
                        {
                         "x":672,
                         "y":544
                        }, 
                        {
                         "x":672,
                         "y":320
                        }, 
                        {
                         "x":896,
                         "y":320
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":7,
         "name":"path1, route 2",
         "objects":[
                {
                 "height":0,
                 "id":2,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-96,
                         "y":352
                        }, 
                        {
                         "x":224,
                         "y":352
                        }, 
                        {
                         "x":224,
                         "y":192
                        }, 
                        {
                         "x":480,
                         "y":192
                        }, 
                        {
                         "x":480,
                         "y":384
                        }, 
                        {
                         "x":352,
                         "y":384
                        }, 
                        {
                         "x":352,
                         "y":576
                        }, 
                        {
                         "x":704,
                         "y":576
                        }, 
                        {
                         "x":704,
                         "y":352
                        }, 
                        {
                         "x":896,
                         "y":352
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":8,
         "name":"path1, route 3",
         "objects":[
                {
                 "height":0,
                 "id":4,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-96,
                         "y":335
                        }, 
                        {
                         "x":207,
                         "y":335
                        }, 
                        {
                         "x":207,
                         "y":175
                        }, 
                        {
                         "x":495,
                         "y":176
                        }, 
                        {
                         "x":496,
                         "y":400
                        }, 
                        {
                         "x":369,
                         "y":400
                        }, 
                        {
                         "x":369,
                         "y":559
                        }, 
                        {
                         "x":687,
                         "y":560
                        }, 
                        {
                         "x":688,
                         "y":335
                        }, 
                        {
                         "x":897,
                         "y":336
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":9,
 "nextobjectid":5,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"FieldsTileset.tsx"
        }, 
        {
         "firstgid":65,
         "source":"Position.tsx"
        }, 
        {
         "firstgid":67,
         "source":"Other.tsx"
        }, 
        {
         "firstgid":135,
         "source":"Rocks.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":25
});