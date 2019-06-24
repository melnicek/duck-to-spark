function convert() {
  var lines = $("#input_code").val().split("\n");

  var result = "#include \"DigiKeyboard.h\"\nvoid setup(){}\nvoid loop() {\n\tDigiKeyboard.sendKeyStroke(0);\n\tDigiKeyboard.delay(500);\n"

  $.each(lines, function(k){
    lines[k] = lines[k].trim();
    if(lines[k] != ""){
      if(lines[k].includes(" ")){
        var magic_word = lines[k].slice(0, lines[k].indexOf(" "));
        var value = lines[k].slice(lines[k].indexOf(" ") + 1, lines[k].lenght);
      }else{
        var magic_word = lines[k];
      }

      if(magic_word == "REM"){
        result += "\t// " + value + "\n";
      }else if(magic_word == "DELAY"){
        result += "\tDigiKeyboard.delay(" + value + ");\n";
      }else if(magic_word == "STRING"){
        result += "\tDigiKeyboard.print(\""+ value + "\");\n";
      }else if(magic_word == "ENTER"){
        result += "\tDigiKeyboard.sendKeyStroke(KEY_ENTER);\n";
      }else if(magic_word == "WINDOWS" || magic_word == "GUI"){
        result += "\tDigiKeyboard.sendKeyStroke(KEY_" + value.toUpperCase() + ", MOD_GUI_LEFT);\n";
      }else if(magic_word == "MENU" || magic_word == "APP"){
        result += "\tDigiKeyboard.sendKeyStroke(MOD_GUI_RIGHT);\n";
      }else{
        result += "\t" + lines[k] + "\n";
      }
    }
  });

  result += "}"

  $("#output_code").val(result);
}