/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {

    document.getElementById("run").addEventListener("click", () => {
        fetch("../../_shared/api.json")
            .then(res => res.json())
            .then(data => {
                
                const heroId = +document.getElementById("hero-id").value;

                const hero = data.heroes.find(heroEl => heroEl.id === heroId);
                console.log(hero);

                const templateEl = document.getElementById("tpl-hero");
                let clone = templateEl.content.cloneNode(true);

                const nameEl = clone.querySelector(".name")
                const alterEgoEl = clone.querySelector(".alter-ego");
                const powersEl = clone.querySelector(".powers");

                nameEl.innerText = hero.name;
                alterEgoEl.innerText = hero.alterEgo;
                powersEl.innerText = hero.abilities.join(', ');

                document.getElementById("target").appendChild(clone);

            });
    });

})();
