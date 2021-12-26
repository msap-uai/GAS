function onEdit() { //ejecuta frente a cambios
  // toma el valor de la celda checkbox de la celda e12
  var checkbox = SpreadsheetApp.getActiveSheet().getRange("e12").cell.getValue();
  // muestra el valor
  //Logger.log(rule);
  // muestra la hoja de nombre "Nueva" dependiendo si esta marcado o no
  if(rule == false){
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Nueva").hideSheet()
  }
  else{
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Nueva").showSheet()
  }
  
}
