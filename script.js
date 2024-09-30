function random_number() {

    var names_entry_input = document.getElementById("names_entry").value;
    var element = document.getElementById("random_num");
    var zahl_bool = istEineZahl(names_entry_input);

    if (zahl_bool == true) {
        var zufallszahl = Math.floor(Math.random() * parseInt(names_entry_input) + 1);
        element.innerHTML = zufallszahl;

    } else if (names_entry_input != "") {
        names_list = names_entry_input.split(";")
        var zufallsIndex = Math.floor(Math.random() * names_list.length);
        var random_name = names_list[zufallsIndex];
        if (random_name == '') {
            random_number();
        } else{
            element.innerHTML = random_name;
        }

    } else {
        var zufallszahl = Math.floor(Math.random() * 100) + 1;
        element.innerHTML = zufallszahl;

    }

}


function istEineZahl(eingabe) {
    eingabe = eingabe.trim(); 
    return eingabe !== "" && !isNaN(eingabe) && Number.isInteger(parseFloat(eingabe));
}