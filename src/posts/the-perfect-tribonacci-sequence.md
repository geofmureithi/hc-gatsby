---
title: "Python: Writing the perfect Tribonacci sequence"
date: "2017-12-11"
path: "/2017/12/11/python-writing-the-perfect-tribonacci-sequence/"
image: "./img/perfect-tribonacci-sequence.jpg"
description: "Beyond Fibonacci: Writing the perfect Tribonacci sequence"
---
Python: Writing the perfect Tribonacci sequence
===============================================

In several interviews, I have been ask to write a Fibonacci sequence. I have always with ease and with a smile written several lines of code, even in Java, a language that I am not so conversant with. A Fibonacci sequence function in python below:

Fibonacci Sequence Python

```python
def fib(n):
 a,b = 1,1
 for i in range(n-1):
 a,b = b,a+b
 return a
print fib(5)
```

The other day, a potential employer decided I had to prove myself beyond the well-known Fibonacci sequence and generate a Tribonacci sequence.

As you all know, Tribonacci sequences occur in several ways:
<table>

<tbody>

<tr>

<td>**a**</td>

<td>**b**</td>

<td>**c**</td>

<td>**Sequence**</td>

</tr>

<tr>

<td>0</td>

<td>0</td>

<td>1</td>

<td>0, 1, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, …</td>

</tr>

<tr>

<td>1</td>

<td>1</td>

<td>1</td>

<td>1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, …</td>

</tr>

<tr>

<td>0</td>

<td>1</td>

<td>0</td>

<td>0, 1, 0, 1, 2, 3, 6, 11, 20, 37, 68, 125, 230, …</td>

</tr>

<tr>

<td>3</td>

<td>1</td>

<td>3</td>

<td>3, 1, 3, 7, 11, 21, 39, 71, 131, 241, 443, 815, …</td>

</tr>

<tr>

<td>-1</td>

<td>2</td>

<td>2</td>

<td>-1, 2, 2, 3, 7, 12, 22, 41, 75, 138, 254, 467, …</td>

</tr>

</tbody>

</table>

Now, Apart from creating a function that can handle any sequence, the function was also supposed to calculate huge numbers.  
I decided to start with a simple if loop.

Take 1

Python

```python
#take 1
def fib3(n):
# maximum recussion error for 4000
 if n == 0:
 return 1
 elif n == 1:
 return 1
 elif n == 2:
 return 1
 else:
 return fib3(n-1) + fib3(n-2) + fib3(n-3)
```

This worked for small Tribonacci calculations, but had a maximum recussion error.  
My second instinct was to memorize:

Take 2: Memorize

Python

```python
#take 2
memory = {0:1, 1:1, 2:1}
def fib3_alternative(n):
# maximum recussion error for 4000; Avoided by building ip results in memory
 if not n in memory:
 memory[n] = fib3_alternative(n-1) + fib3_alternative(n-2) + fib3_alternative(n-3)
 return memory[n]
```

This would work but only if I build the memory slowly:

Building the memory

```python
#to avoid maximum recussion errors in python, we have to smartly build our fib3 memory
fib3_alternative(40)
fib3_alternative(100)
fib3_alternative(300)
fib3_alternative(700)
fib3_alternative(1000)
fib3_alternative(1500)
fib3_alternative(2000)
fib3_alternative(2500)
fib3_alternative(3000)
fib3_alternative(3500)
print("Fib3_alternative for 4000 is {}".format(fib3_alternative(4000)))
```

I felt that what I had was not enough, I had to create something that would work for all sequences, and must have no complicated methods.

After several times of trial and error, It came to me:

Best

```python
#take 3
def fib3_best(n):
#Works like a charm
 queue = [1, 1, 1]
 for i in xrange(n-2):
 queue = queue[1:] + [sum(queue)]
 return queue[-1]
print ("Fib3_best for 4000 is {}".format(fib3_best(4000)))
```

This works like a charm! You can change queue to whichever sequence you feel suits you.  
You can fork this code on BitBucket [Here](https://bitbucket.org/snippets/acemureithi/dE8oo)
