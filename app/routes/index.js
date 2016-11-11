import Ember from 'ember';

console.log("yo");

export default Ember.Route.extend({
  actions: {
    test: function() {
      console.log("test function");
    },
    confirm: function(data) {
      $.ajax({
        data: data,
        method: 'GET',
        url: 'http://search.twitter.com/search.json?silver+linings'
      }).then(res => {
        console.log("== res ===== start output =====")
        console.log(res)
        console.log("== res ====== end output ======")
      })
    }
  }
});

/*

xhr.setRequestHeader('Authorization','OAuth oauth_consumer_key="HdFdA3C3pzTBzbHvPMPw", oauth_nonce="4148fa6e3dca3c3d22a8315dfb4ea5bb", oauth_signature="uDZP2scUz6FUKwFie4FtCtJfdNE%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp= "1359955650", oauth_token, "1127121421-aPHZHQ5BCUoqfHER2UYhQYUEm0zPEMr9xJYizXl", oauth_version="1.0"');

*/
