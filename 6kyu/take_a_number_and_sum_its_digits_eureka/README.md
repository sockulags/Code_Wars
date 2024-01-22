### Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89 = 8<sup>1</sup> + 9<sup>2</sup>

The next number in having this property is 
135:

See this property again: 
135 = 1<sup>1</sup> + 3<sup>2</sup> + 5<sup>3</sup>


#### Task
We need a function to collect these numbers, that may receive two integers 
[_a_,_b_] that defines the range [_a_,_b_] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

#### Examples
Let's see some cases (input -> output):
```
1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
```
If there are no numbers of this kind in the range 
[_a_,_b_] the function should output an empty list.
```
90, 100 --> []
```
Enjoy it!!