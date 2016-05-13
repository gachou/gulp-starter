console.log("starting serviceworker")

self.addEventListener('install', function(event) {
  console.log("installed",event)
})

self.skipWaiting()
