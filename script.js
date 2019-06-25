function convertToCode(val){
  if(val == null) return null;
  let x = null;
  switch (val.toUpperCase()) {
    case "MOD_LCTRL": x = 1; break;
    case "MOD_LSHIFT": x = 2; break;
    case "MOD_LALT": x = 4; break;
    case "MOD_LMETA": x = 8; break;
    case "MOD_RCTRL": x = 16; break;
    case "MOD_RSHIFT": x = 32; break;
    case "MOD_RALT": x = 64; break;
    case "MOD_RMETA": x = 128; break;

    case "CTRL": x = 1; break;
    case "SHIFT": x = 2; break;
    case "ALT": x = 4; break;
    case "WINDOWS": x = 8; break;
    case "GUI": x = 8; break;
    case "MOD_RCTRL": x = 16; break;
    case "MOD_RSHIFT": x = 32; break;
    case "MOD_RALT": x = 64; break;
    case "APP": x = 128; break;
    case "MENU": x = 128; break;

    case "NONE": x = 0; break;
    case "ERR_OVF": x = 1; break;

    case "A": x = 4; break;
    case "B": x = 5; break;
    case "C": x = 6; break;
    case "D": x = 7; break;
    case "E": x = 8; break;
    case "F": x = 9; break;
    case "G": x = 10; break;
    case "H": x = 11; break;
    case "I": x = 12; break;
    case "J": x = 13; break;
    case "K": x = 14; break;
    case "L": x = 15; break;
    case "M": x = 16; break;
    case "N": x = 17; break;
    case "O": x = 18; break;
    case "P": x = 19; break;
    case "Q": x = 20; break;
    case "R": x = 21; break;
    case "S": x = 22; break;
    case "T": x = 23; break;
    case "U": x = 24; break;
    case "V": x = 25; break;
    case "W": x = 26; break;
    case "X": x = 27; break;
    case "Y": x = 28; break;
    case "Z": x = 29; break;
    case "1": x = 30; break;
    case "2": x = 31; break;
    case "3": x = 32; break;
    case "4": x = 33; break;
    case "5": x = 34; break;
    case "6": x = 35; break;
    case "7": x = 36; break;
    case "8": x = 37; break;
    case "9": x = 38; break;
    case "0": x = 39; break;

    case "ENTER": x = 40; break;
    case "ESC": x = 41; break;
    case "ESCAPE": x = 41; break;
    case "BACKSPACE": x = 42; break;
    case "TAB": x = 43; break;
    case "SPACE": x = 44; break;
    case "MINUS": x = 45; break;
    case "EQUAL": x = 46; break;
    case "LEFTBRACE": x = 47; break;
    case "RIGHTBRACE": x = 48; break;
    case "BACKSLASH": x = 49; break;
    case "HASHTILDE": x = 50; break;
    case "SEMICOLON": x = 51; break;
    case "APOSTROPHE": x = 52; break;
    case "GRAVE": x = 53; break;
    case "COMMA": x = 54; break;
    case "DOT": x = 55; break;
    case "SLASH": x = 56; break;
    case "CAPSLOCK": x = 57; break;

    case "F1": x = 58; break;
    case "F2": x = 59; break;
    case "F3": x = 60; break;
    case "F4": x = 61; break;
    case "F5": x = 62; break;
    case "F6": x = 63; break;
    case "F7": x = 64; break;
    case "F8": x = 65; break;
    case "F9": x = 66; break;
    case "F10": x = 67; break;
    case "F11": x = 68; break;
    case "F12": x = 69; break;

    case "SYSRQ": x = 70; break;
    case "SCROLLLOCK": x = 71; break;
    case "PAUSE": x = 72; break;
    case "INSERT": x = 73; break;
    case "HOME": x = 74; break;
    case "PAGEUP": x = 75; break;
    case "DELETE": x = 76; break;
    case "END": x = 77; break;
    case "PAGEDOWN": x = 78; break;

    case "RIGHTARROW": x = 79; break;
    case "LEFTARROW": x = 80; break;
    case "DOWNARROW": x = 81; break;
    case "UPARROW": x = 82; break;

    case "RIGHT": x = 79; break;
    case "LEFT": x = 80; break;
    case "DOWN": x = 81; break;
    case "UP": x = 82; break;

    case "NUMLOCK": x = 83; break;
    case "KPSLASH": x = 84; break;
    case "KPASTERISK": x = 85; break;
    case "KPMINUS": x = 86; break;
    case "KPPLUS": x = 87; break;
    case "KPENTER": x = 88; break;

    case "KP1": x = 89; break;
    case "KP2": x = 90; break;
    case "KP3": x = 91; break;
    case "KP4": x = 92; break;
    case "KP5": x = 93; break;
    case "KP6": x = 94; break;
    case "KP7": x = 95; break;
    case "KP8": x = 96; break;
    case "KP9": x = 97; break;
    case "KP0": x = 98; break;

    case "KPDOT": x = 99; break;
    case "102ND": x = 100; break;
    case "COMPOSE": x = 101; break;
    case "POWER": x = 102; break;
    case "KPEQUAL": x = 103; break;

    case "F13": x = 104; break;
    case "F14": x = 105; break;
    case "F15": x = 106; break;
    case "F16": x = 107; break;
    case "F17": x = 108; break;
    case "F18": x = 109; break;
    case "F19": x = 110; break;
    case "F20": x = 111; break;
    case "F21": x = 112; break;
    case "F22": x = 113; break;
    case "F23": x = 114; break;
    case "F24": x = 115; break;

    case "OPEN": x = 116; break;
    case "HELP": x = 117; break;
    case "PROPS": x = 118; break;
    case "FRONT": x = 119; break;
    case "STOP": x = 120; break;
    case "AGAIN": x = 121; break;
    case "UNDO": x = 122; break;
    case "CUT": x = 123; break;
    case "COPY": x = 124; break;
    case "PASTE": x = 125; break;
    case "FIND": x = 126; break;
    case "MUTE": x = 127; break;
    case "VOLUMEUP": x = 128; break;
    case "VOLUMEDOWN": x = 129; break;
    case "KPCOMMA": x = 133; break;
    case "RO": x = 135; break;
    case "KATAKANAHIRAGANA": x = 136; break;
    case "YEN": x = 137; break;
    case "HENKAN": x = 138; break;
    case "MUHENKAN": x = 139; break;
    case "KPJPCOMMA": x = 140; break;
    case "HANGEUL": x = 144; break;
    case "HANJA": x = 145; break;
    case "KATAKANA": x = 146; break;
    case "HIRAGANA": x = 147; break;
    case "ZENKAKUHANKAKU": x = 148; break;
    case "KPLEFTPAREN": x = 182; break;
    case "KPRIGHTPAREN": x = 183; break;
    case "LEFTCTRL": x = 224; break;
    case "LEFTSHIFT": x = 225; break;
    case "LEFTALT": x = 226; break;
    case "GUI": x = 227; break;
    case "WINDOWS": x = 227; break;
    case "LEFTMETA": x = 227; break;
    case "RIGHTCTRL": x = 228; break;
    case "RIGHTSHIFT": x = 229; break;
    case "RIGHTALT": x = 230; break;
    case "RIGHTMETA": x = 231; break;

    case "MEDIA_PLAYPAUSE": x = 232; break;
    case "MEDIA_STOPCD": x = 233; break;
    case "MEDIA_PREVIOUSSONG": x = 234; break;
    case "MEDIA_NEXTSONG": x = 235; break;
    case "MEDIA_EJECTCD": x = 236; break;
    case "MEDIA_VOLUMEUP": x = 237; break;
    case "MEDIA_VOLUMEDOWN": x = 238; break;
    case "MEDIA_MUTE": x = 239; break;
    case "MEDIA_WWW": x = 240; break;
    case "MEDIA_BACK": x = 241; break;
    case "MEDIA_FORWARD": x = 242; break;
    case "MEDIA_STOP": x = 243; break;
    case "MEDIA_FIND": x = 244; break;
    case "MEDIA_SCROLLUP": x = 245; break;
    case "MEDIA_SCROLLDOWN": x = 246; break;
    case "MEDIA_EDIT": x = 247; break;
    case "MEDIA_SLEEP": x = 248; break;
    case "MEDIA_COFFEE": x = 249; break;
    case "MEDIA_REFRESH": x = 250; break;
    case "MEDIA_CALC": x = 251; break;
  }
  return x;
}


function convert() {
  var lines = $("#input_code").val().split("\n");

  var result = "#include \"DigiKeyboard.h\"\nvoid setup(){}\nvoid loop() {\n\tDigiKeyboard.sendKeyStroke(0);\n\tDigiKeyboard.delay(500);\n"

  $.each(lines, function(k){

    lines[k] = lines[k].trim();

    if(lines[k] != ""){

      if(lines[k].includes(" ")){

        var magic_word = lines[k].slice(0, lines[k].indexOf(" "));
        var value = lines[k].slice(lines[k].indexOf(" ") + 1, lines[k].lenght);

        if(magic_word == "REM"){
          result += "\t// " + value + "\n";
        }else if(magic_word == "DELAY"){
          result += "\tDigiKeyboard.delay(" + value + ");\n";
        }else if(magic_word == "STRING"){
          result += "\tDigiKeyboard.print(\""+ value + "\");\n";
        }else{
          let x1 = convertToCode(magic_word);
          let x2 = convertToCode(value);
          result += "\tDigiKeyboard.sendKeyStroke("+x2+", "+x1+");\n";
        }
      }else{

        var magic_word = lines[k];
        let ret = convertToCode(magic_word);

        if(ret != null){
          result += "\tDigiKeyboard.sendKeyStroke(" + ret + ");\n";
        }else{
          result += "\t//" + lines[k] + "\n";
        }
      }
    }
  });

  result += "}"

  $("#output_code").val(result);
}