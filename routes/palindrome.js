const express = require("express");
const router = express.Router();
const data = require("../data");
const palindrome = data.palindrome;

router.get("/static", (req, res) => {
  res.render("palindrome/static", {});
});

router.get("/server", (req, res) => {
  res.render("palindrome/server", {});
});

/*
router.post("/server", (req, res) => {
  let operation = (req.body.operation || "add").toLowerCase();
  let firstNumber = parseInt(req.body.number1);
  let secondNumber = parseInt(req.body.number2);
  let result;

  try {
    switch (operation) {
      case "add":
        result = calculator.add(firstNumber, secondNumber);
        break;
      case "subtract":
        result = calculator.subtract(firstNumber, secondNumber);
        break;
      case "multiply":
        result = calculator.multiply(firstNumber, secondNumber);
        break;
      case "divide":
        result = calculator.divide(firstNumber, secondNumber);
        break;
      default:
        throw "Operation not supported";
    }
  } catch (e) {
    res.render("calculator/server", {
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      operation: operation,
      error: e
    });
    return;
  }

  res.render("calculator/server", {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operation: operation,
    result: result
  });
});
*/

module.exports = router;
// const express = require('express')
// const router = express.Router();
// const data = require('../data/index')
// const palindrome = data.palindrome


router.get('/', (req,res) => {

    res.render('palindrome/server');
});

router.post('/', (req,res) => {
    
    let testValue = req.body.palindrome;
    let isPalindrome;

    try {
        if(palindrome.isPalindrome(testValue)) {
            isPalindrome = true;
        } 
        else {
            isPalindrome = false;
        }
    } catch(e) {
        res.render('palindrome/static', {isPalindrome: isPalindrome, errror: e, phrase: testValue});    
        return;
    }

    res.render('palindrome/static', {isPalindrome: isPalindrome, phrase: testValue});
});


module.exports = router;