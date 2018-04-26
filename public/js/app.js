/* CLIENT-SIDE JS
 *
 * You will need this file for doing PUT or DELETE requests.
 * As an example, here is how one might implement a delete button
 * 1. Create a big red button that says delete. Give it an id.
 * 2. Listen for the click event on the button (using the id you made for it).
 * 3. In the function that executes on that click event, make an AJAX request to the server to
 *    delete the album. (Note: you will need the album id as part of the url)
 * 4. Make the route on the server side that accepts this request. Make sure it is getting there.
 * 5. Perform the deletion in the database
 *
 */

 /* hard-coded data! */
 var sampleAlbums = [];
 sampleAlbums.push({
              artistName: 'Ladyhawke',
              name: 'Ladyhawke',
              releaseDate: '2008, November 18',
              genres: [ 'new wave', 'indie rock', 'synth pop' ]
            });
 sampleAlbums.push({
              artistName: 'The Knife',
              name: 'Silent Shout',
              releaseDate: '2006, February 17',
              genres: [ 'synth pop', 'electronica', 'experimental' ]
            });
 sampleAlbums.push({
              artistName: 'Juno Reactor',
              name: 'Shango',
              releaseDate: '2000, October 9',
              genres: [ 'electronic', 'goa trance', 'tribal house' ]
            });
 sampleAlbums.push({
              artistName: 'Philip Wesley',
              name: 'Dark Night of the Soul',
              releaseDate: '2008, September 12',
              genres: [ 'piano' ]
            });
 /* end of hard-coded data */




 $(document).ready(function() {
   console.log('app.js loaded!');
   $.get('/api/albums').success(function (albums) {
     albums.forEach(function(album) {
       renderAlbum(album);
     });

   });
 });





 // this function takes a single album and renders it to the page
 function renderAlbum(album) {
   console.log('rendering album:', album);

   var albumHtml =
   "        <!-- one album -->" +
   "        <div class='row album' data-album-id='" + "HARDCODED ALBUM ID" + "'>" +
   "          <div class='col-md-10 col-md-offset-1'>" +
   "            <div class='panel panel-default'>" +
   "              <div class='panel-body'>" +
   "              <!-- begin album internal row -->" +
   "                <div class='row'>" +
   "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
   "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
   "                  </div>" +
   "                  <div class='col-md-9 col-xs-12'>" +
   "                    <ul class='list-group'>" +
   "                      <li class='list-group-item'>" +
   "                        <h4 class='inline-header'>Album Name:</h4>" +
   "                        <span class='album-name'>" + album.name + "</span>" +
   "                      </li>" +
   "                      <li class='list-group-item'>" +
   "                        <h4 class='inline-header'>Artist Name:</h4>" +
   "                        <span class='artist-name'>" + album.artistName + "</span>" +
   "                      </li>" +
   "                      <li class='list-group-item'>" +
   "                        <h4 class='inline-header'>Released date:</h4>" +
   "                        <span class='album-name'>" + album.releaseDate + "</span>" +
   "                      </li>" +
   "                    </ul>" +
   "                  </div>" +
   "                </div>" +
   "                <!-- end of album internal row -->" +

   "              </div>" + // end of panel-body

   "              <div class='panel-footer'>" +
   "              </div>" +

   "            </div>" +
   "          </div>" +
   "          <!-- end one album -->";

   $('#albums').prepend(albumHtml);
  }

// Sanity Check
console.log('w00t! from js/app.js');
