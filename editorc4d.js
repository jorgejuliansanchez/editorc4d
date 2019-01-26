//editorc4d:[{x:Longitud, y:Latitud, z:Altitud, t:Instante_tiempo}]
//LabSo Laboratorio de Software S.A.
var x = 256, y = 256, z = 16, t = 1, a = 512, r, pi = '', pa = '', h, conta = 0, s = document.createElementNS("http://www.w3.org/2000/svg", "svg"); s.setAttribute('style', 'position:absolute; left:0px;to:0px;width:640px;height:640px;'); s.setAttribute('id', 'c'); document.body.appendChild(s);
var blip = 0;
var ob1 = document.createElement("INPUT"); ob1.setAttribute("id", "leearchivos"); ob1.setAttribute("name", "leearchivos"); ob1.setAttribute("type", "file"); ob1.setAttribute("style", "display:none"); ob1.setAttribute("onChange", "cargar()"); document.body.appendChild(ob1);
var ob2 = document.createElement("INPUT"); ob2.setAttribute("id", "leearchivos2"); ob2.setAttribute("name", "leearchivos2"); ob2.setAttribute("type", "file"); ob2.setAttribute("style", "display:none"); ob2.setAttribute("onChange", "leer1()"); document.body.appendChild(ob2);
var ob3 = document.createElement("INPUT"); ob3.setAttribute("id", "colores"); ob3.setAttribute("name", "colores"); ob3.setAttribute("type", "color"); ob3.setAttribute("style", "display:none"); ob3.setAttribute("onChange", "paleta()"); document.body.appendChild(ob3);
b('_S', '577,154,639,134,639,250,577,250,577,154', '#ba9200', 'white'); b('_O', '577,261,639,262,639,377,577,357,577,261', '#ba9200', 'white'); b('_E', '577,47,639,6,639,122,577,143,577,47', '#ba9200', 'white'); b('_N', '577,368,639,389,639,505,577,464,577,368', '#ba9200', 'white'); b('_I', '514,174,565,158,565,250,514,251,514,174', '#ba9200', 'white'); b('_T', '514,260,565,260,565,354,514,337,514,260', '#ba9200', 'white'); b('_D', '514,88,565,54,565,147,514,165,514,88', '#ba9200', 'white'); b('_H', '514,346,565,364,565,457,514,424,514,346', '#ba9200', 'white'); b('_7', '88,514,165,514,154,547,66,547,88,514', 'green', 'white'); b('_8', '174,514,251,514,251,547,163,547,174,514', 'green', 'white'); b('_9', '260,514,338,514,349,547,260,547,260,514', 'green', 'white'); b('_0', '346,514,423,514,445,547,357,547,346,514', 'green', 'white'); b('_4', '65,549,153,549,140,587,40,587,65,549', 'green', 'white'); b('_5', '162,549,251,549,250,587,150,587,162,549', 'green', 'white'); b('_6', '260,549,349,549,361,587,261,587,260,549', 'green', 'white'); b('_Z', '358,549,446,549,471,587,371,587,358,549', 'green', 'white'); b('_1', '39,589,139,589,122,639,6,639,39,589', 'green', 'white'); b('_2', '149,589,250,589,249,639,134,639,149,589', 'green', 'white'); b('_3', '261,589,361,589,377,639,262,639,261,589', 'green', 'white'); b('_A', '372,589,472,589,505,639,389,639,372,589', 'green', 'white');
var sp = document.createElementNS("http://www.w3.org/2000/svg", "svg"); sp.setAttribute('style', 'position:absolute; left:0px;to:0px;width:512px;height:512px;'); sp.setAttribute('id', 'p'); document.body.appendChild(sp);
if (window.addEventListener) { document.getElementById('p').addEventListener('mousemove', m, false); } else { document.getElementById('p').onmousemove = m; }
function m(e) {
    if (document.getElementById('_D').style.stroke === 'blue') { e = window.event || e; x = parseInt(e.clientX); y = parseInt(e.clientY); curso(); }
}
if (window.addEventListener) { document.getElementById('p').addEventListener('click', u, false); } else { document.getElementById('p').onclick = u; }
function u(e) {
    if (document.getElementById('_D').style.stroke === 'blue') { e = window.event || e; x = parseInt(e.clientX); y = parseInt(e.clientY); cli(); }
}
if (window.addEventListener) { document.addEventListener('keydown', teclas, false); } else { document.onkeydown = teclas; }
function teclas(e) { e = window.event || e; M4(e.keyCode); }
function M4(k) {
    if (k === 12 || k === 101) { document.getElementById('_5').onclick(); } if (k === 37 || k === 100) { document.getElementById('_4').onclick(); } if (k === 39 || k === 102) { document.getElementById('_6').onclick(); } if (k === 38 || k === 104) { document.getElementById('_8').onclick(); } if (k === 40 || k === 98) { document.getElementById('_2').onclick(); } if (k === 36 || k === 103) { document.getElementById('_7').onclick(); } if (k === 33 || k === 105) { document.getElementById('_9').onclick(); } if (k === 34 || k === 99) { document.getElementById('_3').onclick(); } if (k === 35 || k === 97) { document.getElementById('_1').onclick(); } if (k === 45 || k === 96) { document.getElementById('_0').onclick(); }
    if (k === 46 || k === 110) { document.getElementById('_Z').onclick(); }
    if (k === 13) { document.getElementById('_A').onclick(); }
    if (k === 68) { document.getElementById('_D').onclick(); }
    if (document.getElementById('_D').style.stroke === 'blue') { curso(); }
}
function o(e) {
    h = e.id.substring(2, 1);
    console.log(h);
    //IDEASNOHTZ7890456123
    if (h === 'I') { i(); }
    if (h === 'D') { d(); }
    if (h === 'E') { ed(); }
    if (h === 'A') { cli(); }
    if (h === 'S') { sv(); }
    if (h === 'O') { leer(); }
    if (h === 'N') { nuevo(); }
    if (h === 'T') { pale(); }
    if (h === '7') { x--; if (x < 0) { x = 0; } y--; if (y < 0) { y = 0; } } if (h === '8') { y--; if (y < 0) { y = 0; } } if (h === '9') { x++; if (x > a) { x = a; } y--; if (y < 0) { y = 0; } } if (h === '4') { x--; if (x < 0) { x = 0; } } if (h === '5') { z++; if (z > a) { z = a; } } if (h === '6') { x++; if (x > a) { x = a; } } if (h === '1') { x--; if (x < 0) { x = 0; } y++; if (y > a) { y = a; } } if (h === '2') { y++; if (y > a) { y = a; } } if (h === '3') { x++; if (x > a) { x = a; } y++; if (y > a) { y = a; } } if (h === '0') { z--; if (z < 1) { z = 1; } }
}
//Dibujar polilineas
function d() { pi = ""; pa = ""; if (document.getElementById('_D').style.stroke === 'blue') { document.getElementById('p').style.cursor = 'default'; document.getElementById('_D').setAttribute('style', 'fill: #ba9200;stroke: white;'); h = ''; if (document.getElementById('curs')) { document.getElementById('curs').remove(); } if (document.getElementById('temp')) { document.getElementById('temp').remove(); } } else { document.getElementById('p').style.cursor = 'none'; document.getElementById('_D').setAttribute('style', 'fill: white;stroke: blue;'); x = 256, y = 256; curso(); } }
function b(pid, pts, fil, str) { var o = document.createElementNS('http://www.w3.org/2000/svg', 'polyline'); var antialias = true; o.setAttribute('shape-rendering', antialias ? 'auto' : 'otimizeSpeed'); o.setAttribute('id', pid); o.setAttribute('stroke', str); o.setAttribute('fill', fil); o.setAttribute('onclick', 'o(this)'); o.setAttribute('points', pts); document.getElementById('c').appendChild(o); }
function l(pid, pt, fi, st) { var o = document.createElementNS('http://www.w3.org/2000/svg', 'polyline'); if (document.getElementById(pid)) { var o = document.getElementById(pid); } else { var o = document.createElementNS('http://www.w3.org/2000/svg', 'polyline'); var antialias = true; o.setAttribute('shape-rendering', antialias ? 'auto' : 'otimizeSpeed'); o.setAttribute('id', pid); } o.setAttribute('points', pt); o.setAttribute('stroke', st); o.setAttribute('fill', fi); if (!document.getElementById(pid)) { document.getElementById('p').appendChild(o); } }
function curso() { var cu = (x - 2) + ',' + (y - 2) + ',' + (x + 2) + ',' + (y - 2) + ',' + (x + 2) + ',' + (y + 2) + ',' + (x - 2) + ',' + (y + 2) + ',' + (x - 2) + ',' + (y - 2); l('curs', cu, 'none', 'blue'); if (pa !== '') { temp(); } }
function temp() { var cu = pa + ',' + x + ',' + y; l('temp', cu, 'none', 'red'); }
function cli() { if (pi === '') { conta++; pi = x + ',' + y; r = pi; }; r = r + ',' + x + ',' + y; l('s' + conta, r, 'none', 'black'); pa = x + ',' + y; curso(); }
//Editar polilineas
function ed() { if (document.getElementById('_E').style.stroke === 'blue') { document.getElementById('_E').setAttribute('style', 'fill: #ba9200;stroke: white;'); h = ''; } else { document.getElementById('_E').setAttribute('style', 'fill: white;stroke: blue;'); var puntos = document.getElementById('s1').points; poneblips(puntos); } }
function poneblips(puntos) { var ptos = puntos.numberOfItems; var pruta = ''; for (var incrementador = 0; incrementador < ptos; incrementador++) { blip++; circulo(puntos.getItem(incrementador).x, puntos.getItem(incrementador).y, 3, "blip" + blip, "lime"); pruta += puntos.getItem(incrementador).x + "," + puntos.getItem(incrementador).y + " "; } }
function quitablips() { var nodos = document.getElementById("p").childNodes.length - 1; for (var incrementador = nodos; incrementador > 0; incrementador--) { var objeto = document.getElementById("p").childNodes[incrementador]; var pid = objeto.id; if (pid) { if (pid.indexOf("blip") >= 0) { document.getElementById("p").removeChild(objeto); } } } blip = 0; }
function circulo(cx, cy, radio, pid, co) { var antialias = true; if (document.getElementById(pid)) { var o = document.getElementById(pid); } else { var o = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); } o.setAttribute('shape-rendering', antialias ? 'auto' : 'optimizeSpeed'); o.setAttribute('id', pid); if (cx) o.setAttribute('cx', cx); if (cy) o.setAttribute('cy', cy); if (radio) o.setAttribute('r', radio); o.setAttribute('fill', co); o.setAttribute('stroke', co); o.addEventListener('mouseover', sobremi, false); o.addEventListener('mouseout', fuerami, false); if (!document.getElementById(pid)) { document.getElementById("p").appendChild(o); } }
function sobremi(evt) { var target = evt.target; target.setAttributeNS(null, 'style', 'cursor:pointer;cursor:hand;'); target.setAttributeNS(null, 'fill', 'red'); target.setAttributeNS(null, 'stroke', 'red'); }
function fuerami(evt) { var target = evt.target; target.setAttributeNS(null, 'fill', 'lime'); target.setAttributeNS(null, 'stroke', 'lime'); }
//Leer imagen
function i() { if (document.getElementById('_I').style.stroke === 'blue') { document.getElementById('_I').setAttribute('style', 'fill: #ba9200;stroke: white;'); h = ''; } else { document.getElementById('_I').setAttribute('style', 'fill: white;stroke: blue;'); document.getElementById('leearchivos').click(); } }
function cargar() {
    if (document.getElementById('im')) { document.getElementById('im').remove(); }
    var ob = document.createElement("IMG");
    ob.setAttribute("id", "im");
    ob.setAttribu// editorc4d: [{x: Longitud, y: Latitud, z: Altitud, t: Instante_tiempo}]
// autor: Jorge Julian Sanchez Velez

// Variables
var x = 256, y = 256, z = 16, t = 1, a = 640, r, pi = '', pa = '', h, conta = 0, blip = 0;

// Objetos
var s = document.createElementNS("http://www.w3.org/2000/svg", "svg"); s.setAttribute('style', 'position:absolute; left:0px;to:0px;width:640px;height:640px;'); s.setAttribute('id', 'c'); document.body.appendChild(s);
var ob1 = document.createElement("INPUT"); ob1.setAttribute("id", "leearchivos"); ob1.setAttribute("type", "file"); ob1.setAttribute("style", "display:none"); ob1.setAttribute("onChange", "cargar()"); document.body.appendChild(ob1);
var ob2 = document.createElement("INPUT"); ob2.setAttribute("id", "leearchivos2"); ob2.setAttribute("type", "file"); ob2.setAttribute("style", "display:none"); ob2.setAttribute("onChange", "leer1()"); document.body.appendChild(ob2);
var ob3 = document.createElement("INPUT"); ob3.setAttribute("id", "colores"); ob3.setAttribute("type", "color"); ob3.setAttribute("style", "display:none"); ob3.setAttribute("onChange", "paleta()"); document.body.appendChild(ob3);
var ob4 = document.createElement("DIV"); ob4.setAttribute("id", "mensaje"); ob4.setAttribute("style", "position:absolute; top: 512px;"); document.body.appendChild(ob4);
// Panel de dibujo
var sp = document.createElementNS("http://www.w3.org/2000/svg", "svg"); sp.setAttribute('style', 'position:absolute; left:0px;to:0px;width:512px;height:512px;'); sp.setAttribute('id', 'p'); document.body.appendChild(sp);
if (window.addEventListener) { document.getElementById('c').addEventListener('mousemove', m, false); } else { document.getElementById('p').onmousemove = m; }
if (window.addEventListener) { document.getElementById('p').addEventListener('click', u, false); } else { document.getElementById('p').onclick = u; }
if (window.addEventListener) { document.addEventListener('keydown', teclas, false); } else { document.onkeydown = teclas; }

// Mouse
function m(e) { if (document.getElementById('_D').style.stroke === 'blue') { e = window.event || e; x = parseInt(e.clientX); y = parseInt(e.clientY); curso(); } }
function u(e) { if (document.getElementById('_D').style.stroke === 'blue') { e = window.event || e; x = parseInt(e.clientX); y = parseInt(e.clientY); cli(); } }

// Teclado
function teclas(e) { e = window.event || e; M4(e.keyCode); }
function M4(k) {
    if (k === 12 || k === 101) { document.getElementById('_5').onclick(); }
    if (k === 37 || k === 100) { document.getElementById('_4').onclick(); }
    if (k === 39 || k === 102) { document.getElementById('_6').onclick(); }
    if (k === 38 || k === 104) { document.getElementById('_8').onclick(); }
    if (k === 40 || k === 98) { document.getElementById('_2').onclick(); }
    if (k === 36 || k === 103) { document.getElementById('_7').onclick(); }
    if (k === 33 || k === 105) { document.getElementById('_9').onclick(); }
    if (k === 34 || k === 99) { document.getElementById('_3').onclick(); }
    if (k === 35 || k === 97) { document.getElementById('_1').onclick(); }
    if (k === 45 || k === 96) { document.getElementById('_0').onclick(); }
    if (k === 13 || k === 65) { document.getElementById('_A').onclick(); }
    if (k === 90) { document.getElementById('_Z').onclick(); }
    if (k === 68) { document.getElementById('_D').onclick(); }
    if (k === 69) { document.getElementById('_E').onclick(); }
    if (k === 73) { document.getElementById('_I').onclick(); }
    if (k === 83) { document.getElementById('_S').onclick(); }
    if (k === 84) { document.getElementById('_T').onclick(); }
    if (k === 79) { document.getElementById('_O').onclick(); }
    if (k === 69) { document.getElementById('_H').onclick(); }
    if (k === 69) { document.getElementById('_N').onclick(); }
    if (document.getElementById('_D').style.stroke === 'blue') { curso(); }
}

// Control
b('_salvar1', '589,234,627,231,627,239,589,240,589,234', 'rgba(186,146,0,0.6)', 'rgba(186,146,0,1)');
b('_salvar2', '599,157,618,152,618,188,627,186,608,219,589,193,599,191,599,157', 'rgba(186,146,0,0.6)', 'rgba(186,146,0,1)');

b('_S', '577,154,639,134,639,250,577,250,577,154', 'rgba(186,146,0,0.4)', 'rgba(186,146,0,1)');
b('_O', '577,261,639,262,639,377,577,357,577,261', '#ba9200', 'white');
b('_E', '577,47,639,6,639,122,577,143,577,47', '#ba9200', 'white');
b('_N', '577,368,639,389,639,505,577,464,577,368', '#ba9200', 'white');
b('_I', '514,174,565,158,565,250,514,251,514,174', '#ba9200', 'white');
b('_T', '514,260,565,260,565,354,514,337,514,260', '#ba9200', 'white');
b('_D', '514,88,565,54,565,147,514,165,514,88', '#ba9200', 'white');
b('_H', '514,346,565,364,565,457,514,424,514,346', '#ba9200', 'white');
b('_7', '88,514,165,514,154,547,66,547,88,514', 'green', 'white');
b('_8', '174,514,251,514,251,547,163,547,174,514', 'green', 'white');
b('_9', '260,514,338,514,349,547,260,547,260,514', 'green', 'white');
b('_0', '346,514,423,514,445,547,357,547,346,514', 'green', 'white');
b('_4', '65,549,153,549,140,587,40,587,65,549', 'green', 'white');
b('_5', '162,549,251,549,250,587,150,587,162,549', 'green', 'white');
b('_6', '260,549,349,549,361,587,261,587,260,549', 'green', 'white');
b('_Z', '358,549,446,549,471,587,371,587,358,549', 'green', 'white');
b('_1', '39,589,139,589,122,639,6,639,39,589', 'green', 'white');
b('_2', '149,589,250,589,249,639,134,639,149,589', 'green', 'white');
b('_3', '261,589,361,589,377,639,262,639,261,589', 'green', 'white');
b('_A', '372,589,472,589,505,639,389,639,372,589', 'green', 'white');

b('_Sb', '256,256,639,18', '#ba9200', 'red');
b('_Sb', '256,256,639,110', '#ba9200', 'red');
//b('_Sa', '256,256,639,146', '#ba9200', 'red');
//b('_Sb', '256,256,639,238', '#ba9200', 'red');
b('_Sb', '256,256,639,274', '#ba9200', 'red');
b('_Sb', '256,256,639,365', '#ba9200', 'red');
b('_Sb', '256,256,639,401', '#ba9200', 'red');
b('_Sb', '256,256,639,493', '#ba9200', 'red');

b('_Sb', '526,0,526,512', '#ba9200', 'red');
b('_Sb', '539,0,539,512', '#ba9200', 'red');
b('_Sb', '553,0,553,512', '#ba9200', 'red');

//b('_Sb', '589,0,589,512', '#ba9200', 'red');
//b('_Sb', '608,0,608,512', '#ba9200', 'red');
//b('_Sb', '627,0,627,512', '#ba9200', 'red');
//b('_Sb', '256,256,639,231', '#ba9200', 'red');
//b('_Sb', '256,256,639,184', '#ba9200', 'red');



function o(e) {
    h = e.id.substring(2, 1);
    //IDEASNOHTZ7890456123
    if (h === 'I') { i(); }
    if (h === 'D') { d(); }
    if (h === 'E') { ed(); }
    if (h === 'A') { cli(); }
    if (h === 'S') { sv(); }
    if (h === 'O') { document.getElementById('leearchivos2').click(); }
    if (h === 'N') { nuevo(); }
    if (h === 'T') { document.getElementById('colores').click(); }
    if (h === 'H') { help(); }
    if (h === '7') { x--; if (x < 0) { x = 0; } y--; if (y < 0) { y = 0; } }
    if (h === '8') { y--; if (y < 0) { y = 0; } }
    if (h === '9') { x++; if (x > a) { x = a; } y--; if (y < 0) { y = 0; } }
    if (h === '4') { x--; if (x < 0) { x = 0; } }
    if (h === '5') { }
    if (h === '6') { x++; if (x > a) { x = a; } }
    if (h === '1') { x--; if (x < 0) { x = 0; } y++; if (y > a) { y = a; } }
    if (h === '2') { y++; if (y > a) { y = a; } }
    if (h === '3') { x++; if (x > a) { x = a; } y++; if (y > a) { y = a; } }
    if (h === '0') { z--; if (z < 1) { z = 1; } }
    if (h === 'Z') { z++; if (z > a) { z = a; } }
}

// Dibujar polilineas
function d() {
    pi = "";
    pa = "";
    if (document.getElementById('_D').style.stroke === 'blue') {
        document.getElementById('p').style.cursor = 'default';
        document.getElementById('_D').setAttribute('style', 'fill: #ba9200;stroke: white;');
        h = '';
        if (document.getElementById('curs')) { document.getElementById('curs').remove(); }
        if (document.getElementById('temp')) { document.getElementById('temp').remove(); }
    } else {
        document.getElementById('p').style.cursor = 'none';
        document.getElementById('_D').setAttribute('style', 'fill: white;stroke: blue;');
        x = 256;
        y = 256;
        curso();
    }
}
function b(pid, pts, fil, str) {
    var o = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    var antialias = true;
    o.setAttribute('shape-rendering', antialias ? 'geometricPrecision' : 'otimizeSpeed');
    o.setAttribute('id', pid);
    o.setAttribute('stroke', str);
    o.setAttribute('fill', fil);
    o.setAttribute('onclick', 'o(this)');
    o.setAttribute('points', pts);
    document.getElementById('c').appendChild(o);
}
function l(pid, pt, fi, st) {
    var o ;
    if (document.getElementById(pid)) {
        o = document.getElementById(pid);
    } else {
        o = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        var antialias = true;
        o.setAttribute('shape-rendering', antialias ? 'auto' : 'otimizeSpeed');
        o.setAttribute('id', pid);
    }
    o.setAttribute('points', pt);
    o.setAttribute('stroke', st);
    o.setAttribute('fill', fi);
    if (!document.getElementById(pid)) { document.getElementById('p').appendChild(o); }
}
function curso() {
    var cu = (x - 2) + ',' + (y - 2) + ',' + (x + 2) + ',' + (y - 2) + ',' + (x + 2) + ',' + (y + 2) + ',' + (x - 2) + ',' + (y + 2) + ',' + (x - 2) + ',' + (y - 2);
    l('curs', cu, 'none', 'blue');
    if (pa !== '') { temp(); }
    document.getElementById('mensaje').innerHTML = x + ' ' + y;
}
function temp() { var cu = pa + ',' + x + ',' + y; l('temp', cu, 'none', 'red'); }
function cli() {
    if (pi === '') {
        conta++;
        pi = x + ',' + y;
        pa = pi;
        r = pa;
    } else {
        r = r + ',' + x + ',' + y;
        l('s' + conta, r, 'none', 'black');
        pa = x + ',' + y;
        curso();
    }
}

// Editar polilineas
function ed() { if (document.getElementById('_E').style.stroke === 'blue') { document.getElementById('_E').setAttribute('style', 'fill: #ba9200;stroke: white;'); h = ''; } else { document.getElementById('_E').setAttribute('style', 'fill: white;stroke: blue;'); var puntos = document.getElementById('s1').points; poneblips(puntos); } }
function poneblips(puntos) { var ptos = puntos.numberOfItems; var pruta = ''; for (var incrementador = 0; incrementador < ptos; incrementador++) { blip++; circulo(puntos.getItem(incrementador).x, puntos.getItem(incrementador).y, 3, "blip" + blip, "lime"); pruta += puntos.getItem(incrementador).x + "," + puntos.getItem(incrementador).y + " "; } }
function quitablips() { var nodos = document.getElementById("p").childNodes.length - 1; for (var incrementador = nodos; incrementador > 0; incrementador--) { var objeto = document.getElementById("p").childNodes[incrementador]; var pid = objeto.id; if (pid) { if (pid.indexOf("blip") >= 0) { document.getElementById("p").removeChild(objeto); } } } blip = 0; }
function circulo(cx, cy, radio, pid, co) { var antialias = true; if (document.getElementById(pid)) { var o = document.getElementById(pid); } else { var o = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); } o.setAttribute('shape-rendering', antialias ? 'auto' : 'optimizeSpeed'); o.setAttribute('id', pid); if (cx) o.setAttribute('cx', cx); if (cy) o.setAttribute('cy', cy); if (radio) o.setAttribute('r', radio); o.setAttribute('fill', co); o.setAttribute('stroke', co); o.addEventListener('mouseover', sobremi, false); o.addEventListener('mouseout', fuerami, false); if (!document.getElementById(pid)) { document.getElementById("p").appendChild(o); } }
function sobremi(evt) { var target = evt.target; target.setAttributeNS(null, 'style', 'cursor:pointer;cursor:hand;'); target.setAttributeNS(null, 'fill', 'red'); target.setAttributeNS(null, 'stroke', 'red'); }
function fuerami(evt) { var target = evt.target; target.setAttributeNS(null, 'fill', 'lime'); target.setAttributeNS(null, 'stroke', 'lime'); }

// Imagen a Calcar
function i() { if (document.getElementById('_I').style.stroke === 'blue') { document.getElementById('_I').setAttribute('style', 'fill: #ba9200;stroke: white;'); h = ''; } else { document.getElementById('_I').setAttribute('style', 'fill: white;stroke: blue;'); document.getElementById('leearchivos').click(); } }
function cargar() { if (document.getElementById('im')) { document.getElementById('im').remove(); } var ob = document.createElement("IMG"); ob.setAttribute("id", "im"); ob.setAttribute("position", "absolute"); ob.setAttribute("width", a); ob.setAttribute("height", a); document.body.appendChild(ob); var archivo = document.getElementById('leearchivos').files[0]; var lector = new FileReader(); lector.addEventListener("load", function () { document.getElementById('im').src = lector.result; }, false); if (archivo) { lector.readAsDataURL(archivo); } document.getElementById('im').onload = function () { document.getElementById('p').style.cursor = 'wait'; var anchoi = document.getElementById('im').width; var altoi = document.getElementById('im').height; var ra = anchoi / altoi; if (ra > 1) { var an = a; var al = parseInt(a / ra); } else { var an = parseInt(a * ra); var al = a; } document.getElementById('im').width = an; document.getElementById('im').height = al; document.getElementById('im').style.top = parseInt((a - al) / 2) + 'px'; document.getElementById('im').style.left = parseInt((a - an) / 2) + 'px'; document.getElementById('p').style.cursor = 'default'; }; }

// Salvar archivo
function sv() {
    if (document.getElementById('_S').style.stroke === 'blue') {
        document.getElementById('_S').setAttribute('style', 'fill: rgba(186,146,0,0.4);stroke: rgba(186,146,0,1);');
        h = '';
    } else {
        document.getElementById('_S').setAttribute('style', 'fill: white;stroke: blue;');
        var data = "<html><head><title>" + "objeto4d.html" + "</title></head><body style='margin:0px;padding:0px;'><svg style='position:absolute; left:0px;to:0px;width:512px;height:512px;' id='p'>" + document.getElementById('p').innerHTML + "</svg></body></html>";
        download(data, "objeto4d.html", "html");
        document.getElementById('_S').setAttribute('style', 'fill: rgba(186,146,0,0.4);stroke: rgba(186,146,0,1);');
    }
}
function download(data, filename, type) { var file = new Blob([data], { type: type }); if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename); else { var a = document.createElement("a"), url = URL.createObjectURL(file); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); setTimeout(function () { document.body.removeChild(a); window.URL.revokeObjectURL(url); }, 0); } }

// Objeto4d cargado
function leer1() {
    var x, i, xmlDoc, pid, pts, fil, str;
    var archivo = document.getElementById('leearchivos2').files[0];
    var lector = new FileReader();
    lector.addEventListener("load", function () {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(lector.result, "text/xml");
        x = xmlDoc.getElementsByTagName('polyline');
        for (i = 0; i < x.length; i++) {
            pid = x[i].getAttribute('id');
            pts = x[i].getAttribute('points');
            fil = x[i].getAttribute('fill');
            str = x[i].getAttribute('stroke');
            sty = x[i].getAttribute('style');
            // Existe ese ID ?
            b(pid, pts, fil, str);
        }
    }, false); if (archivo) { lector.readAsText(archivo); }
}

// Tinte o Paleta de color borde y fondo
function paleta() {
    //document.querySelector('input[type="color"]').value = '#ffffff'
    alert(document.querySelector('input[type="color"]').value);
}

// Nuevo Objeto4d
function nuevo() {
    document.getElementById('p').innerHTML = '';
}

// Help ayuda
function help() {
    alert("Ayuda EditorC4d");
}
te("position", "absolute");
    ob.setAttribute("width", a);
    ob.setAttribute("height", a);
    document.body.appendChild(ob);
    var archivo = document.getElementById('leearchivos').files[0];
    var lector = new FileReader();
    lector.addEventListener("load", function () {
        document.getElementById('im').src = lector.result;
    }, false);
    if (archivo) { lector.readAsDataURL(archivo); }
    document.getElementById('im').onload = function () {
        document.getElementById('p').style.cursor = 'wait';
        var anchoi = document.getElementById('im').width;
        var altoi = document.getElementById('im').height;
        var ra = anchoi / altoi;
        if (ra > 1) {
            var an = a;
            var al = parseInt(a / ra);
        }
        else {
            var an = parseInt(a * ra);
            var al = a;
        }
        document.getElementById('im').width = an;
        document.getElementById('im').height = al;
        document.getElementById('im').style.top = parseInt((a - al) / 2) + 'px';
        document.getElementById('im').style.left = parseInt((a - an) / 2) + 'px';
        document.getElementById('p').style.cursor = 'default';
    };
}
// Salvar archivo
function sv() {
    if (document.getElementById('_S').style.stroke === 'blue') { document.getElementById('_S').setAttribute('style', 'fill: #ba9200;stroke: white;'); h = ''; } else {
        document.getElementById('_S').setAttribute('style', 'fill: white;stroke: blue;');
        var data = document.getElementById('p').innerHTML;
        download(data, "objeto4d.html", "html");
    }
}
function download(data, filename, type) { var file = new Blob([data], { type: type }); if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename); else { var a = document.createElement("a"), url = URL.createObjectURL(file); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); setTimeout(function () { document.body.removeChild(a); window.URL.revokeObjectURL(url); }, 0); } }
//Leer xml
function leer() {
    document.getElementById('leearchivos2').click();
}
function leer1() {
    var archivo = document.getElementById('leearchivos2').files[0];
    var lector = new FileReader();
    lector.addEventListener("load", function () {
        document.getElementById('p').innerHTML = lector.result;
    }, false);
    if (archivo) { lector.readAsText(archivo); }
}
function pale(){
document.getElementById('colores').click();	
}
function paleta(){
//document.querySelector('input[type="color"]').value = '#ffffff'
alert(document.querySelector('input[type="color"]').value);
}
function nuevo() {
    document.getElementById('p').innerHTML = '';
}
function trans() {
	alert("trans")    ;
}
