var fs =require('fs');
fs.unlink('mynew2.txt',function(err){
    if (err)throw err;
    consolo.log('file deleted');

});
