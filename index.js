'use strict';

var intersectionData;

function init() {
    $.ajax({
      url: 'http://app.toronto.ca/opendata/cart/traffic_signals.xml?v=1.0',
      // url: 'traffic_signals.xml',
      dataType: 'xml',
      // cache: false,  // What's the caching policy of the data from the server?
      error: function(xhr, errorText, errorObj) {
        error('Could not fetch or process open intersection data: ' + errorText);
      },
      success: initForm
    });
}

function initForm(data) {
  intersectionData = data;

  $('#cross-town-traffic').on('submit', getResults);
}

function getResults() {
  var cross1 = $('#cross1').text(),
    cross2 = $('#cross2').text();

  if (!cross1 || !cross2) {
    error('Missing a cross street');
  }

  findCrossStreet();
}

function error(text) {
  $('#error').text(text);
}

function findCrossStreet() {

}



init();

