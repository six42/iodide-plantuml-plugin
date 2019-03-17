import  "https://raw.githubusercontent.com/johan/js-deflate/master/rawdeflate.js";

var plantuml = (function () {
var plantuml_server ="http://www.plantuml.com/plantuml/";
var plantuml_output_type = "png"; //  svg"; //"png"
// http://plantuml.com/en/server


// functions to call plantuml API
// this is copied from
// http://plantuml.com/en/demo-javascript-synchronous
// 

function encode64(data) {
	r = "";
	for (i=0; i<data.length; i+=3) {
 		if (i+2==data.length) {
			r +=append3bytes(data.charCodeAt(i), data.charCodeAt(i+1), 0);
		} else if (i+1==data.length) {
			r += append3bytes(data.charCodeAt(i), 0, 0);
		} else {
			r += append3bytes(data.charCodeAt(i), data.charCodeAt(i+1),
				data.charCodeAt(i+2));
		}
	}
	return r;
}

function append3bytes(b1, b2, b3) {
	c1 = b1 >> 2;
	c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
	c3 = ((b2 & 0xF) << 2) | (b3 >> 6);
	c4 = b3 & 0x3F;
	r = "";
	r += encode6bit(c1 & 0x3F);
	r += encode6bit(c2 & 0x3F);
	r += encode6bit(c3 & 0x3F);
	r += encode6bit(c4 & 0x3F);
	return r;
}

function encode6bit(b) {
	if (b < 10) {
 		return String.fromCharCode(48 + b);
	}
	b -= 10;
	if (b < 26) {
 		return String.fromCharCode(65 + b);
	}
	b -= 26;
	if (b < 26) {
 		return String.fromCharCode(97 + b);
	}
	b -= 26;
	if (b == 0) {
 		return '-';
	}
	if (b == 1) {
 		return '_';
	}
	return '?';
}
// end of copy from http://plantuml.com/en/demo-javascript-synchronous
  
// glue code between iodide and plantuml

function plantuml_encode(source_text){
  s = unescape(encodeURIComponent(source_text));
  s = encode64(deflate(s, 9));
	return s;  
}  
  
function plantuml(target_image,source_text) {
  s = plantuml_encode(source_text);
  $(target_image).src = plantuml_server+plantuml_output_type+"/"+s;
}

function plantuml_img(source_text) {
  s = plantuml_encode(source_text);
  target = iodide.output.element("img");
  target.src = plantuml_server+plantuml_output_type+"/"+s;
}

    return {
    plantuml: plantuml,
    plantuml_img: plantuml_img,
    plantuml_output_type: plantuml_output_type  
  }
})();
