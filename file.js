/*
Développer une calculatrice JavaScript pour le coût d'un bien ou d'un service et ajouter à la page
de l'exercice précédente. La calculatrice doit contenir:
- champ de saisie de quantité;
- sélection du type de produit de la liste (au moins 3 options);
- sélection de l'option de produit par le bouton radio (de deux options ou plus);
- sélection d'une propriété du produit par la caisse.
Les options et les propriétés de l'article dépendent du type d'article sélectionné et sont affichées sur le formulaire
dynamique lors du changement de type de produit:
- - le premier type de produit n'a pas d'options et de propriétés supplémentaires (les boutons radio et les cases à cocher ne sont pas
être reflété);
- le deuxième type de produit a seulement des options (boutons radio sont affichés, CheckBox-pas);
- - le troisième type de produit a seulement la propriété (les boutons radio ne sont pas affichés, les cases à cocher
être reflété).
En fonction de la quantité, du type de produit sélectionné, de l'option sélectionnée ou de la propriété
le prix de l'article est recalculé dynamiquement et affiché sur la page sans rechargement
pages lorsque vous modifiez les valeurs des éléments de formulaire de la calculatrice.
*/





   function updatePrice() {
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }

    // Скрываем или показываем радиокнопки.
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "display");
    if (radioDiv.style.display = select.value == "1")
    {
      radioDiv.style.display = "none";
    }
    if (radioDiv.style.display = select.value == "3")
    {
      radioDiv.style.display = "none";
    }
    

    // Смотрим какая товарная опция выбрана.
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  
    // Скрываем или показываем чекбоксы.
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "1" ? "none" : "block");

    let checkDiv2 = document.getElementById("checkboxes");
    if(checkDiv2.style.display = (select.value == "2"))
    {
      checkDiv2.style.display = "none";
    }
    
    
  
   //--------------------------------------------------------------------
   
  
    // Смотрим какие товарные свойства выбраны.
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей за одии шт";
        //----FOnction pou kalkile somme nan-------------------
        if(priceIndex<=0 || priceIndex > 0){
          let a = document.getElementById('kantite').value;
          let b =price;
           document.getElementById('result').innerHTML=(a*b + " рублей");
          }
    
  }
  
  function getPrices() {
    return {
      prodTypes: [100, 200, 150],
      prodOptions: {
        option1: 25,
        option2: 50,
        option3: 75,
      },
      prodProperties: {
        prop1: 5,
        prop2: 10,
      }
    };
  }
  
  
  window.addEventListener('DOMContentLoaded', function (event) {
    // Скрываем радиокнопки.
    let radioDiv = document.getElementById("radios");
   radioDiv.style.display = "none";
    
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    // Назначаем обработчик на изменение select.
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    });
    
    // Назначаем обработчик радиокнопок.  
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });
  
      // Назначаем обработчик радиокнопок.  
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
  
    updatePrice();
  });
  