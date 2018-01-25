---
title: "Python: The F#%K It Approach"
date: "2016-06-24"
path: "/2016/06/24/python-the-f__k-it-approach/"
image: "./img/python-fuck-it.jpg"
description: "Once in a while as a programmer you meet difficult times, be it time-limits, shitty code and much more."
---

Python: The F#%K It Approach
============================

> This Article Talks about the [Python Fuckit Module](https://github.com/ajalt/fuckitpy) on Github

You can also check out our article on the [Python Retry Module](http://www.geoffreymureithi.me.ke/2015/06/12/python-when-you-fail-retrying/) which allows you to deal with retrying in a better way

Once in a while as a programmer you meet difficult times, be it time-limits, shitty code and much more. It is not advisable to suppress errors. Every programmer should be handle Exceptions. But what do you do in these times where it proves difficult to approach things the expected war. ?

1.  Handling problematic imports:  

    Import Module

    ```python
    import fuckit
    #import problematic_module
    fuckit('problematic_module')
    problematic_module.a_function()
    ```

2.  Class with Errors:(as a @decorator)

    ```python
    @fuckit
    class Person():
     AnotherName = 'Sue Ann'
     def __init__(self):
     self.FirstName = 'Tom'
     self.LastName = 'Sneed'
     def get_name(self):
     return self.FirstName + ' ' + self.LastName
    @fuckit
    class Employee(Person):
     def __init__(self):
     self.empnum = 'abc123'
     def get_emp(self):
     print self.AnotherName
     return self.FirstName + ' ' + 'abc'
    #The lines below work just fine
    x = Person()
    y = Employee()
    print 'start'
    print x.get_name()
    print y.get_emp()
    ```


3.  Function with errors:(as a @decorator)  

    Function

    ```python
    @fuckit
    def printme( str ):
     something_wrong
    # No Exception
    printme("My string")
    ```

4.  Using it in a ‘with’ situation:  

    In a with situation

    ```python
    def printme( str ):
     print str
    with fuckit:
     printme("It will never be an error")
    #Similar to
    try:
     printme("It will never be an error")
    except Exception:
     pass
    ```


Keep in mind that the decorator form of fuckit can’t stop syntax errors

Go on to Github and view the module[ https://github.com/ajalt/fuckitpy](https://github.com/ajalt/fuckitpy) or run `pip install fuckit`
