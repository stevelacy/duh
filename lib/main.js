var d = 'duh';


declare = {
  lesure: {
    data: {
      st: {
        f:{
          duh: function(type){
            if (type == 'dumb') {
              return d + ' dummy';
            }
            if (type == 'doge') {
              return d + ' doge';
            }
            if (type == 'troll') {
              return d + ' troll';
            }
            return d;
          }
        }
      }
    }
  }
};


module.exports = declare.lesure.data.st.f.duh;