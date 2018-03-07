$(function () {
    city_map_hostel();
});


function city_map_hostel() {

    var center = [45.671119, 10.744817];
    // var markerImage =  "img/city/block3/Map.svg";
    var markerImage =  new google.maps.MarkerImage(
        "img/city/block3/Map.svg",
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(62, 88)
        );

    var contentString = '<div id="content-city">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Дезенцано дель Гарда</h1>' +
        '<div id="bodyContent">' +
        '<img src="img/city/block3/foto-sity.png">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. </p>' +
'<a href="#">Узнать больше</a> '+
        '</div>' +
        '</div>';
    $('#test2')
        .gmap3({
            center: center,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        })


        // .marker({
        // 	position:[45.7923178,10.6325978],
        // 	icon: {
        // 		url: "img/city/block3/metka.png"
        // 	}
        // })
        .marker(
            {
                position: [45.687863, 10.657001], icon: markerImage
            })

        //
        // .marker([
        //     {
        //         position: [45.892706, 10.845299], icon: markerImage
        //     },            {
        //         position: [45.7693467, 10.7553471], icon: markerImage
        //     }])







        //
        // .marker([
        //     {
        //         position: [45.7693467, 10.7553471], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.610498, 10.702709], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.8198421, 10.7796219], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.4167185, 10.589706], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        //
        // .marker([
        //     {
        //         position: [45.437381, 10.683435], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.455503, 10.621627], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        //
        // .marker([
        //     {
        //         position: [45.673188, 10.592276], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        //
        //
        // .marker([
        //     {
        //         position: [45.623257, 10.561723], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.605205, 10.5141089], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.687863, 10.657001], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.581527, 10.714323], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        //
        // .marker([
        //     {
        //         position: [45.874672, 10.876397], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.541832, 10.739015], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        // .marker([
        //     {
        //         position: [45.4655466, 10.5395276, 1], icon: {
        //             url: "img/city/block3/metka.png"
        //         }
        //     },])
        .infowindow({
            content: contentString
        })
        // .then(function (infowindow) {
        //     var map = this.get(0);
        //     var marker = this.get(1);
        //     marker.addListener('click', function () {
        //         infowindow.open(map, marker);
        //     });
        // })
    ;
};

