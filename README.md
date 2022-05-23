# JS-ReversePolishNotation-Recursive
 Most people including myself are not trained to read reverse polish notation. This is just a silly practice of problem solving

### Reverse Polish Notation
It's a mathematical equation that goes Right-to-Left for the Operators,
and Left-to-Right on the Operands

**For example:**
`3 10 5 + *`
is equivalent to
`(5 + 10) * 3`
Which equals to
`45`

- We read the last number first, then read the first operand
- So 10 + 5 plus gives us 15
- 15 times 3, gives us 45
- It's weird right?

In this example, ***recursivePolishMath***(), I've used Recursion to convert the text into 2 strings,

The first string called `nextString`, the next one is called `numbers`.

The function goes from the first index, and it keeps going until it cannot find any more numbers.

After that, it will get the results and turn the string into an array using an array.split("") method.

Finally, we add all the numbers into the total in a `for loop`. The operands are decided using a `switch statement`.
*(probably could use a array.reduce() here instead of for loop, but I digress)*
