import './modules'
import { default as Main} from './components/main.ract'
import { default as moment} from 'moment'

console.log(`app.js has loaded!`)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/javascripts/serviceWorker.js')
  .then(function() {
    console.log("success")
  })
  .catch(function(err) {
    console.log(err);
  })
} else {
  console.log("no service worker")
}

var data = {
  search: {
    from: moment().toISOString()
  }
};

window.data = data

new Main({
  el: document.body,
  data: data
})

var $ = require('jquery')
var Bloodhound = require('typeahead.js')
var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `states` is an array of state names defined in "The Basics"
  local: ["Eins A","Einsundzwanzig A","Zwei","Drei","Vier"]
});

$('#inputSearchString').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},{
  name: 'numbers',
  source: states
})
