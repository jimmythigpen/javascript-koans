var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });


  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      productsICanEat = _.filter(products, function(food){
          var containsMushrooms = _.any(food.ingredients, function(i) {
            return i == 'mushrooms';
        });
          return !containsMushrooms && !food.containsNuts;
        });

      expect(productsICanEat.length).toBe(1);
  });

  //
  // Jake's Example
  //
  productsICanEat = _.reject(products, function(product){
    return product.containsNuts || _.contains(product.ingridents, 'mushrooms');
  });

  // var productsICanEat = [];

   // products is an array of objects defined above (all the pizzas - yummy!)
   // filter each pizza
   // !pizza.containsNuts will return pizzas that do not contain nuts
   //    whereas pizza.ContainNuts will return pizzas that do contain nuts
   // !_.any(pizza.ingredients, function(ingredient) ...
   //      _.any will return the items that return true
   //      !_.any will return the items that do not return true
   //      for each pizza.ingredients you iterate over each item in the array
   //        if one of the ingredients === 'mushrooms' _.any will return true
   //        if return ingredient === 'mushrooms' is true
   //          it is not returned to !_.any because ! says return the ones that are not true
   //   hahah ... explaining this is a lot harder than doing it! :simple_smile: Hope this helps!

  //  productsICanEat = _.filter(products, function(pizza){
  //    return !pizza.containsNuts && !_.any(pizza.ingredients,function(ingredient){
  //      return ingredient === 'mushrooms';
  //    });
  //  });






  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 0;

    /* try chaining range() and reduce() */

    // var five = _.range(0, 1000, 5);
    // var three = _.range(0, 1000, 3);
    //
    //
    // var threeAndFive = five.concat(three);
    //
    // // var sumTest = _.difference(three, five);
    // console.log(threeAndFive);
    //
    //
    // sum = _.reduce(threeAndFive, function(memo, num){ return memo + num; }, 0);


    // sumThree = _.reduce(three, function(memo, num){ return memo + num; }, 0);
    // sumFive = _.reduce(five, function(memo, num){ return memo + num; }, 0);

    //
    // Trey's example
    //
    // var sum = _.range(1, 1000).reduce(function(s, n) { return (n % 3 === 0 || n % 5 === 0) ? s + n : s; }, 0);

    //
    // Jake's Example
    //
    function multiples(end, multiples) {
      var range = _.range(1000);
      console.log(range);
    }

    console.assert( multiples(1000, [3,5]) === 233168);
    console.assert('multiples: Success');

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
