# Serialize-Simple
## simply serialize a web form

You can use this module as a node module or directly inside a web page.

### nodejs
```
npm install serialize-simple
```

### web page embedded

```
<html>
<head>

</head>
<body>
foo
<form method="post" name="test" action="#" onsubmit="return send_data(this);">
<label for="name">name</label>
<input type="text" name="name" id="name" />
<label for="lastname">last name</label>
<input type="text" name="lastname" id="lastname" />
<input type="submit" value="vai !!!" />
</form>
<script src="./serialize.js"></script>
<script>
function send_data(theform){
	alert("test");
	var x=new Serialize();
	var params=x.serialize(theform);
	alert(params);
	return false;
}
</script>
</body>
</html>

```
