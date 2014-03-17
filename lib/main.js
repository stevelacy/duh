var d = 'duh';


declare = {
  lesure: {
    data: {
      st: {
        f:{
          duh: function(type){
            if(type) return d + ' ' + type;
            return d;
          }
        }
      }
    }
  }
};


module.exports = declare.lesure.data.st.f.duh;