module.exports=function(app){
    var dataSource=app.dataSources.bricksdb;
    dataSource.autoupdate(null,function(err){
        if (err) throw err;
    });
};

// module.exports=function(app){

// 	var ds = app.datasources.db;
// 	ds.autoupdate(null, function(err) {
// 	  if (err) throw err;
// 	  console.log('Finished migration');
// 	  ds.disconnect();
// 	});
// };

// module.exports = function(app){
//     var dataSource = app.dataSources.db;
//     dataSource.autoupdate(null, function(err) {
//         if (err) return;
//     });
// };
