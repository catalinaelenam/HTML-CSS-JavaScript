function calculeazaEcuatia() {
    var nra = parseInt(document.getElementById('numara').value);
    var nrb = parseInt(document.getElementById('numarb').value);
    var nrc = parseInt(document.getElementById('numarc').value);

    var calcul = ((nra * nrb) + (nrb * nrc)) / (nra + nrb);
    document.getElementById('rezultatabc').innerText = calcul;

    alert(calcul.toFixed(2));

}

function max(){
    var a = parseInt(document.getElementById("num1").value) || 0;
    var b = parseInt(document.getElementById("num2").value) || 0;
    var c = parseInt(document.getElementById("num3").value) || 0;

    var end = Math.max(a, b, c);

    if (a === 0 && b === 0 && c === 0) {
    alert("Introduceti cel putin un numar!");
  } else {
    alert(end);
  }
}

function Sum() {
    var n = parseInt(document.getElementById("n").value);
    var m = parseInt(document.getElementById("m").value);
    var s = 0;
    for(var i = Math.min(n, m), max = Math.max(n, m); i <= max; i++){
      if(i%2==0) s += i;
    }
    
   alert(s);
  }


