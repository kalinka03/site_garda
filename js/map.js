$(function () {
    city_map();
});

//
// function city_map() {
//
//     var center = [45.671119, 10.744817];
//     // var markerImage =  "img/city/block3/Map.svg";
//     var markerImage =  new google.maps.MarkerImage(
//         "img/city/block3/Map.svg",
//         null, /* size is determined at runtime */
//         null, /* origin is 0,0 */
//         null, /* anchor is bottom center of the scaled image */
//         new google.maps.Size(62, 88)
//
//         );
//
//
//
//
//
//     var contentString = '<div id="content-city">' +
//         '<div id="siteNotice">' +
//         '</div>' +
//         '<h1 id="firstHeading" class="firstHeading">Дезенцано дель Гарда</h1>' +
//         '<div id="bodyContent">' +
//         '<img src="img/city/block3/foto-sity.png"> '+
//         '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. </p>' +
// '<a href="#">Узнать больше</a> '+
//         '</div>' +
//         '</div>';
//     $('#test')
//         .gmap3({
//             center: center,
//             zoom: 10,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         })
//
//
//         // .marker({
//         // 	position:[45.7923178,10.6325978],
//         // 	icon: {
//         // 		url: "img/city/block3/metka.png"
//         // 	}
//         // })
//         .marker(
//             {
//                 position: [45.892706, 10.845299], icon: markerImage
//             })
//
//         //
//         // .marker([
//         //     {
//         //         position: [45.892706, 10.845299], icon: markerImage
//         //     },            {
//         //         position: [45.7693467, 10.7553471], icon: markerImage
//         //     }])
//
//
//
//
//
//
//
//         //
//         // .marker([
//         //     {
//         //         position: [45.7693467, 10.7553471], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.610498, 10.702709], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.8198421, 10.7796219], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.4167185, 10.589706], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         //
//         // .marker([
//         //     {
//         //         position: [45.437381, 10.683435], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.455503, 10.621627], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         //
//         // .marker([
//         //     {
//         //         position: [45.673188, 10.592276], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         //
//         //
//         // .marker([
//         //     {
//         //         position: [45.623257, 10.561723], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.605205, 10.5141089], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.687863, 10.657001], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.581527, 10.714323], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         //
//         // .marker([
//         //     {
//         //         position: [45.874672, 10.876397], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.541832, 10.739015], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         // .marker([
//         //     {
//         //         position: [45.4655466, 10.5395276, 1], icon: {
//         //             url: "img/city/block3/metka.png"
//         //         }
//         //     },])
//         .infowindow({
//             content: contentString
//         })
//         .then(function (infowindow) {
//             var map = this.get(0);
//             var marker = this.get(1);
//             marker.addListener('click', function () {
//                 infowindow.open(map, marker);
//             });
//         })
//     ;
// };


function city_map() {
    var locations = [
        ['Bondi Beach', 45.4655466, 10.5395276, 4],
        ['Coogee Beach', 45.541832, 10.739015, 5],
        ['Cronulla Beach', 45.874672, 10.876397, 3],
        ['Manly Beach', 45.581527, 10.714323, 2],
        ['Maroubra Beach', 45.687863, 10.657001, 1]
    ];
    var map;
    var markerImage = new google.maps.MarkerImage(
        "img/city/block3/Map.svg",
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(62, 88)
    );
    var markers = [];

    function init() {
        map = new google.maps.Map(document.getElementById('test'), {
            zoom: 10,
            center: new google.maps.LatLng(45.671119, 10.744817),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            marker: markerImage,
        });

        var num_markers = locations.length;
        for (var i = 0; i < num_markers; i++) {
            markers[i] = new google.maps.Marker({
                position: {lat: locations[i][1], lng: locations[i][2]},
                map: map,
                html: locations[i][0],
                id: i,
                marker: markerImage,
            });

            google.maps.event.addListener(markers[i], 'click', function () {
                var infowindow = new google.maps.InfoWindow({
                    id: this.id,
                    content: this.html,
                    position: this.getPosition()
                });
                google.maps.event.addListenerOnce(infowindow, 'closeclick', function () {
                    markers[this.id].setVisible(true);
                });
                this.setVisible(false);
                infowindow.open(map);
            });
        }
    }

    init();


}
