<!DOCTYPE html>
<html lang="en" xmlns:float="http://www.w3.org/1999/xhtml">

<head>

</head>
<title>Test Array in JS</title>
<body>

<div id="var1"></div><input type="text" id="inVal1"/>
<div id="var2"></div><input type="text" id="inVal2"/>
<div id="var3"></div><input type="text" id="inVal3"/>
<div id="var4"></div><input type="text" id="inVal4"/>
<div id="resultP"></div>
<div id="rsltV"></div> <input type="text" id="result"/>

<script type="text/javascript">
var nVal1 = document.getElementById("inVal1").value;
document.getElementById("var1").innerText = nVal1;
var nVal2 = document.getElementById("inVal2").value;
document.getElementById("var2").innerText = nVal2;
var nVal3 = document.getElementById("inVal3").value;
document.getElementById("var3").innerText = nVal3;
var ar = [nVal1,nVAl2,nVal3];

document.getElementById("result").innerText = ar[0];
</script>
</body>
</html>