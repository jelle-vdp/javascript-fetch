/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const nameField = document.getElementById("hero-name");
    const alterEgoField = document.getElementById("hero-alter-ego");
    const powersField = document.getElementById("hero-powers");

    const fieldsArr = [nameField, alterEgoField, powersField];

    let countFilledFields = 0;

    const catchEmptyFields = () => {

        fieldsArr.forEach(field => {
            
            if(field.value === ""){
                field.style.borderColor = "red";
            } else {
                countFilledFields++;
                field.style.borderColor = "";
            };
        })  
    };

    fetch("../../_shared/api.json")
        .then(res => res.json())
        .then(data => {

            let heroesArr = data.heroes;

            document.getElementById("run").addEventListener("click", () => {
        
                catchEmptyFields();

                if (countFilledFields === 3){
                        let newName = nameField.value;
                        let newAlterEgo = alterEgoField.value;
                        let newPower = []
                        newPower.push(powersField.value);
                        let newHero = {
                            id: heroesArr.length + 1,
                            name: newName,
                            alterEgo: newAlterEgo,
                            abilities: newPower
                        }
                        heroesArr.push(newHero);
                        console.log(heroesArr);

                        nameField.value = "";
                        alterEgoField.value = "";
                        powersField.value = "";

                } else {

                    countFilledFields = 0;

                }
                
            });
        });
})();
