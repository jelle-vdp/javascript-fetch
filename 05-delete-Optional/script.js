/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    fetch("../../_shared/api.json")
        .then(res => res.json())
        .then(data => {

            let heroesArr = data.heroes;
            let idEl = document.getElementById("hero-id");

            document.getElementById("run").addEventListener("click", () => {
                
                let indexToRemove = heroesArr.findIndex(hero => hero.id === +idEl.value);

                if (indexToRemove === -1){
                    window.alert("That index doesn't exist");
                    idEl.value = "";
                } else {
                    heroesArr.splice(indexToRemove, 1);
                    console.log(heroesArr);
                    idEl.value = "";
                };

            });
        });
})();
