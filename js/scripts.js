let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Hypno', type: 'psychic', height: 1.6},
    {name: 'Jigglypuff', type: ['fairy', ' normal'], height: 0.5},
    {name: 'Liepard', type: 'dark', height: 1.1},
    {name: 'Muk', type: 'poison', height: 1.2},
    {name: 'Palkia', type: ['dragon', ' water'], height: 4.2},
    {name: 'Rattata', type: ['normal', ' dark'], height: 0.3}
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

//returns list of pokemon and characteristics
  function getAll() {
    return pokemonList;
  }

//logs individual details in console
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll
    showDetails: showDetails
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.add(pokemon);
  document.write(pokemon.name + ": (height: " + pokemon.height + ") " + pokemon.type + "<br>");
  pokemonRepository.showDetails(pokemon);
});

//  document.write(pokemon.name + ": (height: " + pokemon.height + ") " + pokemon.type + "<br>");})
//  pokemonRepository.add(pokemon);
