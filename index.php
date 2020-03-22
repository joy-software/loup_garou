<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Random Character Generator</h1>

<FORM NAME="WordForm" id="form" style="visibility: hidden" class="form-style-6">
    <INPUT TYPE=TEXT NAME="name" id="name" placeholder="your name"><BR>
    <INPUT TYPE=TEXT NAME="WordBox" id="wordbox"><BR>
    <INPUT TYPE=BUTTON VALUE="Generate" onClick="PickRandomWord(document.WordForm);" id="button">
</FORM>
<pre id="state"></pre>
<FORM NAME="Num_Characters" class="form-style-6" id="form2">
    <div>
        <input type="text" id="loup" name="loup"
               placeholder="loups">
    </div>
    <div>
        <input type="text" id="vil" name="vil"
               placeholder="Villageois">
    </div>
    <div>
        <input type="checkbox" id="sorc" name="sorc"
               >
        <label for="sorc">Sorcière</label>
    </div>
    <div>
        <input type="checkbox" id="cupidon" name="cupidon">
        <label for="cupidon">Cupidon</label>
    </div>
    <div>
        <input type="checkbox" id="chasseur" name="chasseur">
        <label for="chasseur">Chasseur</label>
    </div>
    <div>
        <input type="checkbox" id="capitaine" name="capitaine">
        <label for="capitaine">Capitaine</label>
    </div>
    <div>
        <input type="checkbox" id="voyante" name="voyante">
        <label for="voyante">Voyante</label>
    </div>

    <INPUT TYPE=BUTTON VALUE="Generate" onClick="generate_characters(document.WordForm);" id="button2">
</FORM>


<script src="https://unpkg.com/lodash@4/lodash.min.js"></script>
<script src="https://unpkg.com/lowdb@0.17/dist/low.min.js"></script>
<script src="https://unpkg.com/lowdb@0.17/dist/LocalStorage.min.js"></script>
<script src="backend.js"></script>

</body>
</html>
