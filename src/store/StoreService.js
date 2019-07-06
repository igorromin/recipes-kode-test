import NetworkService from './NetworkService';

module.exports = function() {

    let _recipes = [];

    let setRecipes = function(recipes) {
        _recipes = recipes
    }

    let getRecipes = function() {
        return _recipes;
    }

    let init = async function() {
        return await NetworkService.getRecipes();
    }

    return {
        setRecipes: setRecipes,
        getRecipes: getRecipes,
        init: init,
    }
}();
