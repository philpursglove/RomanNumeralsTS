# Numbers to Roman Numerals

For this Kata, write a function to convert from normal (Arabic) numbers to Roman Numerals: 

    1 -> I 
    7 -> VII
    9 -> IX
    10 -> X
    11 -> XI
    39 -> XXXIX
    45 -> XLV
    etc.

Symbol Values 

    I 1 
    V 5 
    X 10 
    L 50 
    C 100 
    D 500 
    M 1000

A number written in Arabic numerals can be broken into digits. For example, 1903 is composed of 1 (one thousand), 9 (nine hundreds), 0 (zero tens), and 3 (three units). 
To write the Roman numeral:
* Each of the nonzero digits should be treated separately.
* Generally, symbols are placed in order of value, starting with the largest values.
* When smaller values precede larger values, the smaller values are subtracted from the larger values, and the result is added to the total. 

In the above example, 1,000 = M, 900 = CM, and 3 = III. Therefore:

 `1903 = MCMIII.`


However, you can’t write numerals like “IM” for 999, there are some additional rules:
* The symbols “I”, “X”, “C”, and “M” can be repeated three times in succession, but no more. (They may appear more than three times if they appear non-sequentially, 
such as XXXIX.) 
* “D”, “L”, and “V” can never be repeated.
* “I” can be subtracted from “V” and “X” only.
* “X” can be subtracted from “L” and “C” only.
* “C” can be subtracted from “D” and “M” only.
* “V”, “L”, and “D” can never be subtracted.
* Only one small-value symbol may be subtracted from any large-value symbol.

Test cases:

```
1 => "I" (min supported value)
2 => "II"
3 => "III"
4 => "IV"
5 => "V"
6 => "VI"
7 => "VII"
8 => "VIII"
9 => "IX"
10 => "X"
11 => "XI"
12 => "XII"
13 => "XIII"
14 => "XIV"
15 => "XV"
16 => "XVI"
17 => "XVII"
18 => "XVIII"
19 => "XIX"
20 => "XX"
29 => "XXIX"
30 => "XXX"
39 => "XXXIX"
40 => "XL"
50 => "L"
90 => "XC"
100 => "C"
110 => "CX"
300 => "CCC"
400 => "CD"
900 => "CM"
1000 => "M"
3999 => "MMMCMXCIX" (max supported value)
```
