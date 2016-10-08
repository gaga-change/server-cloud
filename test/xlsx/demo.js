/**
 * Created by dong on 2016/10/1.
 */
var XLSX = require('xlsx');
//console.log(XLSX)
var workbook = XLSX.readFile('./data.xls');
//console.log(workbook.Sheets);
//console.log(workbook.Sheets['Sheet1']);
var json=  XLSX.utils.sheet_to_json(workbook.Sheets['本科生基本情况']);
json.map(function(ele,index){
   ele._id=ele['学号'];
});

console.log(json);
//console.log(XLSX.utils)