var adapter = new LocalStorage('db')
var db = low(adapter)

var characters = []
// Use the following variables to

let defaultPosts = [
    {}
];
db.defaults({ posts: defaultPosts })
    .write();

function BuildArray(size){
    this.length = size
    for (var i = 1; i <= size; i++){
        this[i] = null}
    return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
    var rnd = 0.5 - Math.random()
    empty_posts()
    characters.sort(function() { return rnd;})

// Display the word inside the text box
    frm.WordBox.value = characters.pop()
    save()
    render()
}

function generate_characters(form) {
    let nb_loup = document.getElementById("loup").value;
    let nb_vil = document.getElementById("vil").value;
    let sorc = document.getElementById("sorc");
    let cup = document.getElementById("cupidon");
    let chas = document.getElementById("chasseur");
    let  cap = document.getElementById("capitaine");
    let voy = document.getElementById("voyante");

    add_character(nb_loup, "loup")
    add_character(nb_vil, "villageois")
    if (sorc.checked == true) {
        add_character(1, "sorcière")
    }
    if (cup.checked == true) {
        add_character(1, "cupidon")
    }
    if (chas.checked == true) {
        add_character(1, "chasseur")
    }
    if (cap.checked == true) {
        add_character(1, "capitaine")
    }
    if (voy.checked == true) {
        add_character(1, "voyante")
    }

    document.getElementById('form2').style.visibility='hidden'
    document.getElementById('form').style.visibility='visible'
    characters.sort(function() { return 0.5 - Math.random();})
    console.log(characters)
    remove()
    save()
    render()
}

function add_character(nb, name) {

    for (let pas = 0; pas < nb; pas++) {
        // Ceci sera exécuté 5 fois
        // À chaque éxécution, la variable "pas" augmentera de 1
        // Lorsque'elle sera arrivée à 5, le boucle se terminera.
        characters.push(name)
    }
}

function render() {
    const state = db.getState();
    const str = JSON.stringify(state, null, 2);
    document.getElementById('state').innerHTML = str;
}

function remove() {
    db.get('posts')
        .remove(_.isEmpty)
        .write();
};

function save() {
    characters.forEach(element => db.get('posts')
        .push({"name": element})
        .write())
    }

function empty_posts() {
    db.set('posts', [])
        .write()
}

render()