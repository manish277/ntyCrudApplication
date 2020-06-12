var config = {
 
    URL: "http://127.0.0.1",
    API_PATH: "/",
    PORT: process.env.PORT || 3001,
    
    getAtlasDbString() {
      return "mongodb+srv://manish:manish123@cluster0-nd2fk.mongodb.net/test?retryWrites=true&w=majority"
    },
    getHTTPUrl: function() {
      return "http://" + this.URL + ":" + this.PORT;
    }
  };
  module.exports = config;