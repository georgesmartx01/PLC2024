module Main where

main =
    do
    print (myFunc1 5)
     print (MyFunc2 10)
     print (3rdFunc "abc")
     print (4thFunc "xyz")

myFunc1 x = x*10
MyFunc2 x = x*2
3rdFunc myStr = str + "foo"
4thFunc myStr = str + "bar"
