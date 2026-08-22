// ===============================
// SBC SCHOOL - GESTION DES ÉLÈVES
// ===============================

let eleves = JSON.parse(localStorage.getItem("sbcEleves")) || [];

const menuButtons = document.querySelectorAll("nav button");
const dashboardContent = document.getElementById("dashboardContent");

menuButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const section = button.textContent.trim();

     if (section.includes("Élèves")) {

    afficherEleves();

} else if (section.includes("Enseignants")) {

    afficherEnseignants();

} else if (section.includes("Classes")) {

    afficherClasses();

} else if (section.includes("Matières")) {

    afficherMatieres();
    } else if (section.includes("Parents")) {

    afficherParents();

} else if (section.includes("Paiements")) {

    afficherPaiements();

} else if (section.includes("Reçus")) {

    afficherRecus();

} else if (section.includes("Notes")) {

    afficherNotes();

} else if (section.includes("Bulletins")) {

    afficherBulletins();
} else if (section.includes("Paramètres")) {

    afficherParametres();

} else {

    alert("La section " + section + " sera bientôt disponible.");

}

    });

});


// ===============================
// PAGE DES ÉLÈVES
// ===============================

function afficherEleves() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>
                <h2>Gestion des élèves</h2>
                <p>Gérer les élèves de l'établissement</p>
            </div>

            <button class="add-button" onclick="afficherFormulaireEleve()">
                ➕ Ajouter un élève
            </button>

        </div>

        <div class="student-search">

            <input
                type="text"
                id="rechercheEleve"
                placeholder="🔎 Rechercher un élève..."
                onkeyup="rechercherEleve()"
            >

        </div>

        <div class="student-table-container">

            <table>

                <thead>

                    <tr>
                        <th>Matricule</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Classe</th>
                        <th>Téléphone parent</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody id="listeEleves"></tbody>

            </table>

        </div>
    `;

    afficherListeEleves();
}


// ===============================
// FORMULAIRE AJOUTER ÉLÈVE
// ===============================

function afficherFormulaireEleve() {
        if (!verifierLimiteEleves()) {

        return;

    }
    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <div>
                    <h2>Ajouter un élève</h2>
                    <p>Remplissez les informations de l'élève</p>
                </div>

            </div>


            <form id="formEleve">

                <div class="form-grid">


                    <div class="form-group">

                        <label>Matricule</label>

                        <input
                            type="text"
                            id="matricule"
                            placeholder="Ex : SBC-2026-001"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Nom</label>

                        <input
                            type="text"
                            id="nom"
                            placeholder="Nom de famille"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Prénom</label>

                        <input
                            type="text"
                            id="prenom"
                            placeholder="Prénom"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Sexe</label>

                        <select id="sexe" required>

                            <option value="">Sélectionner</option>
                            <option value="Masculin">Masculin</option>
                            <option value="Féminin">Féminin</option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Date de naissance</label>

                        <input
                            type="date"
                            id="dateNaissance"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Classe</label>

                        <select id="classe" required>

                            <option value="">Sélectionner une classe</option>

                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>

                            <option value="CP1">CP1</option>
                            <option value="CP2">CP2</option>

                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>

                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>

                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>

                            <option value="2nde">2nde</option>
                            <option value="1ère">1ère</option>
                            <option value="Terminale">Terminale</option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Téléphone du parent</label>

                        <input
                            type="tel"
                            id="telephone"
                            placeholder="Ex : 06 000 00 00"
                        >

                    </div>


                    <div class="form-group">

                        <label>Adresse</label>

                        <input
                            type="text"
                            id="adresse"
                            placeholder="Adresse de résidence"
                        >

                    </div>
                    <div class="form-group">

    <label>Frais d'inscription (FCFA)</label>

    <input
        type="number"
        id="fraisInscription"
        placeholder="Ex : 25000"
        min="0"
        value="0"
    >

</div>


<div class="form-group">

    <label>Frais de scolarité (FCFA)</label>

    <input
        type="number"
        id="fraisScolarite"
        placeholder="Ex : 150000"
        min="0"
        value="0"
    >

</div>


<div class="form-group">

    <label>Frais de transport (FCFA)</label>

    <input
        type="number"
        id="fraisTransport"
        placeholder="Ex : 50000"
        min="0"
        value="0"
    >

</div>


<div class="form-group">

    <label>Frais de cantine (FCFA)</label>

    <input
        type="number"
        id="fraisCantine"
        placeholder="Ex : 40000"
        min="0"
        value="0"
    >

</div>


<div class="form-group">

    <label>Autres frais (FCFA)</label>

    <input
        type="number"
        id="autresFrais"
        placeholder="Ex : 10000"
        min="0"
        value="0"
    >

</div>

                </div>


                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherEleves()"
                    >
                        ❌ Annuler
                    </button>

                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer l'élève
                    </button>

                </div>

            </form>

        </div>
    `;


    document
        .getElementById("formEleve")
        .addEventListener("submit", enregistrerEleve);

}


// ===============================
// ENREGISTRER L'ÉLÈVE
// ===============================

function enregistrerEleve(event) {

    event.preventDefault();

    const nouvelEleve = {

        matricule:
            document.getElementById("matricule").value,

        nom:
            document.getElementById("nom").value,

        prenom:
            document.getElementById("prenom").value,

        sexe:
            document.getElementById("sexe").value,

        dateNaissance:
            document.getElementById("dateNaissance").value,

        classe:
            document.getElementById("classe").value,

        telephone:
            document.getElementById("telephone").value,

        adresse:
    document.getElementById("adresse").value,

fraisInscription:
    Number(
        document.getElementById(
            "fraisInscription"
        ).value
    ) || 0,

fraisScolarite:
    Number(
        document.getElementById(
            "fraisScolarite"
        ).value
    ) || 0,

fraisTransport:
    Number(
        document.getElementById(
            "fraisTransport"
        ).value
    ) || 0,

fraisCantine:
    Number(
        document.getElementById(
            "fraisCantine"
        ).value
    ) || 0,

autresFrais:
    Number(
        document.getElementById(
            "autresFrais"
        ).value
    ) || 0

};


    eleves.push(nouvelEleve);


    localStorage.setItem(
        "sbcEleves",
        JSON.stringify(eleves)
    );


    alert("✅ Élève enregistré avec succès !");


    afficherEleves();

}


// ===============================
// AFFICHER LA LISTE
// ===============================

function afficherListeEleves() {

    const tableau =
        document.getElementById("listeEleves");

    if (!tableau) {
        return;
    }


    if (eleves.length === 0) {

        tableau.innerHTML = `

            <tr>

                <td colspan="6">

                    Aucun élève enregistré.

                </td>

            </tr>

        `;

        return;
    }


    tableau.innerHTML = "";


    eleves.forEach(function(eleve, index) {

        tableau.innerHTML += `

            <tr>

                <td>${eleve.matricule}</td>

                <td>${eleve.nom}</td>

                <td>${eleve.prenom}</td>

                <td>${eleve.classe}</td>

                <td>${eleve.telephone}</td>

             <td>

    <button
        onclick="voirDossierEleve(${index})"
        title="Voir le dossier"
    >
        👁️
    </button>

    <button
        onclick="modifierEleve(${index})"
        title="Modifier"
    >
        ✏️
    </button>

    <button
        onclick="supprimerEleve(${index})"
        title="Supprimer"
    >
        🗑️
    </button>

</td>

            </tr>

        `;

    });

}
// ===============================
// DOSSIER COMPLET DE L'ÉLÈVE
// ===============================

function voirDossierEleve(index) {

    const eleve = eleves[index];

    if (!eleve) {

        alert("⚠️ Élève introuvable.");

        return;

    }


    // ===============================
    // NOTES DE L'ÉLÈVE
    // ===============================

    const notesEleve =
        notes.filter(function(note) {

            return note.eleve ===
                eleve.matricule;

        });


    // ===============================
    // PAIEMENTS DE L'ÉLÈVE
    // ===============================

    const paiementsEleve =
        paiements.filter(function(paiement) {

            return paiement.eleve ===
                eleve.matricule;

        });


    const totalPaye =
        paiementsEleve.reduce(
            function(total, paiement) {

                return total +
                    Number(paiement.montant || 0);

            },
            0
        );
        // ===============================
// SITUATION FINANCIÈRE
// ===============================

const totalPrevu =

    Number(eleve.fraisInscription || 0) +

    Number(eleve.fraisScolarite || 0) +

    Number(eleve.fraisTransport || 0) +

    Number(eleve.fraisCantine || 0) +

    Number(eleve.autresFrais || 0);


const resteAPayer =
    Math.max(
        totalPrevu - totalPaye,
        0
    );


    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <div>

                    <h2>👨‍🎓 Dossier de l'élève</h2>

                    <p>
                        Informations complètes de
                        ${eleve.prenom} ${eleve.nom}
                    </p>

                </div>

            </div>


            <!-- INFORMATIONS PERSONNELLES -->

            <div class="form-container">

                <h3>👤 Informations personnelles</h3>

                <p>
                    <strong>Matricule :</strong>
                    ${eleve.matricule}
                </p>

                <p>
                    <strong>Nom :</strong>
                    ${eleve.nom}
                </p>

                <p>
                    <strong>Prénom :</strong>
                    ${eleve.prenom}
                </p>

                <p>
                    <strong>Sexe :</strong>
                    ${eleve.sexe}
                </p>

                <p>
                    <strong>Date de naissance :</strong>
                    ${eleve.dateNaissance}
                </p>

                <p>
                    <strong>Classe :</strong>
                    ${eleve.classe}
                </p>

                <p>
                    <strong>Téléphone du parent :</strong>
                    ${eleve.telephone || "Non renseigné"}
                </p>

                <p>
                    <strong>Adresse :</strong>
                    ${eleve.adresse || "Non renseignée"}
                </p>

            </div>


            <!-- NOTES -->

            <div class="form-container">

                <h3>📝 Notes</h3>

                ${
                    notesEleve.length === 0

                    ?

                    `<p>Aucune note enregistrée.</p>`

                    :

                    `

                    <div class="student-table-container">

                        <table>

                            <thead>

                                <tr>

                                    <th>Matière</th>
                                    <th>Note</th>
                                    <th>Coefficient</th>
                                    <th>Type</th>
                                    <th>Trimestre</th>

                                </tr>

                            </thead>

                            <tbody>

                                ${

                                    notesEleve.map(
                                        function(note) {

                                            return `

                                                <tr>

                                                    <td>
                                                        ${note.matiere}
                                                    </td>

                                                    <td>
                                                        ${note.valeur}/20
                                                    </td>

                                                    <td>
                                                        ${note.coefficient}
                                                    </td>

                                                    <td>
                                                        ${note.typeEvaluation}
                                                    </td>

                                                    <td>
                                                        ${note.trimestre}
                                                    </td>

                                                </tr>

                                            `;

                                        }
                                    ).join("")

                                }

                            </tbody>

                        </table>

                    </div>

                    `

                }

            </div>

<!-- ===============================
     SITUATION FINANCIÈRE
================================ -->

<div class="form-container">

    <h3>💰 Situation financière</h3>

    <p>
        <strong>Frais d'inscription :</strong>

        ${Number(
            eleve.fraisInscription || 0
        ).toLocaleString("fr-FR")}

        FCFA
    </p>

    <p>
        <strong>Frais de scolarité :</strong>

        ${Number(
            eleve.fraisScolarite || 0
        ).toLocaleString("fr-FR")}

        FCFA
    </p>

    <p>
        <strong>Transport :</strong>

        ${Number(
            eleve.fraisTransport || 0
        ).toLocaleString("fr-FR")}

        FCFA
    </p>

    <p>
        <strong>Cantine :</strong>

        ${Number(
            eleve.fraisCantine || 0
        ).toLocaleString("fr-FR")}

        FCFA
    </p>

    <p>
        <strong>Autres frais :</strong>

        ${Number(
            eleve.autresFrais || 0
        ).toLocaleString("fr-FR")}

        FCFA
    </p>

    <hr>

    <p>
        <strong>Total prévu :</strong>

        ${totalPrevu.toLocaleString("fr-FR")}

        FCFA
    </p>

    <p>
        <strong>Total payé :</strong>

        ${totalPaye.toLocaleString("fr-FR")}

        FCFA
    </p>

    <p>
        <strong>Reste à payer :</strong>

        ${resteAPayer.toLocaleString("fr-FR")}

        FCFA
    </p>

</div>
            <!-- PAIEMENTS -->

            <div class="form-container">

                <h3>💰 Historique des paiements</h3>

                <p>

                    <strong>Total payé :</strong>

                    ${totalPaye.toLocaleString("fr-FR")}
                    FCFA

                </p>


                ${
                    paiementsEleve.length === 0

                    ?

                    `<p>Aucun paiement enregistré.</p>`

                    :

                    `

                    <div class="student-table-container">

                        <table>

                            <thead>

                                <tr>

                                    <th>Référence</th>
                                    <th>Type</th>
                                    <th>Montant</th>
                                    <th>Date</th>

                                </tr>

                            </thead>

                            <tbody>

                                ${

                                    paiementsEleve.map(
                                        function(paiement) {

                                            return `

                                                <tr>

                                                    <td>
                                                        ${paiement.reference}
                                                    </td>

                                                    <td>
                                                        ${paiement.type}
                                                    </td>

                                                    <td>
                                                        ${
                                                            Number(
                                                                paiement.montant
                                                            ).toLocaleString(
                                                                "fr-FR"
                                                            )
                                                        }
                                                        FCFA
                                                    </td>

                                                    <td>
                                                        ${paiement.date}
                                                    </td>

                                                </tr>

                                            `;

                                        }
                                    ).join("")

                                }

                            </tbody>

                        </table>

                    </div>

                    `

                }

            </div>


            <!-- ACTIONS -->

            <div class="form-actions">

                <button
                    type="button"
                    class="cancel-button"
                    onclick="afficherEleves()"
                >

                    ↩️ Retour aux élèves

                </button>


                <button
                    type="button"
                    class="save-button"
                    onclick="genererBulletinDepuisDossier('${eleve.matricule}')"
                >

                    📊 Voir le bulletin

                </button>
                <button
    type="button"
    class="save-button"
    onclick="imprimerDossierEleve(${index})"
>
    🖨️ Imprimer le dossier
</button>

            </div>

        </div>

    `;

}
// ===============================
// IMPRIMER LE DOSSIER DE L'ÉLÈVE
// ===============================

function imprimerDossierEleve(index) {

    const eleve = eleves[index];

    if (!eleve) {

        alert("⚠️ Élève introuvable.");

        return;

    }

    const notesEleve =
        notes.filter(function(note) {

            return note.eleve ===
                eleve.matricule;

        });

    const paiementsEleve =
        paiements.filter(function(paiement) {

            return paiement.eleve ===
                eleve.matricule;

        });

    const totalPaye =
        paiementsEleve.reduce(
            function(total, paiement) {

                return total +
                    Number(paiement.montant || 0);

            },
            0
        );

    const totalPrevu =

        Number(eleve.fraisInscription || 0) +
        Number(eleve.fraisScolarite || 0) +
        Number(eleve.fraisTransport || 0) +
        Number(eleve.fraisCantine || 0) +
        Number(eleve.autresFrais || 0);

    const resteAPayer =
        Math.max(totalPrevu - totalPaye, 0);


    const fenetre =
        window.open(
            "",
            "_blank",
            "width=900,height=1000"
        );


    fenetre.document.write(`

        <!DOCTYPE html>

        <html lang="fr">

        <head>

            <meta charset="UTF-8">

            <title>
                Dossier - ${eleve.nom} ${eleve.prenom}
            </title>

            <style>

                @page {
                    size: A4;
                    margin: 15mm;
                }

                body {

                    font-family: Arial, sans-serif;

                    margin: 0;

                    color: #222;

                }

                .dossier {

                    width: 100%;

                }

                .entete {

                    text-align: center;

                    border-bottom: 2px solid #0f3d91;

                    padding-bottom: 15px;

                    margin-bottom: 20px;

                }

                .entete h1 {

                    color: #0f3d91;

                    margin: 5px 0;

                }

                .section {

                    margin-bottom: 20px;

                    border: 1px solid #ddd;

                    padding: 15px;

                }

                .section h2 {

                    margin-top: 0;

                    color: #0f3d91;

                    border-bottom: 1px solid #ddd;

                    padding-bottom: 8px;

                }

                .infos {

                    display: grid;

                    grid-template-columns: 1fr 1fr;

                    gap: 8px;

                }

                table {

                    width: 100%;

                    border-collapse: collapse;

                    margin-top: 10px;

                }

                th, td {

                    border: 1px solid #ccc;

                    padding: 7px;

                    text-align: left;

                }

                th {

                    background: #f2f2f2;

                }

                .total {

                    font-weight: bold;

                    font-size: 16px;

                }

                .signature {

                    display: flex;

                    justify-content: space-between;

                    margin-top: 50px;

                    text-align: center;

                }

                .signature div {

                    width: 40%;

                }

                .impression {

                    text-align: center;

                    margin: 30px;

                }

                .impression button {

                    padding: 12px 25px;

                    border: none;

                    background: #0f3d91;

                    color: white;

                    cursor: pointer;

                }

                @media print {

                    .impression {

                        display: none;

                    }

                }

            </style>

        </head>

        <body>

            <div class="dossier">

                <div class="entete">

                    <h1>
                        DOSSIER SCOLAIRE
                    </h1>

                    <p>
                        ${eleve.nom} ${eleve.prenom}
                    </p>

                </div>


                <!-- INFORMATIONS -->

                <div class="section">

                    <h2>
                        👤 Informations personnelles
                    </h2>

                    <div class="infos">

                        <div>
                            <strong>Matricule :</strong>
                            ${eleve.matricule}
                        </div>

                        <div>
                            <strong>Nom :</strong>
                            ${eleve.nom}
                        </div>

                        <div>
                            <strong>Prénom :</strong>
                            ${eleve.prenom}
                        </div>

                        <div>
                            <strong>Sexe :</strong>
                            ${eleve.sexe}
                        </div>

                        <div>
                            <strong>Date de naissance :</strong>
                            ${eleve.dateNaissance}
                        </div>

                        <div>
                            <strong>Classe :</strong>
                            ${eleve.classe}
                        </div>

                        <div>
                            <strong>Téléphone :</strong>
                            ${eleve.telephone || "Non renseigné"}
                        </div>

                        <div>
                            <strong>Adresse :</strong>
                            ${eleve.adresse || "Non renseignée"}
                        </div>

                    </div>

                </div>


                <!-- NOTES -->

                <div class="section">

                    <h2>
                        📝 Notes
                    </h2>

                    ${
                        notesEleve.length === 0

                        ?

                        "<p>Aucune note enregistrée.</p>"

                        :

                        `

                        <table>

                            <thead>

                                <tr>

                                    <th>Matière</th>
                                    <th>Note</th>
                                    <th>Coefficient</th>
                                    <th>Type</th>
                                    <th>Trimestre</th>

                                </tr>

                            </thead>

                            <tbody>

                                ${
                                    notesEleve.map(
                                        function(note) {

                                            return `

                                                <tr>

                                                    <td>
                                                        ${note.matiere}
                                                    </td>

                                                    <td>
                                                        ${note.valeur}/20
                                                    </td>

                                                    <td>
                                                        ${note.coefficient}
                                                    </td>

                                                    <td>
                                                        ${note.typeEvaluation}
                                                    </td>

                                                    <td>
                                                        ${note.trimestre}
                                                    </td>

                                                </tr>

                                            `;

                                        }
                                    ).join("")
                                }

                            </tbody>

                        </table>

                        `

                    }

                </div>


                <!-- FINANCES -->

                <div class="section">

                    <h2>
                        💰 Situation financière
                    </h2>

                    <p>
                        <strong>Total prévu :</strong>
                        ${totalPrevu.toLocaleString("fr-FR")}
                        FCFA
                    </p>

                    <p>
                        <strong>Total payé :</strong>
                        ${totalPaye.toLocaleString("fr-FR")}
                        FCFA
                    </p>

                    <p class="total">
                        <strong>Reste à payer :</strong>
                        ${resteAPayer.toLocaleString("fr-FR")}
                        FCFA
                    </p>

                </div>


                <!-- PAIEMENTS -->

                <div class="section">

                    <h2>
                        🧾 Historique des paiements
                    </h2>

                    ${
                        paiementsEleve.length === 0

                        ?

                        "<p>Aucun paiement enregistré.</p>"

                        :

                        `

                        <table>

                            <thead>

                                <tr>

                                    <th>Référence</th>
                                    <th>Type</th>
                                    <th>Montant</th>
                                    <th>Date</th>

                                </tr>

                            </thead>

                            <tbody>

                                ${
                                    paiementsEleve.map(
                                        function(paiement) {

                                            return `

                                                <tr>

                                                    <td>
                                                        ${paiement.reference}
                                                    </td>

                                                    <td>
                                                        ${paiement.type}
                                                    </td>

                                                    <td>
                                                        ${
                                                            Number(
                                                                paiement.montant
                                                            ).toLocaleString(
                                                                "fr-FR"
                                                            )
                                                        }
                                                        FCFA
                                                    </td>

                                                    <td>
                                                        ${paiement.date}
                                                    </td>

                                                </tr>

                                            `;

                                        }
                                    ).join("")
                                }

                            </tbody>

                        </table>

                        `

                    }

                </div>


                <div class="signature">

                    <div>

                        <strong>
                            Signature du professeur
                        </strong>

                        <br><br><br>

                        ______________________

                    </div>


                    <div>

                        <strong>
                            Signature de la Direction
                        </strong>

                        <br><br><br>

                        ______________________

                    </div>

                </div>


                <div class="impression">

                    <button onclick="window.print()">

                        🖨️ Imprimer

                    </button>

                </div>

            </div>

        </body>

        </html>

    `);

    fenetre.document.close();

}
// ===============================
// BULLETIN DEPUIS LE DOSSIER ÉLÈVE
// ===============================

function genererBulletinDepuisDossier(matricule) {

    const select =
        document.getElementById("eleveBulletin");

    if (select) {

        select.value = matricule;

        genererBulletin();

        return;
    }


    // Si la page Bulletin n'est pas encore ouverte
    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>📊 Bulletin scolaire</h2>

                <p>
                    Sélectionnez le trimestre
                </p>

            </div>


            <div class="form-group">

                <label>Élève</label>

                <select id="eleveBulletin">

                    <option value="">
                        Sélectionner un élève
                    </option>

                    ${
                        eleves.map(function(e) {

                            return `

                                <option
                                    value="${e.matricule}"
                                    ${
                                        e.matricule === matricule
                                            ? "selected"
                                            : ""
                                    }
                                >

                                    ${e.nom}
                                    ${e.prenom}
                                    -
                                    ${e.classe}

                                </option>

                            `;

                        }).join("")
                    }

                </select>

            </div>


            <div
                class="form-group"
                style="margin-top: 15px;"
            >

                <label>Trimestre</label>

                <select
                    id="trimestreBulletin"
                    onchange="changerTrimestreBulletin()"
                >

                    <option value="1er trimestre">
                        1er trimestre
                    </option>

                    <option value="2e trimestre">
                        2e trimestre
                    </option>

                    <option value="3e trimestre">
                        3e trimestre
                    </option>

                </select>

            </div>


            <div
                id="contenuBulletin"
                style="margin-top: 25px;"
            ></div>

        </div>

    `;


    window.trimestreBulletin =
        "1er trimestre";


    document
        .getElementById("eleveBulletin")
        .addEventListener(
            "change",
            genererBulletin
        );


    genererBulletin();

}
// ===============================
// SUPPRIMER
// ===============================

function supprimerEleve(index) {

    const confirmation = confirm(
        "Voulez-vous vraiment supprimer cet élève ?"
    );


    if (!confirmation) {
        return;
    }


    eleves.splice(index, 1);


    localStorage.setItem(
        "sbcEleves",
        JSON.stringify(eleves)
    );


    afficherListeEleves();

}


// ===============================
// RECHERCHER
// ===============================

function rechercherEleve() {

    const recherche =
        document.getElementById("rechercheEleve").value.toLowerCase();


    const lignes =
        document.querySelectorAll("#listeEleves tr");


    lignes.forEach(function(ligne) {

        const texte =
            ligne.textContent.toLowerCase();


        if (texte.includes(recherche)) {

            ligne.style.display = "";

        } else {

            ligne.style.display = "none";

        }

    });

}
// ===============================
// MODIFIER UN ÉLÈVE
// ===============================

function modifierEleve(index) {

    const eleve = eleves[index];

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Modifier un élève</h2>

                <p>
                    Modifier les informations de ${eleve.prenom} ${eleve.nom}
                </p>

            </div>


            <form id="formModification">

                <div class="form-grid">

                    <div class="form-group">

                        <label>Matricule</label>

                        <input
                            type="text"
                            id="matricule"
                            value="${eleve.matricule}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Nom</label>

                        <input
                            type="text"
                            id="nom"
                            value="${eleve.nom}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Prénom</label>

                        <input
                            type="text"
                            id="prenom"
                            value="${eleve.prenom}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Sexe</label>

                        <select id="sexe" required>

                            <option value="Masculin"
                                ${eleve.sexe === "Masculin" ? "selected" : ""}>
                                Masculin
                            </option>

                            <option value="Féminin"
                                ${eleve.sexe === "Féminin" ? "selected" : ""}>
                                Féminin
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Date de naissance</label>

                        <input
                            type="date"
                            id="dateNaissance"
                            value="${eleve.dateNaissance}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Classe</label>

                        <select id="classe" required>

                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>

                            <option value="CP1">CP1</option>
                            <option value="CP2">CP2</option>

                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>

                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>

                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>

                            <option value="2nde">2nde</option>
                            <option value="1ère">1ère</option>
                            <option value="Terminale">Terminale</option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Téléphone du parent</label>

                        <input
                            type="tel"
                            id="telephone"
                            value="${eleve.telephone}"
                        >

                    </div>


                    <div class="form-group">

                        <label>Adresse</label>

                        <input
                            type="text"
                            id="adresse"
                            value="${eleve.adresse}"
                        >

                    </div>

                </div>


                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherEleves()"
                    >
                        ❌ Annuler
                    </button>


                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer les modifications
                    </button>

                </div>

            </form>

        </div>
    `;


    document
        .getElementById("classe")
        .value = eleve.classe;


    document
        .getElementById("formModification")
        .addEventListener("submit", function(event) {

            event.preventDefault();


            eleves[index] = {

                matricule:
                    document.getElementById("matricule").value,

                nom:
                    document.getElementById("nom").value,

                prenom:
                    document.getElementById("prenom").value,

                sexe:
                    document.getElementById("sexe").value,

                dateNaissance:
                    document.getElementById("dateNaissance").value,

                classe:
                    document.getElementById("classe").value,

                telephone:
                    document.getElementById("telephone").value,

                adresse:
                    document.getElementById("adresse").value

            };


            localStorage.setItem(
                "sbcEleves",
                JSON.stringify(eleves)
            );


            alert("✅ Informations modifiées avec succès !");


            afficherEleves();

        });

}
// ===============================
// SBC SCHOOL - GESTION DES ENSEIGNANTS
// ===============================

let enseignants =
    JSON.parse(localStorage.getItem("sbcEnseignants")) || [];


// ===============================
// PAGE DES ENSEIGNANTS
// ===============================

function afficherEnseignants() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>
                <h2>Gestion des enseignants</h2>
                <p>Gérer les enseignants de l'établissement</p>
            </div>

            <button
                class="add-button"
                onclick="afficherFormulaireEnseignant()"
            >
                ➕ Ajouter un enseignant
            </button>

        </div>


        <div class="student-search">

            <input
                type="text"
                id="rechercheEnseignant"
                placeholder="🔎 Rechercher un enseignant..."
                onkeyup="rechercherEnseignant()"
            >

        </div>


        <div class="student-table-container">

            <table>

                <thead>

                    <tr>
                        <th>Matricule</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Matière</th>
                        <th>Téléphone</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody id="listeEnseignants"></tbody>

            </table>

        </div>
    `;

    afficherListeEnseignants();
}


// ===============================
// FORMULAIRE ENSEIGNANT
// ===============================

function afficherFormulaireEnseignant() {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Ajouter un enseignant</h2>

                <p>
                    Remplissez les informations de l'enseignant
                </p>

            </div>


            <form id="formEnseignant">

                <div class="form-grid">


                    <div class="form-group">

                        <label>Matricule</label>

                        <input
                            type="text"
                            id="matriculeEnseignant"
                            placeholder="Ex : ENS-2026-001"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Nom</label>

                        <input
                            type="text"
                            id="nomEnseignant"
                            placeholder="Nom de famille"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Prénom</label>

                        <input
                            type="text"
                            id="prenomEnseignant"
                            placeholder="Prénom"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Sexe</label>

                        <select id="sexeEnseignant" required>

                            <option value="">
                                Sélectionner
                            </option>

                            <option value="Masculin">
                                Masculin
                            </option>

                            <option value="Féminin">
                                Féminin
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Matière enseignée</label>

                        <input
                            type="text"
                            id="matiereEnseignant"
                            placeholder="Ex : Histoire-Géographie"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Téléphone</label>

                        <input
                            type="tel"
                            id="telephoneEnseignant"
                            placeholder="Ex : 06 000 00 00"
                        >

                    </div>


                    <div class="form-group">

                        <label>Adresse</label>

                        <input
                            type="text"
                            id="adresseEnseignant"
                            placeholder="Adresse"
                        >

                    </div>


                    <div class="form-group">

                        <label>Classe attribuée</label>

                        <select id="classeEnseignant" required>

                            <option value="">
                                Sélectionner une classe
                            </option>

                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>

                            <option value="CP1">CP1</option>
                            <option value="CP2">CP2</option>

                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>

                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>

                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>

                            <option value="2nde">2nde</option>
                            <option value="1ère">1ère</option>
                            <option value="Terminale">
                                Terminale
                            </option>

                        </select>

                    </div>

                </div>


                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherEnseignants()"
                    >
                        ❌ Annuler
                    </button>


                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer
                    </button>

                </div>

            </form>

        </div>
    `;


    document
        .getElementById("formEnseignant")
        .addEventListener(
            "submit",
            enregistrerEnseignant
        );
}


// ===============================
// ENREGISTRER ENSEIGNANT
// ===============================

function enregistrerEnseignant(event) {

    event.preventDefault();


    const enseignant = {

        matricule:
            document.getElementById(
                "matriculeEnseignant"
            ).value,

        nom:
            document.getElementById(
                "nomEnseignant"
            ).value,

        prenom:
            document.getElementById(
                "prenomEnseignant"
            ).value,

        sexe:
            document.getElementById(
                "sexeEnseignant"
            ).value,

        matiere:
            document.getElementById(
                "matiereEnseignant"
            ).value,

        telephone:
            document.getElementById(
                "telephoneEnseignant"
            ).value,

        adresse:
            document.getElementById(
                "adresseEnseignant"
            ).value,

        classe:
            document.getElementById(
                "classeEnseignant"
            ).value

    };


    enseignants.push(enseignant);


    localStorage.setItem(
        "sbcEnseignants",
        JSON.stringify(enseignants)
    );


    alert(
        "✅ Enseignant enregistré avec succès !"
    );


    afficherEnseignants();
}


// ===============================
// AFFICHER LA LISTE
// ===============================

function afficherListeEnseignants() {

    const tableau =
        document.getElementById(
            "listeEnseignants"
        );


    if (!tableau) {
        return;
    }


    if (enseignants.length === 0) {

        tableau.innerHTML = `

            <tr>

                <td colspan="6">
                    Aucun enseignant enregistré.
                </td>

            </tr>

        `;

        return;
    }


    tableau.innerHTML = "";


    enseignants.forEach(
        function(enseignant, index) {

            tableau.innerHTML += `

                <tr>

                    <td>
                        ${enseignant.matricule}
                    </td>

                    <td>
                        ${enseignant.nom}
                    </td>

                    <td>
                        ${enseignant.prenom}
                    </td>

                    <td>
                        ${enseignant.matiere}
                    </td>

                    <td>
                        ${enseignant.telephone}
                    </td>

                    <td>

                        <button
                            onclick="modifierEnseignant(${index})"
                        >
                            ✏️
                        </button>

                        <button
                            onclick="supprimerEnseignant(${index})"
                        >
                            🗑️
                        </button>

                    </td>

                </tr>

            `;

        }
    );
}


// ===============================
// SUPPRIMER ENSEIGNANT
// ===============================

function supprimerEnseignant(index) {

    const confirmation = confirm(
        "Voulez-vous vraiment supprimer cet enseignant ?"
    );


    if (!confirmation) {
        return;
    }


    enseignants.splice(index, 1);


    localStorage.setItem(
        "sbcEnseignants",
        JSON.stringify(enseignants)
    );


    afficherListeEnseignants();
}


// ===============================
// RECHERCHER ENSEIGNANT
// ===============================

function rechercherEnseignant() {

    const recherche =
        document.getElementById(
            "rechercheEnseignant"
        ).value.toLowerCase();


    const lignes =
        document.querySelectorAll(
            "#listeEnseignants tr"
        );


    lignes.forEach(function(ligne) {

        const texte =
            ligne.textContent.toLowerCase();


        if (texte.includes(recherche)) {

            ligne.style.display = "";

        } else {

            ligne.style.display = "none";

        }

    });
}
// ===============================
// MODIFIER UN ENSEIGNANT
// ===============================

function modifierEnseignant(index) {

    const enseignant = enseignants[index];

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Modifier un enseignant</h2>

                <p>
                    Modifier les informations de
                    ${enseignant.prenom} ${enseignant.nom}
                </p>

            </div>


            <form id="formModificationEnseignant">

                <div class="form-grid">


                    <div class="form-group">

                        <label>Matricule</label>

                        <input
                            type="text"
                            id="matriculeEnseignant"
                            value="${enseignant.matricule}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Nom</label>

                        <input
                            type="text"
                            id="nomEnseignant"
                            value="${enseignant.nom}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Prénom</label>

                        <input
                            type="text"
                            id="prenomEnseignant"
                            value="${enseignant.prenom}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Sexe</label>

                        <select id="sexeEnseignant" required>

                            <option value="Masculin">
                                Masculin
                            </option>

                            <option value="Féminin">
                                Féminin
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Matière enseignée</label>

                        <input
                            type="text"
                            id="matiereEnseignant"
                            value="${enseignant.matiere}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Téléphone</label>

                        <input
                            type="tel"
                            id="telephoneEnseignant"
                            value="${enseignant.telephone}"
                        >

                    </div>


                    <div class="form-group">

                        <label>Adresse</label>

                        <input
                            type="text"
                            id="adresseEnseignant"
                            value="${enseignant.adresse}"
                        >

                    </div>


                    <div class="form-group">

                        <label>Classe attribuée</label>

                        <select
                            id="classeEnseignant"
                            required
                        >

                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>

                            <option value="CP1">CP1</option>
                            <option value="CP2">CP2</option>

                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>

                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>

                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>

                            <option value="2nde">2nde</option>
                            <option value="1ère">1ère</option>
                            <option value="Terminale">
                                Terminale
                            </option>

                        </select>

                    </div>

                </div>


                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherEnseignants()"
                    >
                        ❌ Annuler
                    </button>


                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer les modifications
                    </button>

                </div>

            </form>

        </div>
    `;


    document.getElementById(
        "sexeEnseignant"
    ).value = enseignant.sexe;


    document.getElementById(
        "classeEnseignant"
    ).value = enseignant.classe;


    document
        .getElementById("formModificationEnseignant")
        .addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                enseignants[index] = {

                    matricule:
                        document.getElementById(
                            "matriculeEnseignant"
                        ).value,

                    nom:
                        document.getElementById(
                            "nomEnseignant"
                        ).value,

                    prenom:
                        document.getElementById(
                            "prenomEnseignant"
                        ).value,

                    sexe:
                        document.getElementById(
                            "sexeEnseignant"
                        ).value,

                    matiere:
                        document.getElementById(
                            "matiereEnseignant"
                        ).value,

                    telephone:
                        document.getElementById(
                            "telephoneEnseignant"
                        ).value,

                    adresse:
                        document.getElementById(
                            "adresseEnseignant"
                        ).value,

                    classe:
                        document.getElementById(
                            "classeEnseignant"
                        ).value

                };


                localStorage.setItem(
                    "sbcEnseignants",
                    JSON.stringify(enseignants)
                );


                alert(
                    "✅ Informations de l'enseignant modifiées avec succès !"
                );


                afficherEnseignants();

            }
        );

}
// ===============================
// SBC SCHOOL - GESTION DES CLASSES
// ===============================

let classes =
    JSON.parse(localStorage.getItem("sbcClasses")) || [];


// ===============================
// PAGE DES CLASSES
// ===============================

function afficherClasses() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>
                <h2>Gestion des classes</h2>
                <p>Gérer les classes de l'établissement</p>
            </div>

            <button
                class="add-button"
                onclick="afficherFormulaireClasse()"
            >
                ➕ Ajouter une classe
            </button>

        </div>


        <div class="student-search">

            <input
                type="text"
                id="rechercheClasse"
                placeholder="🔎 Rechercher une classe..."
                onkeyup="rechercherClasse()"
            >

        </div>


        <div class="student-table-container">

            <table>

                <thead>

                    <tr>
                        <th>Classe</th>
                        <th>Cycle</th>
                        <th>Enseignant titulaire</th>
                        <th>Capacité</th>
                        <th>Année scolaire</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody id="listeClasses"></tbody>

            </table>

        </div>
    `;

    afficherListeClasses();
}


// ===============================
// FORMULAIRE CLASSE
// ===============================

function afficherFormulaireClasse() {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Ajouter une classe</h2>

                <p>
                    Enregistrer une nouvelle classe
                </p>

            </div>


            <form id="formClasse">

                <div class="form-grid">


                    <div class="form-group">

                        <label>Nom de la classe</label>

                        <select id="nomClasse" required>

                            <option value="">
                                Sélectionner
                            </option>

                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>

                            <option value="CP1">CP1</option>
                            <option value="CP2">CP2</option>

                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>

                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>

                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>

                            <option value="2nde">2nde</option>
                            <option value="1ère">1ère</option>
                            <option value="Terminale">
                                Terminale
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Cycle</label>

                        <select id="cycleClasse" required>

                            <option value="">
                                Sélectionner
                            </option>

                            <option value="Primaire">
                                Primaire
                            </option>

                            <option value="Collège">
                                Collège
                            </option>

                            <option value="Lycée">
                                Lycée
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Enseignant titulaire</label>

                        <select id="enseignantClasse">

                            <option value="">
                                Aucun enseignant
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Capacité</label>

                        <input
                            type="number"
                            id="capaciteClasse"
                            placeholder="Ex : 40"
                            min="1"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Année scolaire</label>

                        <input
                            type="text"
                            id="anneeClasse"
                            value="2026-2027"
                            required
                        >

                    </div>

                </div>


                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherClasses()"
                    >
                        ❌ Annuler
                    </button>


                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer
                    </button>

                </div>

            </form>

        </div>
    `;


    // Ajouter les enseignants disponibles
    const selectEnseignant =
        document.getElementById("enseignantClasse");


    enseignants.forEach(function(enseignant) {

        const option =
            document.createElement("option");

        option.value =
            enseignant.matricule;

        option.textContent =
            enseignant.nom + " " +
            enseignant.prenom;

        selectEnseignant.appendChild(option);

    });


    document
        .getElementById("formClasse")
        .addEventListener(
            "submit",
            enregistrerClasse
        );
}


// ===============================
// ENREGISTRER CLASSE
// ===============================

function enregistrerClasse(event) {

    event.preventDefault();


    const classe = {

        nom:
            document.getElementById(
                "nomClasse"
            ).value,

        cycle:
            document.getElementById(
                "cycleClasse"
            ).value,

        enseignant:
            document.getElementById(
                "enseignantClasse"
            ).value,

        capacite:
            document.getElementById(
                "capaciteClasse"
            ).value,

        annee:
            document.getElementById(
                "anneeClasse"
            ).value

    };


    classes.push(classe);


    localStorage.setItem(
        "sbcClasses",
        JSON.stringify(classes)
    );


    alert(
        "✅ Classe enregistrée avec succès !"
    );


    afficherClasses();
}


// ===============================
// AFFICHER LES CLASSES
// ===============================

function afficherListeClasses() {

    const tableau =
        document.getElementById(
            "listeClasses"
        );


    if (!tableau) {
        return;
    }


    if (classes.length === 0) {

        tableau.innerHTML = `

            <tr>

                <td colspan="6">
                    Aucune classe enregistrée.
                </td>

            </tr>

        `;

        return;
    }


    tableau.innerHTML = "";


    classes.forEach(
        function(classe, index) {

            let nomEnseignant =
                "Aucun";


            const enseignant =
                enseignants.find(
                    function(e) {

                        return e.matricule ===
                            classe.enseignant;

                    }
                );


            if (enseignant) {

                nomEnseignant =
                    enseignant.nom +
                    " " +
                    enseignant.prenom;

            }


            tableau.innerHTML += `

                <tr>

                    <td>
                        ${classe.nom}
                    </td>

                    <td>
                        ${classe.cycle}
                    </td>

                    <td>
                        ${nomEnseignant}
                    </td>

                    <td>
                        ${classe.capacite}
                    </td>

                    <td>
                        ${classe.annee}
                    </td>

                 <td>

    <button
        onclick="modifierClasse(${index})"
    >
        ✏️
    </button>

    <button
        onclick="supprimerClasse(${index})"
    >
        🗑️
    </button>

</td>

                </tr>

            `;

        }
    );
}


// ===============================
// SUPPRIMER CLASSE
// ===============================

function supprimerClasse(index) {

    const confirmation =
        confirm(
            "Voulez-vous vraiment supprimer cette classe ?"
        );


    if (!confirmation) {
        return;
    }


    classes.splice(index, 1);


    localStorage.setItem(
        "sbcClasses",
        JSON.stringify(classes)
    );


    afficherListeClasses();
}


// ===============================
// RECHERCHER CLASSE
// ===============================

function rechercherClasse() {

    const recherche =
        document.getElementById(
            "rechercheClasse"
        ).value.toLowerCase();


    const lignes =
        document.querySelectorAll(
            "#listeClasses tr"
        );


    lignes.forEach(function(ligne) {

        const texte =
            ligne.textContent.toLowerCase();


        if (texte.includes(recherche)) {

            ligne.style.display = "";

        } else {

            ligne.style.display = "none";

        }

    });

}
// ===============================
// MODIFIER UNE CLASSE
// ===============================

function modifierClasse(index) {

    const classe = classes[index];

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Modifier une classe</h2>

                <p>
                    Modifier les informations de la classe
                    ${classe.nom}
                </p>

            </div>


            <form id="formModificationClasse">

                <div class="form-grid">


                    <div class="form-group">

                        <label>Nom de la classe</label>

                        <select id="nomClasse" required>

                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>

                            <option value="CP1">CP1</option>
                            <option value="CP2">CP2</option>

                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>

                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>

                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>

                            <option value="2nde">2nde</option>
                            <option value="1ère">1ère</option>
                            <option value="Terminale">
                                Terminale
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Cycle</label>

                        <select id="cycleClasse" required>

                            <option value="Primaire">
                                Primaire
                            </option>

                            <option value="Collège">
                                Collège
                            </option>

                            <option value="Lycée">
                                Lycée
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Enseignant titulaire</label>

                        <select id="enseignantClasse">

                            <option value="">
                                Aucun enseignant
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Capacité</label>

                        <input
                            type="number"
                            id="capaciteClasse"
                            value="${classe.capacite}"
                            min="1"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Année scolaire</label>

                        <input
                            type="text"
                            id="anneeClasse"
                            value="${classe.annee}"
                            required
                        >

                    </div>

                </div>


                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherClasses()"
                    >
                        ❌ Annuler
                    </button>


                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer les modifications
                    </button>

                </div>

            </form>

        </div>
    `;


    document.getElementById("nomClasse").value =
        classe.nom;

    document.getElementById("cycleClasse").value =
        classe.cycle;


    const selectEnseignant =
        document.getElementById(
            "enseignantClasse"
        );


    enseignants.forEach(function(enseignant) {

        const option =
            document.createElement("option");

        option.value =
            enseignant.matricule;

        option.textContent =
            enseignant.nom + " " +
            enseignant.prenom;

        selectEnseignant.appendChild(option);

    });


    selectEnseignant.value =
        classe.enseignant;


    document
        .getElementById("formModificationClasse")
        .addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                classes[index] = {

                    nom:
                        document.getElementById(
                            "nomClasse"
                        ).value,

                    cycle:
                        document.getElementById(
                            "cycleClasse"
                        ).value,

                    enseignant:
                        document.getElementById(
                            "enseignantClasse"
                        ).value,

                    capacite:
                        document.getElementById(
                            "capaciteClasse"
                        ).value,

                    annee:
                        document.getElementById(
                            "anneeClasse"
                        ).value

                };


                localStorage.setItem(
                    "sbcClasses",
                    JSON.stringify(classes)
                );


                alert(
                    "✅ Classe modifiée avec succès !"
                );


                afficherClasses();

            }
        );

}
// ===============================
// SBC SCHOOL - GESTION DES MATIÈRES
// ===============================

let matieres =
    JSON.parse(localStorage.getItem("sbcMatieres")) || [];
// ===============================
// GESTION DES NOTES
// ===============================

let notes =
    JSON.parse(localStorage.getItem("sbcNotes")) || [];

// ===============================
// PAGE DES MATIÈRES
// ===============================

function afficherMatieres() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>
                <h2>Gestion des matières</h2>
                <p>Gérer les matières enseignées</p>
            </div>

            <button
                class="add-button"
                onclick="afficherFormulaireMatiere()"
            >
                ➕ Ajouter une matière
            </button>

        </div>


        <div class="student-search">

            <input
                type="text"
                id="rechercheMatiere"
                placeholder="🔎 Rechercher une matière..."
                onkeyup="rechercherMatiere()"
            >

        </div>


        <div class="student-table-container">

            <table>

                <thead>

                    <tr>
                        <th>Code</th>
                        <th>Matière</th>
                        <th>Cycle</th>
                        <th>Classe</th>
                        <th>Coefficient</th>
                        <th>Enseignant</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody id="listeMatieres"></tbody>

            </table>

        </div>
    `;

    afficherListeMatieres();
}


// ===============================
// FORMULAIRE MATIÈRE
// ===============================

function afficherFormulaireMatiere() {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Ajouter une matière</h2>

                <p>
                    Enregistrer une nouvelle matière
                </p>

            </div>


            <form id="formMatiere">

                <div class="form-grid">


                    <div class="form-group">

                        <label>Code de la matière</label>

                        <input
                            type="text"
                            id="codeMatiere"
                            placeholder="Ex : HG"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Nom de la matière</label>

                        <input
                            type="text"
                            id="nomMatiere"
                            placeholder="Ex : Histoire-Géographie"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Cycle</label>

                        <select id="cycleMatiere" required>

                            <option value="">
                                Sélectionner
                            </option>

                            <option value="Primaire">
                                Primaire
                            </option>

                            <option value="Collège">
                                Collège
                            </option>

                            <option value="Lycée">
                                Lycée
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Classe</label>

                        <select id="classeMatiere" required>

                            <option value="">
                                Sélectionner
                            </option>

                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>

                            <option value="CP1">CP1</option>
                            <option value="CP2">CP2</option>

                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>

                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>

                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>

                            <option value="2nde">2nde</option>
                            <option value="1ère">1ère</option>
                            <option value="Terminale">
                                Terminale
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Coefficient</label>

                        <input
                            type="number"
                            id="coefficientMatiere"
                            value="1"
                            min="1"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Enseignant responsable</label>

                        <select id="enseignantMatiere">

                            <option value="">
                                Aucun enseignant
                            </option>

                        </select>

                    </div>

                </div>


                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherMatieres()"
                    >
                        ❌ Annuler
                    </button>


                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer
                    </button>

                </div>

            </form>

        </div>
    `;


    // Charger les enseignants existants
    const selectEnseignant =
        document.getElementById(
            "enseignantMatiere"
        );


    enseignants.forEach(function(enseignant) {

        const option =
            document.createElement("option");

        option.value =
            enseignant.matricule;

        option.textContent =
            enseignant.nom + " " +
            enseignant.prenom;

        selectEnseignant.appendChild(option);

    });


    document
        .getElementById("formMatiere")
        .addEventListener(
            "submit",
            enregistrerMatiere
        );
}


// ===============================
// ENREGISTRER MATIÈRE
// ===============================

function enregistrerMatiere(event) {

    event.preventDefault();


    const matiere = {

        code:
            document.getElementById(
                "codeMatiere"
            ).value,

        nom:
            document.getElementById(
                "nomMatiere"
            ).value,

        cycle:
            document.getElementById(
                "cycleMatiere"
            ).value,

        classe:
            document.getElementById(
                "classeMatiere"
            ).value,

        coefficient:
            document.getElementById(
                "coefficientMatiere"
            ).value,

        enseignant:
            document.getElementById(
                "enseignantMatiere"
            ).value

    };


    matieres.push(matiere);


    localStorage.setItem(
        "sbcMatieres",
        JSON.stringify(matieres)
    );


    alert(
        "✅ Matière enregistrée avec succès !"
    );


    afficherMatieres();
}


// ===============================
// AFFICHER LES MATIÈRES
// ===============================

function afficherListeMatieres() {

    const tableau =
        document.getElementById(
            "listeMatieres"
        );


    if (!tableau) {
        return;
    }


    if (matieres.length === 0) {

        tableau.innerHTML = `

            <tr>

                <td colspan="7">
                    Aucune matière enregistrée.
                </td>

            </tr>

        `;

        return;
    }


    tableau.innerHTML = "";


    matieres.forEach(
        function(matiere, index) {

            let nomEnseignant =
                "Aucun";


            const enseignant =
                enseignants.find(
                    function(e) {

                        return e.matricule ===
                            matiere.enseignant;

                    }
                );


            if (enseignant) {

                nomEnseignant =
                    enseignant.nom +
                    " " +
                    enseignant.prenom;

            }


            tableau.innerHTML += `

                <tr>

                    <td>
                        ${matiere.code}
                    </td>

                    <td>
                        ${matiere.nom}
                    </td>

                    <td>
                        ${matiere.cycle}
                    </td>

                    <td>
                        ${matiere.classe}
                    </td>

                    <td>
                        ${matiere.coefficient}
                    </td>

                    <td>
                        ${nomEnseignant}
                    </td>

                    <td>

                        <button
                            onclick="modifierMatiere(${index})"
                        >
                            ✏️
                        </button>

                        <button
                            onclick="supprimerMatiere(${index})"
                        >
                            🗑️
                        </button>

                    </td>

                </tr>

            `;

        }
    );
}


// ===============================
// SUPPRIMER MATIÈRE
// ===============================

function supprimerMatiere(index) {

    const confirmation =
        confirm(
            "Voulez-vous vraiment supprimer cette matière ?"
        );


    if (!confirmation) {
        return;
    }


    matieres.splice(index, 1);


    localStorage.setItem(
        "sbcMatieres",
        JSON.stringify(matieres)
    );


    afficherListeMatieres();
}


// ===============================
// RECHERCHER MATIÈRE
// ===============================

function rechercherMatiere() {

    const recherche =
        document.getElementById(
            "rechercheMatiere"
        ).value.toLowerCase();


    const lignes =
        document.querySelectorAll(
            "#listeMatieres tr"
        );


    lignes.forEach(function(ligne) {

        const texte =
            ligne.textContent.toLowerCase();


        if (texte.includes(recherche)) {

            ligne.style.display = "";

        } else {

            ligne.style.display = "none";

        }

    });

}
// ===============================
// MODIFIER UNE MATIÈRE
// ===============================

function modifierMatiere(index) {

    const matiere = matieres[index];

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Modifier une matière</h2>

                <p>
                    Modifier les informations de ${matiere.nom}
                </p>

            </div>

            <form id="formModificationMatiere">

                <div class="form-grid">

                    <div class="form-group">

                        <label>Code de la matière</label>

                        <input
                            type="text"
                            id="codeMatiere"
                            value="${matiere.code}"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label>Nom de la matière</label>

                        <input
                            type="text"
                            id="nomMatiere"
                            value="${matiere.nom}"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label>Cycle</label>

                        <select id="cycleMatiere" required>

                            <option value="Primaire">Primaire</option>
                            <option value="Collège">Collège</option>
                            <option value="Lycée">Lycée</option>

                        </select>

                    </div>

                    <div class="form-group">

                        <label>Classe</label>

                        <select id="classeMatiere" required>

                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>

                            <option value="CP1">CP1</option>
                            <option value="CP2">CP2</option>

                            <option value="CE1">CE1</option>
                            <option value="CE2">CE2</option>

                            <option value="CM1">CM1</option>
                            <option value="CM2">CM2</option>

                            <option value="6e">6e</option>
                            <option value="5e">5e</option>
                            <option value="4e">4e</option>
                            <option value="3e">3e</option>

                            <option value="2nde">2nde</option>
                            <option value="1ère">1ère</option>
                            <option value="Terminale">Terminale</option>

                        </select>

                    </div>

                    <div class="form-group">

                        <label>Coefficient</label>

                        <input
                            type="number"
                            id="coefficientMatiere"
                            value="${matiere.coefficient}"
                            min="1"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label>Enseignant responsable</label>

                        <select id="enseignantMatiere">

                            <option value="">
                                Aucun enseignant
                            </option>

                        </select>

                    </div>

                </div>

                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherMatieres()"
                    >
                        ❌ Annuler
                    </button>

                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer les modifications
                    </button>

                </div>

            </form>

        </div>
    `;


    document.getElementById("cycleMatiere").value =
        matiere.cycle;

    document.getElementById("classeMatiere").value =
        matiere.classe;


    const selectEnseignant =
        document.getElementById("enseignantMatiere");


    enseignants.forEach(function(enseignant) {

        const option =
            document.createElement("option");

        option.value =
            enseignant.matricule;

        option.textContent =
            enseignant.nom + " " +
            enseignant.prenom;

        selectEnseignant.appendChild(option);

    });


    selectEnseignant.value =
        matiere.enseignant;


    document
        .getElementById("formModificationMatiere")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            matieres[index] = {

                code:
                    document.getElementById(
                        "codeMatiere"
                    ).value,

                nom:
                    document.getElementById(
                        "nomMatiere"
                    ).value,

                cycle:
                    document.getElementById(
                        "cycleMatiere"
                    ).value,

                classe:
                    document.getElementById(
                        "classeMatiere"
                    ).value,

                coefficient:
                    document.getElementById(
                        "coefficientMatiere"
                    ).value,

                enseignant:
                    document.getElementById(
                        "enseignantMatiere"
                    ).value

            };


            localStorage.setItem(
                "sbcMatieres",
                JSON.stringify(matieres)
            );


            alert(
                "✅ Matière modifiée avec succès !"
            );


            afficherMatieres();

        });

}
// ===============================
// SBC SCHOOL - GESTION DES PAIEMENTS
// ===============================

let paiements =
    JSON.parse(localStorage.getItem("sbcPaiements")) || [];


// ===============================
// PAGE DES PAIEMENTS
// ===============================

function afficherPaiements() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>
                <h2>Gestion des paiements</h2>
                <p>Gérer les paiements de scolarité</p>
            </div>

            <button
                class="add-button"
                onclick="afficherFormulairePaiement()"
            >
                ➕ Nouveau paiement
            </button>

        </div>

        <div style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 25px 0;
        ">
        <!-- ===============================
     ENCAISSEMENTS MENSUELS
================================ -->

<div class="form-container" style="margin-top: 25px;">

    <div class="form-title">

        <h3>📅 Encaissements mensuels</h3>

        <p>
            Suivi des paiements encaissés par mois
        </p>

    </div>


    <div class="form-group">

        <label>Année</label>

        <select
            id="anneeStatistiques"
            onchange="afficherStatistiquesMensuelles()"
        >

            ${obtenirAnneesPaiements().map(function(annee) {

                return `

                    <option value="${annee}">
                        ${annee}
                    </option>

                `;

            }).join("")}

        </select>

    </div>


    <div class="student-table-container">

        <table>

            <thead>

                <tr>

                    <th>Mois</th>

                    <th>Total encaissé</th>

                </tr>

            </thead>


            <tbody id="listeStatistiquesMensuelles"></tbody>

        </table>

    </div>

</div>
        <!-- ===============================
             STATISTIQUES PAR MODE DE PAIEMENT
        ================================ -->

        <div class="form-container" style="margin-top: 25px;">

            <div class="form-title">

                <h3>📊 Répartition des paiements</h3>

                <p>
                    Montant encaissé selon le mode de paiement
                </p>

            </div>


            <div style="
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
            ">

                <div class="dashboard-card">

                    <h3>💵 Espèces</h3>

                    <p id="totalEspeces"
                       style="font-size: 20px; font-weight: bold;">
                        0 FCFA
                    </p>

                </div>


                <div class="dashboard-card">

                    <h3>📱 Mobile Money</h3>

                    <p id="totalMobileMoney"
                       style="font-size: 20px; font-weight: bold;">
                        0 FCFA
                    </p>

                </div>


                <div class="dashboard-card">

                    <h3>🏦 Virement</h3>

                    <p id="totalVirement"
                       style="font-size: 20px; font-weight: bold;">
                        0 FCFA
                    </p>

                </div>


                <div class="dashboard-card">

                    <h3>🧾 Chèque</h3>

                    <p id="totalCheque"
                       style="font-size: 20px; font-weight: bold;">
                        0 FCFA
                    </p>

                </div>

            </div>

        </div>
            <div class="dashboard-card">

                <h3>💵 Total encaissé</h3>

                <p style="
                    font-size: 24px;
                    font-weight: bold;
                ">

                    ${
                        paiements
                            .reduce(function(total, paiement) {

                                return total +
                                    Number(paiement.montant || 0);

                            }, 0)
                            .toLocaleString("fr-FR")
                    }

                    FCFA

                </p>

            </div>


            <div class="dashboard-card">

                <h3>🧾 Nombre de paiements</h3>

                <p style="
                    font-size: 24px;
                    font-weight: bold;
                ">

                    ${paiements.length}

                </p>

            </div>


            <div class="dashboard-card">

                <h3>📅 Aujourd'hui</h3>

                <p style="
                    font-size: 24px;
                    font-weight: bold;
                ">

                    ${
                        paiements
                            .filter(function(paiement) {

                                return paiement.date ===
                                    new Date()
                                        .toLocaleDateString("fr-FR");

                            })
                            .reduce(function(total, paiement) {

                                return total +
                                    Number(paiement.montant || 0);

                            }, 0)
                            .toLocaleString("fr-FR")
                    }

                    FCFA

                </p>

            </div>

        </div>
        <div class="student-search">

            <input
                type="text"
                id="recherchePaiement"
                placeholder="🔎 Rechercher un paiement..."
                onkeyup="rechercherPaiement()"
            >

        </div>
        <!-- ===============================
     SITUATION FINANCIÈRE
================================ -->

<div class="form-container" style="margin-top: 25px;">

    <div class="form-title">

        <h3>💰 Situation financière d'un élève</h3>

        <p>
            Voir les frais prévus, les paiements effectués et le reste à payer
        </p>

    </div>


    <div class="form-group">

        <label>Élève</label>

        <select
            id="eleveSituationPaiement"
            onchange="afficherSituationPaiement()"
        >

            <option value="">
                Sélectionner un élève
            </option>

            ${eleves.map(function(eleve) {

                return `

                    <option value="${eleve.matricule}">

                        ${eleve.nom}
                        ${eleve.prenom}
                        -
                        ${eleve.classe}

                    </option>

                `;

            }).join("")}

        </select>

    </div>


    <div id="resultatSituationPaiement">

        <p style="text-align: center;">
            Sélectionnez un élève pour voir sa situation.
        </p>

    </div>

</div>
<!-- ===============================
     TABLEAU DES IMPAYÉS
================================ -->

<div class="form-container" style="margin-top: 25px;">

    <div class="form-title">

        <h3>🔴 Suivi des impayés</h3>

        <p>
            Voir les élèves ayant encore un montant à payer
        </p>

    </div>

    <div style="
        text-align: center;
        padding: 15px;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
    ">

        💰 Total restant à récupérer :

        <span id="totalImpayes">
            0 FCFA
        </span>

    </div>


    <div class="student-table-container">

        <table>

            <thead>

                <tr>

                    <th>Élève</th>
                    <th>Classe</th>
                    <th>Total prévu</th>
                    <th>Total payé</th>
                    <th>Reste</th>

                </tr>

            </thead>


            <tbody id="listeImpayes"></tbody>

        </table>

    </div>

</div>

        <div class="student-table-container">

            <table>

                <thead>

                    <tr>
                        <th>Référence</th>
                        <th>Élève</th>
                        <th>Classe</th>
                        <th>Type</th>
                        <th>Montant</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody id="listePaiements"></tbody>

            </table>

        </div>
    `;

    afficherListePaiements();
afficherImpayes();
afficherStatistiquesPaiements();
afficherStatistiquesMensuelles();
}


// ===============================
// FORMULAIRE PAIEMENT
// ===============================

function afficherFormulairePaiement() {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Nouveau paiement</h2>

                <p>
                    Enregistrer un paiement scolaire
                </p>

            </div>


            <form id="formPaiement">

                <div class="form-grid">


                    <div class="form-group">

                        <label>Élève</label>

                        <select id="elevePaiement" required>

                            <option value="">
                                Sélectionner un élève
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Type de paiement</label>

                        <select id="typePaiement" required>

                            <option value="">
                                Sélectionner
                            </option>

                            <option value="Inscription">
                                Inscription
                            </option>

                            <option value="Scolarité">
                                Scolarité
                            </option>

                            <option value="Transport">
                                Transport
                            </option>

                            <option value="Cantine">
                                Cantine
                            </option>

                            <option value="Autre">
                                Autre
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Montant (FCFA)</label>

                        <input
                            type="number"
                            id="montantPaiement"
                            placeholder="Ex : 50000"
                            min="1"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Date du paiement</label>

                        <input
                            type="date"
                            id="datePaiement"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Mode de paiement</label>

                        <select id="modePaiement" required>

                            <option value="">
                                Sélectionner
                            </option>

                            <option value="Espèces">
                                Espèces
                            </option>

                            <option value="Mobile Money">
                                Mobile Money
                            </option>

                            <option value="Virement">
                                Virement bancaire
                            </option>

                            <option value="Chèque">
                                Chèque
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Observation</label>

                        <input
                            type="text"
                            id="observationPaiement"
                            placeholder="Observation facultative"
                        >

                    </div>

                </div>


                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherPaiements()"
                    >
                        ❌ Annuler
                    </button>


                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer le paiement
                    </button>

                </div>

            </form>

        </div>
    `;


    // Charger les élèves existants

    const selectEleve =
        document.getElementById(
            "elevePaiement"
        );


    eleves.forEach(function(eleve) {

        const option =
            document.createElement("option");

        option.value =
            eleve.matricule;

        option.textContent =
            eleve.nom + " " +
            eleve.prenom +
            " - " +
            eleve.classe;

        selectEleve.appendChild(option);

    });


    // Date du jour

    document.getElementById(
        "datePaiement"
    ).value =
        new Date().toISOString().split("T")[0];


    document
        .getElementById("formPaiement")
        .addEventListener(
            "submit",
            enregistrerPaiement
        );
}


// ===============================
// ENREGISTRER PAIEMENT
// ===============================

function enregistrerPaiement(event) {

    event.preventDefault();


    const eleveMatricule =
        document.getElementById(
            "elevePaiement"
        ).value;


    const eleve =
        eleves.find(function(e) {

            return e.matricule ===
                eleveMatricule;

        });


    if (!eleve) {

        alert(
            "⚠️ Veuillez sélectionner un élève."
        );

        return;

    }


    const paiement = {

        reference:
            "PAY-" +
            Date.now(),

        eleve:
            eleveMatricule,

        nomEleve:
            eleve.nom +
            " " +
            eleve.prenom,

        classe:
            eleve.classe,

        type:
            document.getElementById(
                "typePaiement"
            ).value,

        montant:
            document.getElementById(
                "montantPaiement"
            ).value,

        date:
            document.getElementById(
                "datePaiement"
            ).value,

        mode:
            document.getElementById(
                "modePaiement"
            ).value,

        observation:
            document.getElementById(
                "observationPaiement"
            ).value

    };


    paiements.push(paiement);


    localStorage.setItem(
        "sbcPaiements",
        JSON.stringify(paiements)
    );


    alert(
        "✅ Paiement enregistré avec succès !"
    );


    afficherPaiements();
}


// ===============================
// AFFICHER LES PAIEMENTS
// ===============================

function afficherListePaiements() {

    const tableau =
        document.getElementById(
            "listePaiements"
        );


    if (!tableau) {
        return;
    }


    if (paiements.length === 0) {

        tableau.innerHTML = `

            <tr>

                <td colspan="7">
                    Aucun paiement enregistré.
                </td>

            </tr>

        `;

        return;

    }


    tableau.innerHTML = "";


    paiements.forEach(
        function(paiement, index) {

            tableau.innerHTML += `

                <tr>

                    <td>
                        ${paiement.reference}
                    </td>

                    <td>
                        ${paiement.nomEleve}
                    </td>

                    <td>
                        ${paiement.classe}
                    </td>

                    <td>
                        ${paiement.type}
                    </td>

                    <td>
                        ${Number(
                            paiement.montant
                        ).toLocaleString("fr-FR")}
                        FCFA
                    </td>

                    <td>
                        ${paiement.date}
                    </td>

                    <td>

                        <button
                            onclick="modifierPaiement(${index})"
                        >
                            ✏️
                        </button>

                        <button
                            onclick="supprimerPaiement(${index})"
                        >
                            🗑️
                        </button>

                    </td>

                </tr>

            `;

        }
    );
}


// ===============================
// SUPPRIMER PAIEMENT
// ===============================

function supprimerPaiement(index) {

    const confirmation =
        confirm(
            "Voulez-vous vraiment supprimer ce paiement ?"
        );


    if (!confirmation) {
        return;
    }


    paiements.splice(index, 1);


    localStorage.setItem(
        "sbcPaiements",
        JSON.stringify(paiements)
    );


    afficherListePaiements();
}


// ===============================
// RECHERCHER PAIEMENT
// ===============================

function rechercherPaiement() {

    const recherche =
        document.getElementById(
            "recherchePaiement"
        ).value.toLowerCase();


    const lignes =
        document.querySelectorAll(
            "#listePaiements tr"
        );


    lignes.forEach(function(ligne) {

        const texte =
            ligne.textContent.toLowerCase();


        if (texte.includes(recherche)) {

            ligne.style.display = "";

        } else {

            ligne.style.display = "none";

        }

    });

}
// ===============================
// MODIFIER UN PAIEMENT
// ===============================

function modifierPaiement(index) {

    const paiement = paiements[index];

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Modifier un paiement</h2>

                <p>
                    Modifier le paiement ${paiement.reference}
                </p>

            </div>

            <form id="formModificationPaiement">

                <div class="form-grid">

                    <div class="form-group">

                        <label>Élève</label>

                        <select id="elevePaiement" required>

                            <option value="">
                                Sélectionner un élève
                            </option>

                        </select>

                    </div>

                    <div class="form-group">

                        <label>Type de paiement</label>

                        <select id="typePaiement" required>

                            <option value="Inscription">
                                Inscription
                            </option>

                            <option value="Scolarité">
                                Scolarité
                            </option>

                            <option value="Transport">
                                Transport
                            </option>

                            <option value="Cantine">
                                Cantine
                            </option>

                            <option value="Autre">
                                Autre
                            </option>

                        </select>

                    </div>

                    <div class="form-group">

                        <label>Montant (FCFA)</label>

                        <input
                            type="number"
                            id="montantPaiement"
                            value="${paiement.montant}"
                            min="1"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label>Date du paiement</label>

                        <input
                            type="date"
                            id="datePaiement"
                            value="${paiement.date}"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label>Mode de paiement</label>

                        <select id="modePaiement" required>

                            <option value="Espèces">
                                Espèces
                            </option>

                            <option value="Mobile Money">
                                Mobile Money
                            </option>

                            <option value="Virement">
                                Virement bancaire
                            </option>

                            <option value="Chèque">
                                Chèque
                            </option>

                        </select>

                    </div>

                    <div class="form-group">

                        <label>Observation</label>

                        <input
                            type="text"
                            id="observationPaiement"
                            value="${paiement.observation || ""}"
                        >

                    </div>

                </div>

                <div class="form-actions">

                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherPaiements()"
                    >
                        ❌ Annuler
                    </button>

                    <button
                        type="submit"
                        class="save-button"
                    >
                        💾 Enregistrer les modifications
                    </button>

                </div>

            </form>

        </div>
    `;


    // Charger les élèves

    const selectEleve =
        document.getElementById(
            "elevePaiement"
        );


    eleves.forEach(function(eleve) {

        const option =
            document.createElement("option");

        option.value =
            eleve.matricule;

        option.textContent =
            eleve.nom +
            " " +
            eleve.prenom +
            " - " +
            eleve.classe;

        selectEleve.appendChild(option);

    });


    // Sélectionner les valeurs actuelles

    selectEleve.value =
        paiement.eleve;

    document.getElementById(
        "typePaiement"
    ).value =
        paiement.type;

    document.getElementById(
        "modePaiement"
    ).value =
        paiement.mode;


    // Enregistrer les modifications

    document
        .getElementById(
            "formModificationPaiement"
        )
        .addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                const matricule =
                    document.getElementById(
                        "elevePaiement"
                    ).value;


                const eleve =
                    eleves.find(
                        function(e) {

                            return e.matricule ===
                                matricule;

                        }
                    );


                if (!eleve) {

                    alert(
                        "⚠️ Veuillez sélectionner un élève."
                    );

                    return;

                }


                paiements[index] = {

                    reference:
                        paiement.reference,

                    eleve:
                        matricule,

                    nomEleve:
                        eleve.nom +
                        " " +
                        eleve.prenom,

                    classe:
                        eleve.classe,

                    type:
                        document.getElementById(
                            "typePaiement"
                        ).value,

                    montant:
                        document.getElementById(
                            "montantPaiement"
                        ).value,

                    date:
                        document.getElementById(
                            "datePaiement"
                        ).value,

                    mode:
                        document.getElementById(
                            "modePaiement"
                        ).value,

                    observation:
                        document.getElementById(
                            "observationPaiement"
                        ).value

                };


                localStorage.setItem(
                    "sbcPaiements",
                    JSON.stringify(paiements)
                );


                alert(
                    "✅ Paiement modifié avec succès !"
                );


                afficherPaiements();

            }
        );

}
// ===============================
// SBC SCHOOL - GESTION DES REÇUS
// ===============================

function afficherRecus() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>
                <h2>Gestion des reçus</h2>
                <p>Consulter et imprimer les reçus de paiement</p>
            </div>

        </div>

        <div class="student-search">

            <input
                type="text"
                id="rechercheRecu"
                placeholder="🔎 Rechercher un reçu..."
                onkeyup="rechercherRecu()"
            >

        </div>

        <div class="student-table-container">

            <table>

                <thead>

                    <tr>
                        <th>Numéro</th>
                        <th>Élève</th>
                        <th>Classe</th>
                        <th>Motif</th>
                        <th>Montant</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody id="listeRecus"></tbody>

            </table>

        </div>
    `;

    afficherListeRecus();
}


// ===============================
// AFFICHER LES REÇUS
// ===============================

function afficherListeRecus() {

    const tableau =
        document.getElementById("listeRecus");

    if (!tableau) {
        return;
    }

    if (paiements.length === 0) {

        tableau.innerHTML = `

            <tr>

                <td colspan="7">
                    Aucun reçu disponible.
                </td>

            </tr>

        `;

        return;
    }

    tableau.innerHTML = "";

    paiements.forEach(function(paiement) {

        tableau.innerHTML += `

            <tr>

                <td>
                    ${paiement.reference}
                </td>

                <td>
                    ${paiement.nomEleve}
                </td>

                <td>
                    ${paiement.classe}
                </td>

                <td>
                    ${paiement.type}
                </td>

                <td>
                    ${Number(
                        paiement.montant
                    ).toLocaleString("fr-FR")}
                    FCFA
                </td>

                <td>
                    ${paiement.date}
                </td>

                <td>

                    <button
                        onclick="imprimerRecu('${paiement.reference}')"
                    >
                        🖨️ Imprimer
                    </button>

                </td>

            </tr>

        `;

    });
}


// ===============================
// RECHERCHE
// ===============================

function rechercherRecu() {

    const recherche =
        document.getElementById(
            "rechercheRecu"
        ).value.toLowerCase();

    const lignes =
        document.querySelectorAll(
            "#listeRecus tr"
        );

    lignes.forEach(function(ligne) {

        const texte =
            ligne.textContent.toLowerCase();

        if (texte.includes(recherche)) {

            ligne.style.display = "";

        } else {

            ligne.style.display = "none";

        }

    });
}


// ===============================
// IMPRIMER UN REÇU
// ===============================

function imprimerRecu(reference) {

    const paiement =
        paiements.find(function(p) {

            return p.reference === reference;

        });


    if (!paiement) {

        alert("⚠️ Reçu introuvable.");

        return;

    }


    const etablissement =
        JSON.parse(
            localStorage.getItem(
                "sbcEtablissement"
            )
        ) || {};


    const fenetre =
        window.open(
            "",
            "_blank",
            "width=500,height=700"
        );


    fenetre.document.write(`

<!DOCTYPE html>

<html lang="fr">

<head>

<meta charset="UTF-8">

<title>
Reçu ${paiement.reference}
</title>


<style>

* {
    box-sizing: border-box;
}


@page {

    size: 105mm 148mm;

    margin: 0;

}


body {

    margin: 0;

    padding: 0;

    background: white;

    font-family: Arial, sans-serif;

    font-size: 10px;

}


.recu {

    width: 105mm;

    min-height: 148mm;

    padding: 7mm;

    margin: 0 auto;

    border: 1.5px solid #0f3d91;

}


.entete {

    text-align: center;

    border-bottom:
        1px solid #0f3d91;

    padding-bottom: 5px;

    margin-bottom: 7px;

}


.logo {

    width: 35px;

    height: 35px;

    object-fit: contain;

    margin-bottom: 3px;

}


.entete h1 {

    margin: 0;

    font-size: 17px;

    color: #0f3d91;

}


.entete p {

    margin: 2px 0;

    font-size: 8px;

}


.titre {

    text-align: center;

    font-size: 13px;

    font-weight: bold;

    margin: 7px 0;

    color: #0f3d91;

}


.numero {

    text-align: right;

    font-weight: bold;

    font-size: 9px;

    margin-bottom: 6px;

}


.ligne {

    display: flex;

    justify-content: space-between;

    gap: 5px;

    padding: 5px 0;

    border-bottom: 1px solid #ddd;

}


.ligne strong {

    white-space: nowrap;

}


.ligne span {

    text-align: right;

}


.montant {

    text-align: center;

    font-size: 14px;

    font-weight: bold;

    margin: 9px 0;

    padding: 7px;

    border: 1.5px solid #0f3d91;

}


.observation {

    margin-top: 7px;

    font-size: 9px;

}


.signature {

    display: flex;

    justify-content: space-between;

    gap: 10px;

    margin-top: 18px;

}


.signature div {

    width: 50%;

    text-align: center;

    border-top: 1px solid #333;

    padding-top: 5px;

    font-size: 8px;

}


.impression {

    text-align: center;

    margin-top: 12px;

}


.impression button {

    padding: 7px 15px;

    background: #0f3d91;

    color: white;

    border: none;

    border-radius: 4px;

    cursor: pointer;

}


@media print {

    .impression {

        display: none;

    }

}

</style>

</head>


<body>


<div class="recu">


    <div class="entete">

        ${
            etablissement.logo
                ? `
                    <img
                        src="${etablissement.logo}"
                        class="logo"
                    >
                  `
                : ""
        }


        <h1>

            ${
                etablissement.nom ||
                "Nom de l'établissement"
            }

        </h1>


        ${
            etablissement.adresse
                ? `
                    <p>
                        📍 ${etablissement.adresse}
                    </p>
                  `
                : ""
        }


        ${
            etablissement.telephone
                ? `
                    <p>
                        📞 ${etablissement.telephone}
                    </p>
                  `
                : ""
        }


        ${
            etablissement.email
                ? `
                    <p>
                        ✉️ ${etablissement.email}
                    </p>
                  `
                : ""
        }

    </div>


    <div class="titre">

        REÇU DE PAIEMENT

    </div>


    <div class="numero">

        N° ${paiement.reference}

    </div>


    <div class="ligne">

        <strong>Élève :</strong>

        <span>
            ${paiement.nomEleve}
        </span>

    </div>


    <div class="ligne">

        <strong>Classe :</strong>

        <span>
            ${paiement.classe}
        </span>

    </div>


    <div class="ligne">

        <strong>Motif :</strong>

        <span>
            ${paiement.type}
        </span>

    </div>


    <div class="ligne">

        <strong>Date :</strong>

        <span>
            ${paiement.date}
        </span>

    </div>


    <div class="ligne">

        <strong>Paiement :</strong>

        <span>
            ${paiement.mode}
        </span>

    </div>


    <div class="montant">

        ${Number(
            paiement.montant
        ).toLocaleString("fr-FR")}

        FCFA

    </div>


    <div class="observation">

        <strong>Observation :</strong>

        ${paiement.observation || "Aucune"}

    </div>


    <div class="signature">

        <div>

            Responsable

        </div>


        <div>

            Parent

        </div>

    </div>


    <div class="impression">

        <button
            onclick="window.print()"
        >

            🖨️ Imprimer

        </button>

    </div>


</div>


</body>

</html>

    `);


    fenetre.document.close();

}
// ===============================
// SBC SCHOOL - TABLEAU DE BORD
// ===============================

function afficherTableauDeBord() {

    const totalEleves = eleves.length;

    const totalEnseignants = enseignants.length;

    const totalClasses = classes.length;

    const totalMatieres = matieres.length;


    // ===============================
    // TOTAL DES PAIEMENTS
    // ===============================

    const totalPaiements = paiements.reduce(
        function(total, paiement) {

            return total +
                Number(paiement.montant || 0);

        },
        0
    );


    const nombrePaiements =
        paiements.length;


    // ===============================
    // TOTAL DES IMPAYÉS
    // ===============================

    let totalImpayes = 0;


    eleves.forEach(function(eleve) {

        const totalPrevu =

            Number(eleve.fraisInscription || 0) +

            Number(eleve.fraisScolarite || 0) +

            Number(eleve.fraisTransport || 0) +

            Number(eleve.fraisCantine || 0) +

            Number(eleve.autresFrais || 0);


        const totalPaye =

            paiements
                .filter(function(paiement) {

                    return paiement.eleve ===
                        eleve.matricule;

                })
                .reduce(function(total, paiement) {

                    return total +
                        Number(
                            paiement.montant || 0
                        );

                }, 0);


        const reste =
            Math.max(
                totalPrevu - totalPaye,
                0
            );


        totalImpayes += reste;

    });


    // ===============================
    // ENCAISSEMENT DU MOIS
    // ===============================

    const maintenant =
        new Date();

    const anneeActuelle =
        maintenant.getFullYear();

    const moisActuel =
        String(
            maintenant.getMonth() + 1
        ).padStart(2, "0");


    const totalMois =

        paiements
            .filter(function(paiement) {

                if (!paiement.date) {
                    return false;
                }


                return paiement.date.substring(0, 4) ===
                    String(anneeActuelle)

                    &&

                    paiement.date.substring(5, 7) ===
                    moisActuel;

            })
            .reduce(function(total, paiement) {

                return total +
                    Number(
                        paiement.montant || 0
                    );

            }, 0);


    // ===============================
    // AFFICHER LES VALEURS
    // ===============================

    document.getElementById(
        "totalEleves"
    ).textContent =
        totalEleves;


    document.getElementById(
        "totalEnseignants"
    ).textContent =
        totalEnseignants;


    document.getElementById(
        "totalClasses"
    ).textContent =
        totalClasses;


    document.getElementById(
        "totalMatieres"
    ).textContent =
        totalMatieres;


    document.getElementById(
        "totalPaiements"
    ).textContent =
        totalPaiements.toLocaleString(
            "fr-FR"
        ) + " FCFA";


    document.getElementById(
        "nombrePaiements"
    ).textContent =
        nombrePaiements;


    // ===============================
    // NOUVEAUX INDICATEURS
    // ===============================

    const elementImpayes =
        document.getElementById(
            "totalImpayesDashboard"
        );


    if (elementImpayes) {

        elementImpayes.textContent =
            totalImpayes.toLocaleString(
                "fr-FR"
            ) + " FCFA";

    }


    const elementMois =
        document.getElementById(
            "totalMoisDashboard"
        );


    if (elementMois) {

        elementMois.textContent =
            totalMois.toLocaleString(
                "fr-FR"
            ) + " FCFA";

    }

}
// ===============================
// PAGE DES NOTES
// ===============================

function afficherNotes() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>

                <h2>Gestion des notes</h2>

                <p>
                    Gérer les notes des élèves
                </p>

            </div>

            <button
                class="add-button"
                onclick="afficherFormulaireNote()"
            >
                ➕ Nouvelle note
            </button>

        </div>


        <div class="student-search">

            <input
                type="text"
                id="rechercheNote"
                placeholder="🔎 Rechercher une note..."
                onkeyup="rechercherNote()"
            >

        </div>


        <div class="student-table-container">

            <table>

                <thead>

                    <tr>

                        <th>Élève</th>
                        <th>Matière</th>
                        <th>Note</th>
                        <th>Coefficient</th>
                        <th>Type</th>
                        <th>Trimestre</th>
                        <th>Note pondérée</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody id="listeNotes"></tbody>

            </table>

        </div>

    `;

    afficherListeNotes();

}
// ===============================
// FORMULAIRE NOTE
// ===============================

function afficherFormulaireNote() {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>Nouvelle note</h2>

                <p>
                    Enregistrer une note
                </p>

            </div>


            <form id="formNote">


                <div class="form-grid">


                    <div class="form-group">

                        <label>Élève</label>

                        <select
                            id="eleveNote"
                            required
                        >

                            <option value="">
                                Sélectionner un élève
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Matière</label>

                        <select
                            id="matiereNote"
                            required
                        >

                            <option value="">
                                Sélectionner une matière
                            </option>

                        </select>

                    </div>


                    <div class="form-group">

                        <label>Note /20</label>

                        <input
                            type="number"
                            id="valeurNote"
                            min="0"
                            max="20"
                            step="0.01"
                            placeholder="Ex : 15"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>Coefficient</label>

                        <input
                            type="number"
                            id="coefficientNote"
                            min="1"
                            step="1"
                            value="1"
                            required
                        >

                    </div>

                </div>
                <div class="form-group">

    <label>Type d'évaluation</label>

    <select id="typeEvaluation" required>
    
        <option value="">
            Sélectionner le type
        </option>

        <option value="Interrogation">
            Interrogation
        </option>

        <option value="Devoir">
            Devoir
        </option>

        <option value="Composition">
            Composition
        </option>

        <option value="Examen">
            Examen
        </option>

    </select>

</div>
<div class="form-group">

    <label>Trimestre</label>

    <select id="trimestreNote" required>

        <option value="">
            Sélectionner le trimestre
        </option>

        <option value="1er trimestre">
            1er trimestre
        </option>

        <option value="2e trimestre">
            2e trimestre
        </option>

        <option value="3e trimestre">
            3e trimestre
        </option>

    </select>

</div>


                <div class="form-actions">


                    <button
                        type="button"
                        class="cancel-button"
                        onclick="afficherNotes()"
                    >

                        ❌ Annuler

                    </button>


                    <button
                        type="submit"
                        class="save-button"
                    >

                        💾 Enregistrer la note

                    </button>


                </div>

            </form>

        </div>

    `;


    // Charger les élèves

    const selectEleve =
        document.getElementById(
            "eleveNote"
        );


    eleves.forEach(function(eleve) {

        const option =
            document.createElement("option");

        option.value =
            eleve.matricule;

        option.textContent =
            eleve.nom +
            " " +
            eleve.prenom +
            " - " +
            eleve.classe;

        selectEleve.appendChild(option);

    });


    // Charger les matières

    const selectMatiere =
        document.getElementById(
            "matiereNote"
        );


    matieres.forEach(function(matiere) {

        const option =
            document.createElement("option");

        option.value =
            matiere.nom;

        option.textContent =
            matiere.nom;

        selectMatiere.appendChild(option);

    });


    // Enregistrer

    document
        .getElementById("formNote")
        .addEventListener(
            "submit",
            enregistrerNote
        );

}


// ===============================
// ENREGISTRER UNE NOTE
// ===============================

function enregistrerNote(event) {

    event.preventDefault();


    const matricule =
        document.getElementById(
            "eleveNote"
        ).value;


    const eleve =
        eleves.find(function(e) {

            return e.matricule ===
                matricule;

        });


    if (!eleve) {

        alert(
            "⚠️ Veuillez sélectionner un élève."
        );

        return;

    }


    const valeur =
        Number(
            document.getElementById(
                "valeurNote"
            ).value
        );


    const coefficient =
        Number(
            document.getElementById(
                "coefficientNote"
            ).value
        );


    if (
        valeur < 0 ||
        valeur > 20
    ) {

        alert(
            "⚠️ La note doit être comprise entre 0 et 20."
        );

        return;

    }


    const note = {

    id:
        Date.now(),

    eleve:
        matricule,

    nomEleve:
        eleve.nom +
        " " +
        eleve.prenom,

    classe:
        eleve.classe,

    matiere:
        document.getElementById(
            "matiereNote"
        ).value,

    valeur:
        valeur,

    coefficient:
        coefficient,

    typeEvaluation:
        document.getElementById(
            "typeEvaluation"
        ).value,
        trimestre:
    document.getElementById(
        "trimestreNote"
    ).value,

    moyennePonderee:
        valeur * coefficient

};

    notes.push(note);


    localStorage.setItem(
        "sbcNotes",
        JSON.stringify(notes)
    );


    alert(
        "✅ Note enregistrée avec succès !"
    );


    afficherNotes();

}


// ===============================
// AFFICHER LES NOTES
// ===============================

function afficherListeNotes() {

    const tableau =
        document.getElementById(
            "listeNotes"
        );


    if (!tableau) {

        return;

    }


    if (notes.length === 0) {

        tableau.innerHTML = `

            <tr>

                <td colspan="8">

                    Aucune note enregistrée.

                </td>

            </tr>

        `;

        return;

    }


    tableau.innerHTML = "";


    notes.forEach(function(note, index) {

        tableau.innerHTML += `

            <tr>

                <td>
                    ${note.nomEleve}
                </td>

                <td>
                    ${note.matiere}
                </td>

                <td>
                    ${note.valeur}/20
                </td>

                <td>
    ${note.coefficient}
</td>

<td>
    ${note.typeEvaluation || "Non défini"}
</td>

<td>
    ${note.trimestre || "Non défini"}
</td>

<td>
    ${note.moyennePonderee}
</td>

                <td>

                    <button
                        onclick="modifierNote(${index})"
                    >
                        ✏️
                    </button>

                    <button
                        onclick="supprimerNote(${index})"
                    >
                        🗑️
                    </button>

                </td>

            </tr>

        `;

    });

}


// ===============================
// SUPPRIMER UNE NOTE
// ===============================

function supprimerNote(index) {

    if (
        !confirm(
            "Voulez-vous vraiment supprimer cette note ?"
        )
    ) {

        return;

    }


    notes.splice(index, 1);


    localStorage.setItem(
        "sbcNotes",
        JSON.stringify(notes)
    );


    afficherListeNotes();

}


// ===============================
// RECHERCHER UNE NOTE
// ===============================

function rechercherNote() {

    const recherche =
        document.getElementById(
            "rechercheNote"
        ).value.toLowerCase();


    const lignes =
        document.querySelectorAll(
            "#listeNotes tr"
        );


    lignes.forEach(function(ligne) {

        const texte =
            ligne.textContent.toLowerCase();


        ligne.style.display =
            texte.includes(recherche)
                ? ""
                : "none";

    });

}


// ===============================
// MODIFIER UNE NOTE
// ===============================

function modifierNote(index) {

    const note =
        notes[index];


    afficherFormulaireNote();


    setTimeout(function() {

        document.getElementById(
            "eleveNote"
        ).value =
            note.eleve;


        document.getElementById(
            "matiereNote"
        ).value =
            note.matiere;


        document.getElementById(
            "valeurNote"
        ).value =
            note.valeur;


        document.getElementById(
            "coefficientNote"
        ).value =
            note.coefficient;
            document.getElementById(
    "typeEvaluation"
).value =
    note.typeEvaluation || "";


        const formulaire =
            document.getElementById(
                "formNote"
            );


        formulaire.onsubmit =
            function(event) {

                event.preventDefault();


                const nouvelleValeur =
                    Number(
                        document.getElementById(
                            "valeurNote"
                        ).value
                    );


                const nouveauCoefficient =
                    Number(
                        document.getElementById(
                            "coefficientNote"
                        ).value
                    );


                if (
                    nouvelleValeur < 0 ||
                    nouvelleValeur > 20
                ) {

                    alert(
                        "⚠️ La note doit être comprise entre 0 et 20."
                    );

                    return;

                }


                note.valeur =
                    nouvelleValeur;

                note.coefficient =
                    nouveauCoefficient;
                    note.typeEvaluation =
    document.getElementById(
        "typeEvaluation"
    ).value;

                note.moyennePonderee =
                    nouvelleValeur *
                    nouveauCoefficient;


                localStorage.setItem(
                    "sbcNotes",
                    JSON.stringify(notes)
                );


                alert(
                    "✅ Note modifiée avec succès !"
                );


                afficherNotes();

            };

    }, 100);

}
// ===============================
// SBC SCHOOL - BULLETINS
// ===============================

function afficherBulletins() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>

                <h2>📊 Bulletins scolaires</h2>

                <p>
                    Consulter les résultats des élèves
                </p>

            </div>

        </div>

        <div class="form-container">

            <div class="form-group">

                <label>
                    Sélectionner un élève
                </label>

                <select
                    id="eleveBulletin"
                    onchange="genererBulletin()"
                >

                    <option value="">
                        Sélectionner un élève
                    </option>

                </select>

            </div>

        </div>

        <div id="contenuBulletin"></div>

    `;


    const select =
        document.getElementById(
            "eleveBulletin"
        );


    eleves.forEach(function(eleve) {

        const option =
            document.createElement("option");

        option.value =
            eleve.matricule;

        option.textContent =
            eleve.nom +
            " " +
            eleve.prenom +
            " - " +
            eleve.classe;

        select.appendChild(option);

    });

}


// ===============================
// GENERER BULLETIN
// ===============================

function genererBulletin() {

    const matricule =
        document.getElementById(
            "eleveBulletin"
        ).value;
window.trimestreBulletin =
    window.trimestreBulletin ||
    "1er trimestre";        


    const zone =
        document.getElementById(
            "contenuBulletin"
        );


    if (!matricule) {

        zone.innerHTML = "";

        return;

    }


    const eleve =
        eleves.find(function(e) {

            return e.matricule ===
                matricule;

        });
        console.log("Élève sélectionné :", eleve);
console.log("Matricule :", matricule);
console.log("Toutes les notes :", notes);
console.log("Trimestre bulletin :", window.trimestreBulletin);


    const notesEleve =
    notes.filter(function(note) {

        console.log(
            "Note vérifiée :",
            note,
            "Matricule note :",
            note.eleve,
            "Matricule recherché :",
            matricule,
            "Trimestre note :",
            note.trimestre,
            "Trimestre recherché :",
            window.trimestreBulletin
        );

        return String(note.eleve) === String(matricule)
            && String(note.trimestre).trim() ===
               String(window.trimestreBulletin).trim();

    });

   
            // ===============================
    // MOYENNE DE CLASSE
    // ===============================

    const elevesClasse =
        eleves.filter(function(e) {

            return e.classe ===
                eleve.classe;

        });


    let totalMoyennesClasse = 0;

    let nombreElevesAvecNotes = 0;


    elevesClasse.forEach(function(e) {

      const notesDeLEleve =
    notes.filter(function(note) {

        const matriculeNote =
    note.eleve ||
    note.matricule ||
    note.eleveMatricule;

return String(matriculeNote) === String(e.matricule)
            && note.trimestre === window.trimestreBulletin
            && note.typeEvaluation !== "Composition"
            && note.typeEvaluation !== "Examen";

    });


        if (notesDeLEleve.length > 0) {

            let points = 0;

            let coefficients = 0;


            notesDeLEleve.forEach(function(note) {

                points +=
                    Number(note.valeur) *
                    Number(note.coefficient);

                coefficients +=
                    Number(note.coefficient);

            });


            if (coefficients > 0) {

                const moyenneEleve =
                    points / coefficients;

                totalMoyennesClasse +=
                    moyenneEleve;

                nombreElevesAvecNotes++;

            }

        }

    });


    const moyenneClasse =
        nombreElevesAvecNotes > 0
            ? totalMoyennesClasse /
              nombreElevesAvecNotes
            : 0;


     if (!eleve) {
    zone.innerHTML = `
        <p style="text-align:center;">
            ⚠️ Élève introuvable.
        </p>
    `;
    return;
}

    if (notesEleve.length === 0) {

        zone.innerHTML = `

            <div class="dashboard-welcome">

                <h3>
                    Aucune note
                </h3>

                <p>
                    Cet élève n'a encore aucune note enregistrée.
                </p>

            </div>

        `;

        return;

    }


    let totalPoints = 0;

    let totalCoefficients = 0;

    let lignes = "";


    notesEleve.forEach(function(note) {

        const points =
            Number(note.valeur) *
            Number(note.coefficient);


        totalPoints += points;

        totalCoefficients +=
            Number(note.coefficient);


        lignes += `

            <tr>

                <td>
                    ${note.matiere}
                </td>

                <td>
                    ${note.valeur}/20
                </td>

                <td>
                    ${note.coefficient}
                </td>
               <td>
    ${note.typeEvaluation}
</td>
                <td>
                    ${points}
                </td>

            </tr>

        `;

    });

    // Calcul de la moyenne des compositions

    const notesComposition =
        notesEleve.filter(function(note) {

            return note.typeEvaluation ===
                "Composition";

        });


    let totalComposition = 0;

    let coefficientComposition = 0;


    notesComposition.forEach(function(note) {

        totalComposition +=
            Number(note.valeur) *
            Number(note.coefficient);

        coefficientComposition +=
            Number(note.coefficient);

    });


    const moyenneComposition =
        coefficientComposition > 0
            ? totalComposition / coefficientComposition
            : 0;
    const moyenneGenerale =
    (moyenneClasse + moyenneComposition) / 2;
   // ===============================
// MOYENNE ANNUELLE
// ===============================

let moyenneAnnuelle = 0;

let rangAnnuel = "-";

let totalClasseAnnuel = 0;


function calculerMoyenneTrimestre(
    matriculeEleve,
    trimestre
) {

    const notesTrimestre =
        notes.filter(function(note) {

            return note.eleve === matriculeEleve
                && note.trimestre === trimestre;

        });


    const notesDevoirs =
        notesTrimestre.filter(function(note) {

            return note.typeEvaluation !== "Composition"
                && note.typeEvaluation !== "Examen";

        });


    let totalDevoirs = 0;

    notesDevoirs.forEach(function(note) {

        totalDevoirs +=
            Number(note.valeur);

    });


    const moyenneDevoirs =
        notesDevoirs.length > 0
            ? totalDevoirs / notesDevoirs.length
            : 0;


    const composition =
        notesTrimestre.find(function(note) {

            return note.typeEvaluation === "Composition";

        });


    const noteComposition =
        composition
            ? Number(composition.valeur)
            : 0;


    return (
        moyenneDevoirs +
        noteComposition
    ) / 2;

}


if (window.trimestreBulletin === "3e trimestre") {

    const moyenneT1 =
        calculerMoyenneTrimestre(
            matricule,
            "1er trimestre"
        );


    const moyenneT2 =
        calculerMoyenneTrimestre(
            matricule,
            "2e trimestre"
        );


    const moyenneT3 =
        calculerMoyenneTrimestre(
            matricule,
            "3e trimestre"
        );


    moyenneAnnuelle =
        (
            moyenneT1 +
            moyenneT2 +
            moyenneT3
        ) / 3;


    // ===============================
    // RANG ANNUEL
    // ===============================

    const resultatsAnnuels = [];


    elevesClasse.forEach(function(e) {

        const moyenneAnnuelleEleve =
            (
                calculerMoyenneTrimestre(
                    e.matricule,
                    "1er trimestre"
                ) +

                calculerMoyenneTrimestre(
                    e.matricule,
                    "2e trimestre"
                ) +

                calculerMoyenneTrimestre(
                    e.matricule,
                    "3e trimestre"
                )
            ) / 3;


        resultatsAnnuels.push({

            matricule:
                e.matricule,

            moyenne:
                moyenneAnnuelleEleve

        });

    });


    resultatsAnnuels.sort(function(a, b) {

        return b.moyenne - a.moyenne;

    });


    const rangAnnuelIndex =
        resultatsAnnuels.findIndex(function(resultat) {

            return resultat.matricule === matricule;

        });


    rangAnnuel =
        rangAnnuelIndex >= 0
            ? rangAnnuelIndex + 1
            : "-";


    totalClasseAnnuel =
        resultatsAnnuels.length;

}
       // ===============================
    // MENTION
    // ===============================

    let mention = "";

    if (moyenneGenerale <= 5) {

        mention = "Nul";

    } else if (moyenneGenerale <= 9) {

        mention = "Faible";

    } else if (moyenneGenerale <= 11) {

        mention = "Passable";

    } else if (moyenneGenerale <= 14) {

        mention = "Bien";

    } else if (moyenneGenerale <= 18) {

        mention = "Très bien";

    } else {

        mention = "Excellent";

    }
       // ===============================
// CALCUL DU RANG
// ===============================

const resultatsClasse = [];

elevesClasse.forEach(function(e) {

    const notesEleveClasse =
        notes.filter(function(note) {

            return note.eleve === e.matricule
                && note.trimestre === window.trimestreBulletin;

        });


    const notesClasse =
        notesEleveClasse.filter(function(note) {

            return note.typeEvaluation !== "Composition"
                && note.typeEvaluation !== "Examen";

        });


    // Moyenne des devoirs de classe

    let totalDevoirs = 0;

    notesClasse.forEach(function(note) {

        totalDevoirs +=
            Number(note.valeur);

    });


    const moyenneClasseEleve =
        notesClasse.length > 0
            ? totalDevoirs / notesClasse.length
            : 0;


    // Composition du trimestre

    const composition =
        notesEleveClasse.find(function(note) {

            return note.typeEvaluation === "Composition";

        });


    const moyenneCompositionEleve =
        composition
            ? Number(composition.valeur)
            : 0;


    // Moyenne générale du trimestre

    const moyenneGeneraleEleve =
        (moyenneClasseEleve +
         moyenneCompositionEleve) / 2;


    resultatsClasse.push({

        matricule: e.matricule,

        moyenne: moyenneGeneraleEleve

    });

});


resultatsClasse.sort(function(a, b) {

    return b.moyenne - a.moyenne;

});


const rangIndex =
    resultatsClasse.findIndex(function(resultat) {

        return resultat.matricule === matricule;

    });


const rang =
    rangIndex >= 0
        ? rangIndex + 1
        : "-";


const totalClasse =
    resultatsClasse.length;


    zone.innerHTML = `

        <div class="student-table-container">

            <div style="
                padding: 25px;
                text-align: center;
            ">

             ${
    (() => {

        const etablissement =
            JSON.parse(
                localStorage.getItem(
                    "sbcEtablissement"
                )
            ) || {};

        return `

            ${
                etablissement.logo
                    ? `
                        <img
                            src="${etablissement.logo}"
                            style="
                                width: 90px;
                                height: 90px;
                                object-fit: contain;
                                margin-bottom: 10px;
                            "
                        >
                    `
                    : ""
            }


           ${
    (() => {

        const etablissement =
            JSON.parse(
                localStorage.getItem(
                    "sbcEtablissement"
                )
            ) || {};

        return `

            ${
                etablissement.logo
                    ? `
                        <img
                            src="${etablissement.logo}"
                            style="
                                width: 90px;
                                height: 90px;
                                object-fit: contain;
                                margin-bottom: 10px;
                            "
                        >
                    `
                    : ""
            }

            <h2>
                ${
                    etablissement.nom ||
                    "Nom de l'établissement"
                }
            </h2>

            ${
                etablissement.adresse
                    ? `
                        <p>
                            📍 ${etablissement.adresse}
                        </p>
                    `
                    : ""
            }

            ${
                etablissement.telephone
                    ? `
                        <p>
                            📞 ${etablissement.telephone}
                        </p>
                    `
                    : ""
            }

            ${
                etablissement.email
                    ? `
                        <p>
                            ✉️ ${etablissement.email}
                        </p>
                    `
                    : ""
            }

        `;

    })()
}

        `;

    })()
}

                <h3>
                    BULLETIN SCOLAIRE
                </h3>

                <p>
                    <strong>Élève :</strong>
                    ${eleve.nom}
                    ${eleve.prenom}
                </p>

                <p>
                    <strong>Classe :</strong>
                    ${eleve.classe}
                </p>
                <p>
    <strong>Année scolaire :</strong>
    2025 - 2026
</p>
<div style="
    margin: 15px 0;
    text-align: center;
">

    <label>
        <strong>Trimestre :</strong>
    </label>

    <select id="trimestreBulletin" onchange="changerTrimestreBulletin()">

    <option value="1er trimestre"
        ${window.trimestreBulletin === "1er trimestre" ? "selected" : ""}>
        1er trimestre
    </option>

    <option value="2e trimestre"
        ${window.trimestreBulletin === "2e trimestre" ? "selected" : ""}>
        2e trimestre
    </option>

    <option value="3e trimestre"
        ${window.trimestreBulletin === "3e trimestre" ? "selected" : ""}>
        3e trimestre
    </option>

</select>

</div>

            </div>


            <table>

                <thead>

                    <tr>

                        <th>Matière</th>

                        <th>Note /20</th>

                        <th>Coefficient</th>
                        <th>Type</th>

                        <th>Points</th>

                    </tr>

                </thead>


                <tbody>

                    ${lignes}

                </tbody>


                <tfoot>

                    <tr>
<tr>

    <th colspan="3">
        MOYENNE DE COMPOSITION
    </th>

    <th>
        ${moyenneComposition.toFixed(2)}/20
    </th>

</tr>
<tr>

    <th colspan="3">
        MOYENNE DE CLASSE
    </th>

    <th>
        ${moyenneClasse.toFixed(2)}/20
    </th>

</tr>
                        <th colspan="3">
                            MOYENNE GÉNÉRALE
                        </th>

                        <th>
                           ${moyenneGenerale.toFixed(2)}/20
                        </th>

                    </tr>
                    ${window.trimestreBulletin === "3e trimestre" ? `

<tr>

    <th colspan="3">
        MOYENNE ANNUELLE
    </th>

    <th>
        ${moyenneAnnuelle.toFixed(2)}/20
    </th>

</tr>

` : ""}
                    <tr>

    <th colspan="3">
        RANG
    </th>

    <th>
        ${rang}<sup>e</sup> / ${totalClasse}
    </th>

</tr>
${window.trimestreBulletin === "3e trimestre" ? `

<tr>

    <th colspan="3">
        RANG ANNUEL
    </th>

    <th>
        ${rangAnnuel}<sup>e</sup> / ${totalClasseAnnuel}
    </th>

</tr>

` : ""}
<tr>

    <th colspan="3">
        MENTION
    </th>

    <th>
        ${mention}
    </th>

</tr>

                </tfoot>

            </table>


            <div style="
                text-align: center;
                padding: 25px;
            ">

                <button
                    class="save-button"
                    onclick="window.print()"
                >

                    🖨️ Imprimer le bulletin

                </button>
                <div style="
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    padding: 20px;
">

    <div style="text-align: center; width: 45%;">

        <strong>Signature du professeur</strong>

        <br><br><br>

        ______________________

    </div>


    <div style="text-align: center; width: 45%;">

        <strong>Signature de la Direction</strong>

        <br><br><br>

        ______________________

    </div>

</div>

            </div>

        </div>

    `;

}

function changerTrimestreBulletin() {

    const select =
        document.getElementById(
            "trimestreBulletin"
        );

    if (select) {

        window.trimestreBulletin =
            select.value;

    }

    genererBulletin();

}
function afficherParametres() {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>⚙️ Paramètres</h2>

                <p>
                    Informations de l'établissement
                </p>

            </div>


            <form id="formEtablissement">

                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            Nom de l'établissement
                        </label>

                        <input
                            type="text"
                            id="nomEtablissement"
                            placeholder="Ex : Complexe Scolaire La Réussite"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            Adresse
                        </label>

                        <input
                            type="text"
                            id="adresseEtablissement"
                            placeholder="Adresse de l'établissement"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            Téléphone
                        </label>

                        <input
                            type="text"
                            id="telephoneEtablissement"
                            placeholder="Ex : 06 000 00 00"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="emailEtablissement"
                            placeholder="E-mail de l'établissement"
                        >

                    </div>
                    <div class="form-group">

    <label>
        Logo de l'établissement
    </label>

    <input
        type="file"
        id="logoEtablissement"
        accept="image/*"
    >

</div>

                </div>


                <div class="form-actions">

                    <button
                        type="submit"
                        class="save-button"
                    >

                        💾 Enregistrer

                    </button>

                </div>

            </form>

        </div>

    `;


    // Charger les informations déjà enregistrées

    const etablissement =
        JSON.parse(
            localStorage.getItem(
                "sbcEtablissement"
            )
        ) || {};


    document.getElementById(
        "nomEtablissement"
    ).value =
        etablissement.nom || "";


    document.getElementById(
        "adresseEtablissement"
    ).value =
        etablissement.adresse || "";


    document.getElementById(
        "telephoneEtablissement"
    ).value =
        etablissement.telephone || "";


    document.getElementById(
        "emailEtablissement"
    ).value =
        etablissement.email || "";


    // Enregistrer

    document
        .getElementById("formEtablissement")
        .addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                const fichierLogo =
    document.getElementById(
        "logoEtablissement"
    ).files[0];


const anciennesInformations =
    JSON.parse(
        localStorage.getItem(
            "sbcEtablissement"
        )
    ) || {};


function enregistrerInformations(
    logoBase64
) {

    const nouvellesInformations = {

        nom:
            document.getElementById(
                "nomEtablissement"
            ).value,

        adresse:
            document.getElementById(
                "adresseEtablissement"
            ).value,

        telephone:
            document.getElementById(
                "telephoneEtablissement"
            ).value,

        email:
            document.getElementById(
                "emailEtablissement"
            ).value,

        logo:
            logoBase64 ||
            anciennesInformations.logo ||
            ""

    };


    localStorage.setItem(
        "sbcEtablissement",
        JSON.stringify(
            nouvellesInformations
        )
    );


    alert(
        "✅ Informations de l'établissement enregistrées !"
    );

}


if (fichierLogo) {

    const lecteur =
        new FileReader();


    lecteur.onload =
        function() {

            enregistrerInformations(
                lecteur.result
            );

        };


    lecteur.readAsDataURL(
        fichierLogo
    );

} else {

    enregistrerInformations(
        anciennesInformations.logo
    );

}


                localStorage.setItem(
                    "sbcEtablissement",
                    JSON.stringify(
                        nouvellesInformations
                    )
                );


                alert(
                    "✅ Informations de l'établissement enregistrées !"
                );

            }
        );

}
// ===============================
// GESTION DES PARENTS
// ===============================

let parents =
    JSON.parse(
        localStorage.getItem("sbcParents")
    ) || [];


// ===============================
// AFFICHER LES PARENTS
// ===============================

function afficherParents() {

    dashboardContent.innerHTML = `

        <div class="section-header">

            <div>

                <h2>👪 Gestion des parents</h2>

                <p>
                    Enregistrer et gérer les parents ou tuteurs
                </p>

            </div>

        </div>


        <div class="student-form-container">

            <h3>➕ Ajouter un parent</h3>


            <form id="formParent">

                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            Nom du parent
                        </label>

                        <input
                            type="text"
                            id="nomParent"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            Prénom du parent
                        </label>

                        <input
                            type="text"
                            id="prenomParent"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            Téléphone
                        </label>

                        <input
                            type="text"
                            id="telephoneParent"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="emailParent"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            Adresse
                        </label>

                        <input
                            type="text"
                            id="adresseParent"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            Élève
                        </label>

                        <select
    id="elevesParent"
    multiple
    required
    style="min-height: 120px;"
>

    ${eleves.map(function(eleve) {

        return `

            <option
                value="${eleve.matricule}"
            >

                ${eleve.nom}
                ${eleve.prenom}
                -
                ${eleve.classe}

            </option>

        `;

    }).join("")}

</select>

<small>
    Maintenez Ctrl pour sélectionner plusieurs enfants.
</small>

                    </div>

                </div>


                <div class="form-actions">

                    <button
                        type="submit"
                        class="save-button"
                    >

                        💾 Enregistrer le parent

                    </button>

                </div>

            </form>

        </div>


        <div class="student-search">

            <input
                type="text"
                id="rechercheParent"
                placeholder="🔎 Rechercher un parent..."
                onkeyup="rechercherParent()"
            >

        </div>


        <div class="student-table-container">

            <table>

                <thead>

                    <tr>

                        <th>Nom</th>

                        <th>Prénom</th>

                        <th>Téléphone</th>

                        <th>E-mail</th>

                        <th>Élève</th>

                        <th>Classe</th>

                        <th>Actions</th>

                    </tr>

                </thead>


                <tbody id="listeParents"></tbody>

            </table>

        </div>

    `;


    afficherListeParents();


    document
        .getElementById("formParent")
        .addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                const nouveauParent = {

                    id:
                        Date.now(),

                    nom:
                        document.getElementById(
                            "nomParent"
                        ).value,

                    prenom:
                        document.getElementById(
                            "prenomParent"
                        ).value,

                    telephone:
                        document.getElementById(
                            "telephoneParent"
                        ).value,

                    email:
                        document.getElementById(
                            "emailParent"
                        ).value,

                    adresse:
                        document.getElementById(
                            "adresseParent"
                        ).value,

                    eleves:
    Array.from(
        document.getElementById(
            "elevesParent"
        ).selectedOptions
    ).map(function(option) {

        return option.value;

    })

                };


                const parentExistant =
    parents.find(function(parent) {

        return (
            parent.nom.toLowerCase() ===
            nouveauParent.nom.toLowerCase()

            &&

            parent.prenom.toLowerCase() ===
            nouveauParent.prenom.toLowerCase()

            &&

            parent.telephone ===
            nouveauParent.telephone
        );

    });


if (parentExistant) {

    const ajouter =
        confirm(
            "⚠️ Ce parent existe déjà.\n\n" +
            "Voulez-vous ajouter le ou les nouveaux enfants à sa fiche ?"
        );


    if (!ajouter) {

        return;

    }


    parentExistant.eleves =
        parentExistant.eleves || [];


    nouveauParent.eleves.forEach(
        function(matricule) {

            if (
                !parentExistant.eleves.includes(
                    matricule
                )
            ) {

                parentExistant.eleves.push(
                    matricule
                );

            }

        }
    );


} else {

    parents.push(
        nouveauParent
    );

}


localStorage.setItem(
    "sbcParents",
    JSON.stringify(
        parents
    )
);


                alert(
                    "✅ Parent enregistré avec succès !"
                );


                document
                    .getElementById(
                        "formParent"
                    )
                    .reset();


                afficherListeParents();

            }
        );

}


// ===============================
// AFFICHER LA LISTE DES PARENTS
// ===============================

function afficherListeParents() {

    const tableau =
        document.getElementById(
            "listeParents"
        );


    if (!tableau) {

        return;

    }


    if (parents.length === 0) {

        tableau.innerHTML = `

            <tr>

                <td colspan="7">

                    Aucun parent enregistré.

                </td>

            </tr>

        `;

        return;

    }


    tableau.innerHTML = "";


    parents.forEach(function(parent) {

       const enfants =
    eleves.filter(function(eleve) {

        return parent.eleves &&
            parent.eleves.includes(
                eleve.matricule
            );

    });


        tableau.innerHTML += `

            <tr>

                <td>
                    ${parent.nom}
                </td>

                <td>
                    ${parent.prenom}
                </td>

                <td>
                    ${parent.telephone}
                </td>

                <td>
                    ${parent.email || "-"}
                </td>

               <td>

    ${
        enfants.length > 0

            ? enfants.map(function(eleve) {

                return `
                    <div>
                        👨‍🎓
                        ${eleve.nom}
                        ${eleve.prenom}
                    </div>
                `;

            }).join("")

            : "Aucun enfant"

    }

</td>


<td>

    ${
        enfants.length > 0

            ? enfants.map(function(eleve) {

                return `
                    <div>
                        ${eleve.classe}
                    </div>
                `;

            }).join("")

            : "-"

    }

</td>

                <td>

                    <button
    onclick="modifierParent(${parent.id})"
>

    ✏️ Modifier

</button>

<button
    onclick="supprimerParent(${parent.id})"
>

    🗑️ Supprimer

</button>

                </td>

            </tr>

        `;

    });

}


// ===============================
// RECHERCHER UN PARENT
// ===============================

function rechercherParent() {

    const recherche =
        document.getElementById(
            "rechercheParent"
        ).value.toLowerCase();


    const lignes =
        document.querySelectorAll(
            "#listeParents tr"
        );


    lignes.forEach(function(ligne) {

        const texte =
            ligne.textContent.toLowerCase();


        ligne.style.display =
            texte.includes(recherche)
                ? ""
                : "none";

    });

}


// ===============================
// SUPPRIMER UN PARENT
// ===============================

function supprimerParent(id) {

    const confirmation =
        confirm(
            "Voulez-vous vraiment supprimer ce parent ?"
        );


    if (!confirmation) {

        return;

    }


    parents =
        parents.filter(function(parent) {

            return parent.id !== id;

        });


    localStorage.setItem(
        "sbcParents",
        JSON.stringify(
            parents
        )
    );


    afficherListeParents();

}
// ===============================
// MODIFIER UN PARENT
// ===============================

function modifierParent(id) {

    const parent =
        parents.find(function(p) {

            return p.id === id;

        });


    if (!parent) {

        alert("⚠️ Parent introuvable.");

        return;

    }


    const nouveauNom =
        prompt(
            "Nom du parent :",
            parent.nom
        );

    if (nouveauNom === null) {

        return;

    }


    const nouveauPrenom =
        prompt(
            "Prénom du parent :",
            parent.prenom
        );

    if (nouveauPrenom === null) {

        return;

    }


    const nouveauTelephone =
        prompt(
            "Téléphone :",
            parent.telephone
        );

    if (nouveauTelephone === null) {

        return;

    }


    const nouvelEmail =
        prompt(
            "E-mail :",
            parent.email || ""
        );

    if (nouvelEmail === null) {

        return;

    }


    const nouvelleAdresse =
        prompt(
            "Adresse :",
            parent.adresse || ""
        );

    if (nouvelleAdresse === null) {

        return;

    }


    const enfantsActuels =
        parent.eleves || [];


    const listeEnfants =
        eleves.map(function(eleve) {

            const selectionne =
                enfantsActuels.includes(
                    eleve.matricule
                )
                    ? "selected"
                    : "";


            return `

                <option
                    value="${eleve.matricule}"
                    ${selectionne}
                >

                    ${eleve.nom}
                    ${eleve.prenom}
                    -
                    ${eleve.classe}

                </option>

            `;

        }).join("");


    const fenetre =
        document.createElement("div");


    fenetre.innerHTML = `

        <div style="
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        ">

            <div style="
                background: white;
                padding: 25px;
                border-radius: 10px;
                width: 400px;
                max-width: 90%;
            ">

                <h3>
                    👨‍👩‍👧‍👦 Enfants du parent
                </h3>

                <p>
                    Sélectionnez les enfants associés :
                </p>

                <select
                    id="modifierEnfantsParent"
                    multiple
                    style="
                        width: 100%;
                        min-height: 180px;
                    "
                >

                    ${listeEnfants}

                </select>

                <p style="
                    font-size: 12px;
                    color: #666;
                ">

                    Maintenez Ctrl pour sélectionner
                    plusieurs enfants.

                </p>


                <div style="
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                ">

                    <button
                        onclick="this.closest('div[style*=fixed]').remove()"
                    >

                        Annuler

                    </button>


                    <button
                        onclick="
                            enregistrerModificationParent(
                                ${id},
                                '${nouveauNom.replace(/'/g, "\\'")}',
                                '${nouveauPrenom.replace(/'/g, "\\'")}',
                                '${nouveauTelephone.replace(/'/g, "\\'")}',
                                '${nouvelEmail.replace(/'/g, "\\'")}',
                                '${nouvelleAdresse.replace(/'/g, "\\'")}'
                            )
                        "
                        class="save-button"
                    >

                        💾 Enregistrer

                    </button>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        fenetre.firstElementChild
    );

}
function enregistrerModificationParent(
    id,
    nom,
    prenom,
    telephone,
    email,
    adresse
) {

    const parent =
        parents.find(function(p) {

            return p.id === id;

        });


    if (!parent) {

        return;

    }


    const select =
        document.getElementById(
            "modifierEnfantsParent"
        );


    const enfantsSelectionnes =
        Array.from(
            select.selectedOptions
        ).map(function(option) {

            return option.value;

        });


    parent.nom =
        nom;

    parent.prenom =
        prenom;

    parent.telephone =
        telephone;

    parent.email =
        email;

    parent.adresse =
        adresse;

    parent.eleves =
        enfantsSelectionnes;


    localStorage.setItem(
        "sbcParents",
        JSON.stringify(
            parents
        )
    );


    const fenetre =
        select.closest(
            'div[style*="fixed"]'
        );


    if (fenetre) {

        fenetre.remove();

    }


    afficherListeParents();


    alert(
        "✅ Parent et enfants modifiés avec succès !"
    );

}
// ===============================
// SITUATION FINANCIÈRE D'UN ÉLÈVE
// ===============================

function afficherSituationPaiement() {

    const matricule =
        document.getElementById(
            "eleveSituationPaiement"
        ).value;


    const zone =
        document.getElementById(
            "resultatSituationPaiement"
        );


    if (!matricule) {

        zone.innerHTML = `

            <p style="text-align: center;">

                Sélectionnez un élève pour voir
                sa situation.

            </p>

        `;

        return;

    }


    const eleve =
        eleves.find(function(e) {

            return e.matricule === matricule;

        });


    if (!eleve) {

        return;

    }


    const typesFrais = [

        {
            nom: "Inscription",
            montant: Number(
                eleve.fraisInscription || 0
            )
        },

        {
            nom: "Scolarité",
            montant: Number(
                eleve.fraisScolarite || 0
            )
        },

        {
            nom: "Transport",
            montant: Number(
                eleve.fraisTransport || 0
            )
        },

        {
            nom: "Cantine",
            montant: Number(
                eleve.fraisCantine || 0
            )
        },

        {
            nom: "Autre",
            montant: Number(
                eleve.autresFrais || 0
            )
        }

    ];


    const paiementsEleve =
        paiements.filter(function(paiement) {

            return paiement.eleve === matricule;

        });


    let totalPrevu = 0;
    let totalPaye = 0;


    let lignes = "";


    typesFrais.forEach(function(frais) {

        const paye =
            paiementsEleve
                .filter(function(paiement) {

                    return paiement.type ===
                        frais.nom;

                })
                .reduce(function(total, paiement) {

                    return total +
                        Number(
                            paiement.montant || 0
                        );

                }, 0);


        const reste =
            Math.max(
                frais.montant - paye,
                0
            );


        totalPrevu +=
            frais.montant;

        totalPaye +=
            paye;


        lignes += `

            <tr>

                <td>
                    ${frais.nom}
                </td>

                <td>
                    ${frais.montant.toLocaleString("fr-FR")}
                    FCFA
                </td>

                <td>
                    ${paye.toLocaleString("fr-FR")}
                    FCFA
                </td>

                <td>
                    ${reste.toLocaleString("fr-FR")}
                    FCFA
                </td>

            </tr>

        `;

    });


    const totalReste =
        Math.max(
            totalPrevu - totalPaye,
            0
        );


    zone.innerHTML = `

        <div style="margin-top: 25px;">

            <h3>
                👨‍🎓 ${eleve.nom}
                ${eleve.prenom}
                — ${eleve.classe}
            </h3>


            <table>

                <thead>

                    <tr>

                        <th>Type de frais</th>

                        <th>Montant prévu</th>

                        <th>Déjà payé</th>

                        <th>Reste à payer</th>

                    </tr>

                </thead>


                <tbody>

                    ${lignes}

                </tbody>


                <tfoot>

                    <tr>

                        <th>
                            TOTAL
                        </th>

                        <th>
                            ${totalPrevu.toLocaleString("fr-FR")}
                            FCFA
                        </th>

                        <th>
                            ${totalPaye.toLocaleString("fr-FR")}
                            FCFA
                        </th>

                        <th>
                            ${totalReste.toLocaleString("fr-FR")}
                            FCFA
                        </th>

                    </tr>

                </tfoot>

            </table>

        </div>

    `;

}
// ===============================
// AFFICHER LES IMPAYÉS
// ===============================

function afficherImpayes() {

    const tableau =
        document.getElementById("listeImpayes");

    const totalElement =
        document.getElementById("totalImpayes");


    if (!tableau || !totalElement) {
        return;
    }


    tableau.innerHTML = "";


    let totalGeneral = 0;


    eleves.forEach(function(eleve) {

        const totalPrevu =

            Number(eleve.fraisInscription || 0) +

            Number(eleve.fraisScolarite || 0) +

            Number(eleve.fraisTransport || 0) +

            Number(eleve.fraisCantine || 0) +

            Number(eleve.autresFrais || 0);


        const totalPaye =

            paiements
                .filter(function(paiement) {

                    return paiement.eleve ===
                        eleve.matricule;

                })
                .reduce(function(total, paiement) {

                    return total +
                        Number(
                            paiement.montant || 0
                        );

                }, 0);


        const reste = Math.max(
            totalPrevu - totalPaye,
            0
        );


        // Élève à jour : on ne l'affiche pas
        if (reste <= 0) {
            return;
        }


        totalGeneral += reste;


        tableau.innerHTML += `

            <tr>

                <td>
                    ${eleve.nom}
                    ${eleve.prenom}
                </td>

                <td>
                    ${eleve.classe}
                </td>

                <td>
                    ${totalPrevu.toLocaleString("fr-FR")}
                    FCFA
                </td>

                <td>
                    ${totalPaye.toLocaleString("fr-FR")}
                    FCFA
                </td>

                <td style="
                    font-weight: bold;
                ">

                    ${reste.toLocaleString("fr-FR")}
                    FCFA

                </td>

            </tr>

        `;

    });


    totalElement.textContent =
        totalGeneral.toLocaleString("fr-FR") +
        " FCFA";


    if (tableau.innerHTML === "") {

        tableau.innerHTML = `

            <tr>

                <td colspan="5"
                    style="text-align:center;">

                    🟢 Aucun impayé.
                    Tous les élèves sont à jour.

                </td>

            </tr>

        `;

    }

}
// ===============================
// STATISTIQUES PAR MODE DE PAIEMENT
// ===============================

function afficherStatistiquesPaiements() {

    let especes = 0;
    let mobileMoney = 0;
    let virement = 0;
    let cheque = 0;


    paiements.forEach(function(paiement) {

        const montant =
            Number(paiement.montant || 0);


        if (paiement.mode === "Espèces") {

            especes += montant;

        }

        else if (paiement.mode === "Mobile Money") {

            mobileMoney += montant;

        }

        else if (paiement.mode === "Virement") {

            virement += montant;

        }

        else if (paiement.mode === "Chèque") {

            cheque += montant;

        }

    });


    const elementEspeces =
        document.getElementById("totalEspeces");

    const elementMobileMoney =
        document.getElementById("totalMobileMoney");

    const elementVirement =
        document.getElementById("totalVirement");

    const elementCheque =
        document.getElementById("totalCheque");


    if (elementEspeces) {

        elementEspeces.textContent =
            especes.toLocaleString("fr-FR") +
            " FCFA";

    }


    if (elementMobileMoney) {

        elementMobileMoney.textContent =
            mobileMoney.toLocaleString("fr-FR") +
            " FCFA";

    }


    if (elementVirement) {

        elementVirement.textContent =
            virement.toLocaleString("fr-FR") +
            " FCFA";

    }


    if (elementCheque) {

        elementCheque.textContent =
            cheque.toLocaleString("fr-FR") +
            " FCFA";

    }

}
// ===============================
// ANNÉES DISPONIBLES
// ===============================

function obtenirAnneesPaiements() {

    const annees = new Set();

    paiements.forEach(function(paiement) {

        if (paiement.date) {

            const annee =
                paiement.date.substring(0, 4);

            annees.add(annee);

        }

    });


    const anneeActuelle =
        new Date().getFullYear().toString();


    annees.add(anneeActuelle);


    return Array.from(annees).sort(
        function(a, b) {
            return Number(b) - Number(a);
        }
    );

}


// ===============================
// STATISTIQUES MENSUELLES
// ===============================

function afficherStatistiquesMensuelles() {

    const tableau =
        document.getElementById(
            "listeStatistiquesMensuelles"
        );


    const select =
        document.getElementById(
            "anneeStatistiques"
        );


    if (!tableau || !select) {
        return;
    }


    const annee =
        select.value;


    const mois = [

        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"

    ];


    tableau.innerHTML = "";


    mois.forEach(function(nomMois, index) {

        const moisNumero =
            String(index + 1).padStart(2, "0");


        const total =
            paiements
                .filter(function(paiement) {

                    if (!paiement.date) {
                        return false;
                    }


                    return paiement.date.substring(0, 4) ===
                        annee

                        &&

                        paiement.date.substring(5, 7) ===
                        moisNumero;

                })
                .reduce(function(total, paiement) {

                    return total +
                        Number(
                            paiement.montant || 0
                        );

                }, 0);


        tableau.innerHTML += `

            <tr>

                <td>
                    ${nomMois}
                </td>

                <td>
                    <strong>
                        ${total.toLocaleString("fr-FR")}
                        FCFA
                    </strong>
                </td>

            </tr>

        `;

    });

}
afficherTableauDeBord();
// ===============================
// SBC SCHOOL - AUTHENTIFICATION
// ===============================

// Afficher l'inscription
function afficherInscription() {

    document.getElementById("loginForm").style.display =
        "none";

    document.getElementById("registerForm").style.display =
        "block";
}


// Afficher la connexion
function afficherConnexion() {

    document.getElementById("registerForm").style.display =
        "none";

    document.getElementById("loginForm").style.display =
        "block";
}


// ===============================
// CRÉER UN COMPTE
// ===============================

function inscrireSBC() {

    const nom =
        document.getElementById(
            "registerNom"
        ).value.trim();

    const telephone =
        document.getElementById(
            "registerTelephone"
        ).value.trim();

    const code =
        document.getElementById(
            "registerCode"
        ).value.trim();

    const confirmation =
        document.getElementById(
            "registerCodeConfirmation"
        ).value.trim();

    const etablissement =
        document.getElementById(
            "registerEtablissement"
        ).value.trim();


    // Vérification des champs

    if (
        !nom ||
        !telephone ||
        !code ||
        !confirmation ||
        !etablissement
    ) {

        alert(
            "⚠️ Veuillez remplir tous les champs."
        );

        return;

    }


    // Vérifier le code

    if (!/^\d{4}$/.test(code)) {

        alert(
            "⚠️ Le code doit contenir exactement 4 chiffres."
        );

        return;

    }


    // Vérifier la confirmation

    if (code !== confirmation) {

        alert(
            "⚠️ Les deux codes ne correspondent pas."
        );

        return;

    }


    // Vérifier si un compte existe déjà

    const compteExistant =
        JSON.parse(
            localStorage.getItem(
                "sbcCompte"
            )
        );


    if (
        compteExistant &&
        compteExistant.telephone === telephone
    ) {

        alert(
            "⚠️ Ce numéro possède déjà un compte."
        );

        return;

    }


    // Créer le compte

    const compte = {

        nom: nom,

        telephone: telephone,

        code: code,

        etablissement: etablissement

    };


    localStorage.setItem(
        "sbcCompte",
        JSON.stringify(compte)
    );


    // Connexion automatique

    localStorage.setItem(
        "sbcConnecte",
        "true"
    );


    alert(
        "✅ Compte créé avec succès !"
    );


    afficherApplication();

}


// ===============================
// CONNEXION
// ===============================

function connexionSBC() {

    const telephone =
        document.getElementById(
            "loginTelephone"
        ).value.trim();

    const code =
        document.getElementById(
            "loginCode"
        ).value.trim();


    if (!telephone || !code) {

        alert(
            "⚠️ Entrez votre numéro et votre code."
        );

        return;

    }


    const compte =
        JSON.parse(
            localStorage.getItem(
                "sbcCompte"
            )
        );


    if (!compte) {

        alert(
            "⚠️ Aucun compte trouvé. Veuillez créer un compte."
        );

        afficherInscription();

        return;

    }


    if (
        compte.telephone !== telephone ||
        compte.code !== code
    ) {

        alert(
            "❌ Numéro de téléphone ou code incorrect."
        );

        return;

    }


    localStorage.setItem(
        "sbcConnecte",
        "true"
    );


    alert(
        "✅ Connexion réussie !"
    );


    afficherApplication();

}


// ===============================
// AFFICHER L'APPLICATION
// ===============================

function afficherApplication() {

    const authScreen =
        document.getElementById(
            "authScreen"
        );


    if (authScreen) {

        authScreen.style.display =
            "none";

    }

}

// ===============================
// VÉRIFIER LA CONNEXION
// ===============================

function verifierConnexion() {

    const connecte =
        localStorage.getItem(
            "sbcConnecte"
        );


    const authScreen =
        document.getElementById(
            "authScreen"
        );


    if (connecte === "true") {

        // Utilisateur connecté
        // On cache l'écran de connexion

        if (authScreen) {

            authScreen.style.display =
                "none";

        }

    } else {

        // Utilisateur non connecté
        // On affiche l'écran de connexion

        if (authScreen) {

            authScreen.style.display =
                "flex";

        }

        // On s'assure que la connexion
        // est affichée

        afficherConnexion();

    }

}


// Lancer la vérification

verifierConnexion();
// ===============================
// SBC SCHOOL - DÉCONNEXION
// ===============================

function deconnexionSBC() {

    const confirmation = confirm(
        "Voulez-vous vraiment vous déconnecter ?"
    );


    if (!confirmation) {

        return;

    }


    localStorage.removeItem(
        "sbcConnecte"
    );


    // Afficher l'écran de connexion

    const authScreen =
        document.getElementById(
            "authScreen"
        );


    if (authScreen) {

        authScreen.style.display =
            "flex";

    }


    // Afficher la connexion

    afficherConnexion();


    // Nettoyer les champs

    const telephone =
        document.getElementById(
            "loginTelephone"
        );

    const code =
        document.getElementById(
            "loginCode"
        );


    if (telephone) {

        telephone.value = "";

    }


    if (code) {

        code.value = "";

    }

}
// ===============================
// AFFICHER / MASQUER LE CODE
// ===============================

function afficherMasquerCode(id, bouton) {

    const champ =
        document.getElementById(id);

    if (!champ) {
        return;
    }

    if (champ.type === "password") {

        champ.type = "text";

        bouton.textContent = "🙈";

    } else {

        champ.type = "password";

        bouton.textContent = "👁️";

    }

}
// ===============================
// SBC SCHOOL - MON COMPTE
// ===============================

function afficherMonCompte() {

    const compte =
        JSON.parse(
            localStorage.getItem("sbcCompte")
        );

    if (!compte) {

        alert("⚠️ Aucun compte trouvé.");

        return;

    }

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>👤 Mon compte</h2>

                <p>
                    Gérer les informations de votre compte SBC School
                </p>

            </div>

            <div class="form-grid">

                <div class="form-group">

                    <label>Nom complet</label>

                    <input
                        type="text"
                        id="compteNom"
                        value="${compte.nom || ""}"
                    >

                </div>

                <div class="form-group">

                    <label>Numéro de téléphone</label>

                    <input
                        type="tel"
                        id="compteTelephone"
                        value="${compte.telephone || ""}"
                    >

                </div>

                <div class="form-group">

                    <label>Nom de l'établissement</label>

                    <input
                        type="text"
                        id="compteEtablissement"
                        value="${compte.etablissement || ""}"
                    >

                </div>

            </div>

            <div class="form-actions">

                <button
                    type="button"
                    class="save-button"
                    onclick="modifierCompteSBC()"
                >
                    💾 Enregistrer
                </button>

            </div>

            <hr style="margin: 30px 0;">

            <h3>🔢 Modifier le code PIN</h3>

            <div class="form-grid">

                <div class="form-group">

                    <label>Ancien code</label>

                    <input
                        type="password"
                        id="ancienCode"
                        maxlength="4"
                        inputmode="numeric"
                        placeholder="Ancien code"
                    >

                </div>

                <div class="form-group">

                    <label>Nouveau code</label>

                    <input
                        type="password"
                        id="nouveauCode"
                        maxlength="4"
                        inputmode="numeric"
                        placeholder="Nouveau code"
                    >

                </div>

                <div class="form-group">

                    <label>Confirmer le nouveau code</label>

                    <input
                        type="password"
                        id="confirmationNouveauCode"
                        maxlength="4"
                        inputmode="numeric"
                        placeholder="Confirmer le code"
                    >

                </div>

            </div>

            <div class="form-actions">

                <button
                    type="button"
                    class="save-button"
                    onclick="modifierCodeSBC()"
                >
                    🔐 Modifier le code PIN
                </button>

            </div>

        </div>

    `;

}
// ===============================
// MODIFIER LES INFORMATIONS
// ===============================

function modifierCompteSBC() {

    const compte =
        JSON.parse(
            localStorage.getItem("sbcCompte")
        );

    if (!compte) {

        alert("⚠️ Compte introuvable.");

        return;

    }

    compte.nom =
        document.getElementById(
            "compteNom"
        ).value.trim();

    compte.telephone =
        document.getElementById(
            "compteTelephone"
        ).value.trim();

    compte.etablissement =
        document.getElementById(
            "compteEtablissement"
        ).value.trim();


    if (
        !compte.nom ||
        !compte.telephone ||
        !compte.etablissement
    ) {

        alert(
            "⚠️ Veuillez remplir tous les champs."
        );

        return;

    }


    localStorage.setItem(
        "sbcCompte",
        JSON.stringify(compte)
    );


    alert(
        "✅ Informations du compte modifiées."
    );

}


// ===============================
// MODIFIER LE CODE PIN
// ===============================

function modifierCodeSBC() {

    const compte =
        JSON.parse(
            localStorage.getItem("sbcCompte")
        );

    if (!compte) {

        alert("⚠️ Compte introuvable.");

        return;

    }


    const ancienCode =
        document.getElementById(
            "ancienCode"
        ).value.trim();

    const nouveauCode =
        document.getElementById(
            "nouveauCode"
        ).value.trim();

    const confirmation =
        document.getElementById(
            "confirmationNouveauCode"
        ).value.trim();


    if (
        !ancienCode ||
        !nouveauCode ||
        !confirmation
    ) {

        alert(
            "⚠️ Veuillez remplir tous les champs."
        );

        return;

    }


    if (ancienCode !== compte.code) {

        alert(
            "❌ Ancien code incorrect."
        );

        return;

    }


    if (!/^\d{4}$/.test(nouveauCode)) {

        alert(
            "⚠️ Le nouveau code doit contenir exactement 4 chiffres."
        );

        return;

    }


    if (nouveauCode !== confirmation) {

        alert(
            "⚠️ Les deux nouveaux codes ne correspondent pas."
        );

        return;

    }


    compte.code = nouveauCode;


    localStorage.setItem(
        "sbcCompte",
        JSON.stringify(compte)
    );


    alert(
        "✅ Code PIN modifié avec succès."
    );


    document.getElementById(
        "ancienCode"
    ).value = "";

    document.getElementById(
        "nouveauCode"
    ).value = "";

    document.getElementById(
        "confirmationNouveauCode"
    ).value = "";

}
// ===============================
// SBC SCHOOL - À PROPOS
// ===============================

function afficherAPropos() {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div style="
                text-align: center;
                padding: 35px 20px;
            ">

                <div style="
                    width: 90px;
                    height: 90px;
                    margin: 0 auto 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0f3d91;
                    border-radius: 22px;
                    font-size: 45px;
                ">
                    🎓
                </div>


                <h1 style="
                    color: #0f3d91;
                    margin-bottom: 5px;
                ">
                    SBC School
                </h1>


                <p style="
                    color: #777;
                    font-size: 16px;
                ">
                    Gestion scolaire intelligente
                </p>


                <hr style="
                    margin: 30px 0;
                    border: none;
                    border-top: 1px solid #ddd;
                ">


                <h2>
                    À propos de l'application
                </h2>


                <p>
                    SBC School est une application de
                    gestion scolaire conçue pour faciliter
                    l'administration des établissements
                    scolaires.
                </p>


                <div style="
                    margin-top: 30px;
                    line-height: 1.8;
                ">

                    <p>
                        <strong>Version :</strong>
                        1.0.0
                    </p>


                    <p>
                        <strong>Créateur :</strong>
                        Burkhalter Richardson Jean Jacques
                    </p>


                    <p>
                        <strong>Développée par :</strong>
SBC – Son Business Conception
                    </p>


                    <p>
                        <strong>Année :</strong>
                        2026
                    </p>

                </div>


                <div style="
                    margin-top: 35px;
                    padding: 20px;
                    background: #f5f7fb;
                    border-radius: 12px;
                ">

                    <strong>
                        © 2026 SBC School
                    </strong>

                    <br>

                    Tous droits réservés.

                </div>

            </div>

        </div>

    `;

}
// ===============================
// SBC SCHOOL - ABONNEMENT
// ===============================

function afficherAbonnement() {

    const abonnement =
        JSON.parse(
            localStorage.getItem("sbcAbonnement")
        ) || {
            formule: "Gratuit",
            prix: 0,
            limiteEleves: 20,
            actif: true
        };


    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>💳 Abonnement SBC School</h2>

                <p>
                    Choisissez la formule adaptée à votre établissement.
                </p>

            </div>


            <div style="
                display: grid;
                grid-template-columns:
                    repeat(3, 1fr);
                gap: 20px;
                margin-top: 25px;
            ">


                <!-- GRATUIT -->

                <div style="
                    padding: 25px;
                    border: 2px solid #ddd;
                    border-radius: 15px;
                    text-align: center;
                ">

                    <h2>🆓 Gratuit</h2>

                    <h3>
                        0 FCFA
                    </h3>

                    <p>
                        Jusqu'à <strong>20 élèves</strong>
                    </p>

                    <button
                        class="save-button"
                        onclick="choisirAbonnement(
                            'Gratuit',
                            0,
                            20
                        )"
                    >
                        Choisir
                    </button>

                </div>


                <!-- STANDARD -->

                <div style="
                    padding: 25px;
                    border: 2px solid #0f3d91;
                    border-radius: 15px;
                    text-align: center;
                ">

                    <h2>⭐ Standard</h2>

                    <h3>
                        1 000 FCFA / mois
                    </h3>

                    <p>
                        Jusqu'à <strong>100 élèves</strong>
                    </p>

                    <button
                        class="save-button"
                        onclick="choisirAbonnement(
                            'Standard',
                            1000,
                            100
                        )"
                    >
                        Choisir
                    </button>

                </div>


                <!-- PREMIUM -->

                <div style="
                    padding: 25px;
                    border: 2px solid #d4af37;
                    border-radius: 15px;
                    text-align: center;
                ">

                    <h2>👑 Premium</h2>

                    <h3>
                        2 000 FCFA / mois
                    </h3>

                    <p>
                        <strong>Élèves illimités</strong>
                    </p>

                    <button
                        class="save-button"
                        onclick="choisirAbonnement(
                            'Premium',
                            2000,
                            Infinity
                        )"
                    >
                        Choisir
                    </button>

                </div>

            </div>


            <div style="
                margin-top: 30px;
                padding: 20px;
                background: #f5f7fb;
                border-radius: 12px;
                text-align: center;
            ">

                <strong>
                    Formule actuelle :
                </strong>

                ${abonnement.formule}

                <br>

                Limite :
                ${
                    abonnement.limiteEleves === Infinity
                        ? "Illimitée"
                        : abonnement.limiteEleves +
                          " élèves"
                }

            </div>

        </div>

    `;

}


// ===============================
// CHOISIR UNE FORMULE
// ===============================

// ===============================
// CHOISIR UN ABONNEMENT
// ===============================

function choisirAbonnement(
    formule,
    prix,
    limiteEleves
) {

    // ===============================
    // FORMULE GRATUITE
    // ===============================

    if (prix === 0) {

        const abonnement = {

            formule: "Gratuit",

            prix: 0,

            limiteEleves: 20,

            actif: true

        };


        localStorage.setItem(
            "sbcAbonnement",
            JSON.stringify(abonnement)
        );


        alert(
            "✅ Formule Gratuit activée."
        );


        afficherAbonnement();

        return;

    }


    // ===============================
    // FORMULE PAYANTE
    // ===============================

    afficherPaiementMobileMoney(
        formule,
        prix,
        limiteEleves
    );

}
// ===============================
// PAIEMENT MOBILE MONEY
// ===============================

function afficherPaiementMobileMoney(
    formule,
    prix,
    limiteEleves
) {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>
                    💳 Paiement Mobile Money
                </h2>

                <p>
                    Activez votre abonnement SBC School
                </p>

            </div>


            <!-- RÉCAPITULATIF -->

            <div style="
                background: #f5f7fb;
                padding: 25px;
                border-radius: 14px;
                margin-bottom: 25px;
            ">

                <h3>
                    📋 Récapitulatif
                </h3>

                <p>
                    <strong>Formule :</strong>
                    ${formule}
                </p>

                <p>
                    <strong>Prix :</strong>
                    ${Number(prix).toLocaleString("fr-FR")}
                    FCFA / mois
                </p>

                <p>
                    <strong>Limite :</strong>
                    ${
                        limiteEleves === Infinity
                            ? "Illimitée"
                            : limiteEleves + " élèves"
                    }
                </p>

            </div>


            <!-- CHOIX DU MOYEN DE PAIEMENT -->

            <h3>
                📱 Choisissez votre moyen de paiement
            </h3>


            <div style="
                display: grid;
                grid-template-columns:
                    repeat(2, 1fr);
                gap: 20px;
                margin-top: 20px;
            ">


                <!-- MTN -->

                <button
                    type="button"
                    onclick="selectionnerMobileMoney(
                        'MTN Mobile Money',
                        '${formule}',
                        ${prix},
                        ${limiteEleves}
                    )"
                    style="
                        padding: 30px 20px;
                        border: 2px solid #ddd;
                        border-radius: 15px;
                        background: white;
                        cursor: pointer;
                        font-size: 18px;
                    "
                >

                    📱

                    <br><br>

                    <strong>
                        MTN Mobile Money
                    </strong>

                </button>


                <!-- AIRTEL -->

                <button
                    type="button"
                    onclick="selectionnerMobileMoney(
                        'Airtel Money',
                        '${formule}',
                        ${prix},
                        ${limiteEleves}
                    )"
                    style="
                        padding: 30px 20px;
                        border: 2px solid #ddd;
                        border-radius: 15px;
                        background: white;
                        cursor: pointer;
                        font-size: 18px;
                    "
                >

                    📱

                    <br><br>

                    <strong>
                        Airtel Money
                    </strong>

                </button>

            </div>


            <div style="
                margin-top: 30px;
                text-align: center;
            ">

                <button
                    type="button"
                    class="cancel-button"
                    onclick="afficherAbonnement()"
                >

                    ↩️ Retour aux abonnements

                </button>

            </div>


            <div style="
                margin-top: 25px;
                padding: 15px;
                background: #fff8e1;
                border-radius: 10px;
                text-align: center;
            ">

                ⚠️ Le paiement réel sera connecté
                prochainement.

            </div>

        </div>

    `;

}
// ===============================
// SÉLECTION MOBILE MONEY
// ===============================

function selectionnerMobileMoney(
    moyen,
    formule,
    prix,
    limiteEleves
) {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>
                    📱 ${moyen}
                </h2>

                <p>
                    Paiement de l'abonnement ${formule}
                </p>

            </div>


            <div style="
                max-width: 500px;
                margin: 30px auto;
            ">

                <div class="form-group">

                    <label>
                        Numéro ${moyen}
                    </label>

                    <input
                        type="tel"
                        id="numeroMobileMoney"
                        placeholder="Ex : 06XXXXXXXX"
                        maxlength="15"
                    >

                </div>


                <div style="
                    background: #f5f7fb;
                    padding: 20px;
                    border-radius: 12px;
                    margin: 20px 0;
                    text-align: center;
                ">

                    <strong>
                        Montant à payer
                    </strong>

                    <div style="
                        font-size: 28px;
                        font-weight: bold;
                        color: #0f3d91;
                        margin-top: 10px;
                    ">

                        ${Number(prix).toLocaleString("fr-FR")}
                        FCFA

                    </div>

                </div>


                <button
                    type="button"
                    class="save-button"
                    style="width: 100%;"
                    onclick="confirmerPaiementMobileMoney(
                        '${moyen}',
                        '${formule}',
                        ${prix},
                        ${limiteEleves}
                    )"
                >

                    💳 Continuer

                </button>


                <button
                    type="button"
                    class="cancel-button"
                    style="
                        width: 100%;
                        margin-top: 10px;
                    "
                    onclick="afficherPaiementMobileMoney(
                        '${formule}',
                        ${prix},
                        ${limiteEleves}
                    )"
                >

                    ↩️ Retour

                </button>

            </div>

        </div>

    `;

}
// ===============================
// CONFIRMATION DU PAIEMENT
// ===============================

function confirmerPaiementMobileMoney(
    moyen,
    formule,
    prix,
    limiteEleves
) {

    const numero =
        document.getElementById(
            "numeroMobileMoney"
        ).value.trim();


    if (!numero) {

        alert(
            "⚠️ Veuillez entrer votre numéro Mobile Money."
        );

        return;

    }


    alert(
        "📱 " + moyen +
        "\n\n" +
        "Montant : " +
        Number(prix).toLocaleString("fr-FR") +
        " FCFA\n\n" +
        "Le paiement réel sera connecté prochainement."
    );

}
// ===============================
// SBC SCHOOL - VÉRIFIER LA LIMITE
// ===============================

function verifierLimiteEleves() {

    const abonnement =
        JSON.parse(
            localStorage.getItem("sbcAbonnement")
        ) || {
            formule: "Gratuit",
            limiteEleves: 20
        };


    const limite =
        abonnement.limiteEleves;


    // Premium = illimité

    if (limite === Infinity) {

        return true;

    }


    if (eleves.length >= limite) {

        alert(
            "🔒 Limite atteinte !\n\n" +

            "Votre formule " +
            abonnement.formule +
            " permet jusqu'à " +
            limite +
            " élèves.\n\n" +

            "Passez à une formule supérieure " +
            "pour continuer à ajouter des élèves."
        );

        return false;

    }


    return true;

}
// ===============================
// SBC SCHOOL - SAUVEGARDE
// ===============================

function afficherSauvegarde() {

    dashboardContent.innerHTML = `

        <div class="form-container">

            <div class="form-title">

                <h2>💾 Sauvegarde des données</h2>

                <p>
                    Protégez toutes les données de votre établissement.
                </p>

            </div>


            <div style="
                text-align: center;
                padding: 30px;
            ">

                <div style="
                    font-size: 55px;
                    margin-bottom: 20px;
                ">
                    💾
                </div>


                <h3>
                    Sauvegarde complète
                </h3>


                <p>
                    La sauvegarde contient les élèves,
                    enseignants, classes, matières,
                    notes, paiements, établissement,
                    compte et abonnement.
                </p>


                <button
                    type="button"
                    class="save-button"
                    onclick="exporterSauvegarde()"
                    style="
                        margin-top: 20px;
                    "
                >

                    📥 Télécharger ma sauvegarde

                </button>


                <hr style="
                    margin: 35px 0;
                ">


                <h3>
                    📤 Restaurer une sauvegarde
                </h3>


                <p>
                    Sélectionnez un fichier de sauvegarde
                    SBC School précédemment enregistré.
                </p>


                <input
                    type="file"
                    id="fichierSauvegarde"
                    accept=".json"
                    style="
                        margin: 20px 0;
                    "
                >


                <br>


                <button
                    type="button"
                    class="save-button"
                    onclick="restaurerSauvegarde()"
                >

                    📤 Restaurer les données

                </button>


                <div style="
                    margin-top: 30px;
                    padding: 15px;
                    background: #fff8e1;
                    border-radius: 10px;
                ">

                    ⚠️ La restauration remplacera
                    les données actuellement enregistrées.

                </div>

            </div>

        </div>

    `;

}
// ===============================
// EXPORTER LES DONNÉES
// ===============================

function exporterSauvegarde() {

    const sauvegarde = {

        version: "1.0.0",

        dateSauvegarde:
            new Date().toISOString(),

        eleves:
            JSON.parse(
                localStorage.getItem("sbcEleves")
            ) || [],

        enseignants:
            JSON.parse(
                localStorage.getItem("sbcEnseignants")
            ) || [],

        classes:
            JSON.parse(
                localStorage.getItem("sbcClasses")
            ) || [],

        matieres:
            JSON.parse(
                localStorage.getItem("sbcMatieres")
            ) || [],

        notes:
            JSON.parse(
                localStorage.getItem("sbcNotes")
            ) || [],

        paiements:
            JSON.parse(
                localStorage.getItem("sbcPaiements")
            ) || [],

        etablissement:
            JSON.parse(
                localStorage.getItem("sbcEtablissement")
            ) || {},

        compte:
            JSON.parse(
                localStorage.getItem("sbcCompte")
            ) || {},

        abonnement:
            JSON.parse(
                localStorage.getItem("sbcAbonnement")
            ) || {}

    };


    const contenu =
        JSON.stringify(
            sauvegarde,
            null,
            2
        );


    const fichier =
        new Blob(
            [contenu],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(fichier);


    const lien =
        document.createElement("a");


    lien.href = url;


    const date =
        new Date()
            .toISOString()
            .slice(0, 10);


    lien.download =
        "SBC-School-Sauvegarde-" +
        date +
        ".json";


    document.body.appendChild(lien);

    lien.click();

    document.body.removeChild(lien);


    URL.revokeObjectURL(url);


    alert(
        "✅ Sauvegarde créée avec succès !"
    );

}
// ===============================
// RESTAURER LES DONNÉES
// ===============================

function restaurerSauvegarde() {

    const fichier =
        document.getElementById(
            "fichierSauvegarde"
        ).files[0];


    if (!fichier) {

        alert(
            "⚠️ Veuillez sélectionner un fichier de sauvegarde."
        );

        return;

    }


    const confirmation =
        confirm(
            "⚠️ Attention !\n\n" +

            "La restauration va remplacer " +
            "les données actuelles.\n\n" +

            "Voulez-vous continuer ?"
        );


    if (!confirmation) {

        return;

    }


    const lecteur =
        new FileReader();


    lecteur.onload =
        function(event) {

            try {

                const sauvegarde =
                    JSON.parse(
                        event.target.result
                    );


                localStorage.setItem(
                    "sbcEleves",
                    JSON.stringify(
                        sauvegarde.eleves || []
                    )
                );


                localStorage.setItem(
                    "sbcEnseignants",
                    JSON.stringify(
                        sauvegarde.enseignants || []
                    )
                );


                localStorage.setItem(
                    "sbcClasses",
                    JSON.stringify(
                        sauvegarde.classes || []
                    )
                );


                localStorage.setItem(
                    "sbcMatieres",
                    JSON.stringify(
                        sauvegarde.matieres || []
                    )
                );


                localStorage.setItem(
                    "sbcNotes",
                    JSON.stringify(
                        sauvegarde.notes || []
                    )
                );


                localStorage.setItem(
                    "sbcPaiements",
                    JSON.stringify(
                        sauvegarde.paiements || []
                    )
                );


                localStorage.setItem(
                    "sbcEtablissement",
                    JSON.stringify(
                        sauvegarde.etablissement || {}
                    )
                );


                localStorage.setItem(
                    "sbcCompte",
                    JSON.stringify(
                        sauvegarde.compte || {}
                    )
                );


                localStorage.setItem(
                    "sbcAbonnement",
                    JSON.stringify(
                        sauvegarde.abonnement || {}
                    )
                );


                alert(
                    "✅ Sauvegarde restaurée avec succès !\n\n" +
                    "SBC School va maintenant être actualisé."
                );


                location.reload();


            } catch (erreur) {

                alert(
                    "❌ Le fichier de sauvegarde est invalide."
                );

            }

        };


    lecteur.readAsText(fichier);

}