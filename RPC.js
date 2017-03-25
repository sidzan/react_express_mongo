const URL = 'http://localhost:3000/';
const headers={
    "Accept": "application/json",
    "Content-Type": "application/json",
};

module.exports.execute = function(link,args,cb){
    var params=[];
    params.push(args)
    console.log("params are ",params)
    $.ajax({
      url:URL+link,
      method:'POST',
      dataType: "json",
      data:args,
      header:headers,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",      
      timeout:3000,
      success:function(data){
        console.log("Data",data)
        if (cb){return cb(null,data)}
      },
      error:function(e){
         console.log("errors",e)
        if (cb) {return cb(e,null)}
      }
    })
}
