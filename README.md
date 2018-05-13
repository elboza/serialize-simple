# Serialize-Simple
## simply serialize a web form

You can use this module as a node module or directly inside a web page.

### as a nodejs module 
```
npm install serialize-simple
```
or
```
$ git clone <this repo>
$ npm install
```
```
var serialize=require('serialize.js');
```

### parameters
```
serialize(domelement, encodetype = 'form', uriencode = null)
```
where
- *domelement* is the dom element (document.getELementById('...'))
- *encodetype* (optional)~~> 'form' (default) | 'json'
- *uriencode* (optional) ~~> true | false (if to URIencode values)

### into a web page embedded
```
$ npm install
```
or
```
$ npm run web
```
to generate the files that you can include in a web page. either:

- ./web/serialize.js
- ./web/serialize.min.js

and then just copy the file to your web project and link to it:
```
<script src="path_to_file/serialize.min.js"></script>
```
example:

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
<script src="./serialize.min.js"></script>
<script>
function send_data(theform){
	alert("test");
	var x=new Serialize();
	var params=x.serialize(theform,'form');
	//or params=x.serialize(theform, 'json');
	alert(params);
	return false;
}
</script>
</body>
</html>

```

### That's all falks!
```
 _____
< bye >
 -----
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

