self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('fetch', function(event) {
  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(
      fetch('//www.medium.co.uk/images/itachi.jpg', {
        mode: 'no-cors'
      })
    );
  }
});

self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'beAnnoying':
      let result = beAnnoying();
      self.postMessage(result);
      break;
    default:
      self.postMessage('Unknown command');
  }
}, false);

function beAnnoying() {
  let sum = 0;
  for(let i = 0; i < 100000000000; i++) {
    sum += i;
    // for(let j = 0; j < 999999999; j++) { 
    //   for(let k = 0; k < 999999999; k++) {
        // console.log('I'
        //  + ' am ' 
        //  + ' being ' 
        //  + ' vvvv ' + 
        //  'annoying'
        //  );
      // }
    // }
  }
  return 'done being annoying (the answer was ' + sum + ')';
}