    $("#form").submit(function (e) {
        e.preventDefault();

        let name = $("#nom").val();
        let firstname = $("#prenom").val();
        let dateNaissance = $("#dateNaissance").val();
        let error = false;


        if (name === '') {
            $("#nom").css("background-color", "red");
            error = true;
        } else {
            $("#nom").css("background-color", "white");
        }
        if (firstname === '') {
            $("#prenom").css("background-color", "red");
            error = true;
        } else {
            $("#prenom").css("background-color", "white");
        }
        if (dateNaissance === '') {
            $("#dateNaissance").css("background-color", "red");
            error = true;
        } else {
            $("#dateNaissance").css("background-color", "white");
        }
        if (!error) {
            $("#resultat").text("Nom : " + name + " Prénom : " + firstname + " Date de naissance : " + dateNaissance);
        }
        return false;
    });
