//import JFile from 'jfile'
import $ from 'jquery'

function GetAllValuesFromFile(file){  
    var allText = [] ;
    $.get(file, function(data){
        console.log(data)
        var allText = data.split(/\r\n|\r|\n/);
    });
      
    console.log(allText)
    return allText;
    //var filevalues = new JFile(fileUrl);
    //return filevalues.lines;
}

export default GetAllValuesFromFile;