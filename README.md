# node-modules-benchmark

To run, just do `sh ./run.sh`


Example results should be : 

```shell
bash-3.2$ node -v && sh ./run.sh
v0.10.36
Version 1
Called v1, util.yo("man") 1.000.000 times in 0.005742424 sec
Called v1, util.yo("man") 10.000.000 times in 0.046646901 sec
Called v1, util.yo("man") 100.000.000 times in 0.461483307 sec
Called v1, util.yo("man") 1.000.000.000 times in 4.760366051 sec
Version 2
Called v2, util.yo("man") 1.000.000 times in 0.005232417 sec
Called v2, util.yo("man") 10.000.000 times in 0.045340812 sec
Called v2, util.yo("man") 100.000.000 times in 0.452111527 sec
Called v2, util.yo("man") 1.000.000.000 times in 4.348000712 sec
Version 3
Called v3, util.yo("man") 1.000.000 times in 0.001681023 sec
Called v3, util.yo("man") 10.000.000 times in 0.006018891 sec
Called v3, util.yo("man") 100.000.000 times in 0.045181814 sec
Called v3, util.yo("man") 1.000.000.000 times in 0.463784305 sec

bash-3.2$ node -v && sh ./run.sh
v0.12.0
Version 1
Called v1, util.yo("man") 1.000.000 times in 0.005506986 sec
Called v1, util.yo("man") 10.000.000 times in 0.051218435 sec
Called v1, util.yo("man") 100.000.000 times in 0.491422369 sec
Called v1, util.yo("man") 1.000.000.000 times in 4.812897801 sec
Version 2
Called v2, util.yo("man") 1.000.000 times in 0.001660578 sec
Called v2, util.yo("man") 10.000.000 times in 0.00566652 sec
Called v2, util.yo("man") 100.000.000 times in 0.046919627 sec
Called v2, util.yo("man") 1.000.000.000 times in 0.453220027 sec
Version 3
Called v3, util.yo("man") 1.000.000 times in 0.001683052 sec
Called v3, util.yo("man") 10.000.000 times in 0.005986012 sec
Called v3, util.yo("man") 100.000.000 times in 0.044607286 sec
Called v3, util.yo("man") 1.000.000.000 times in 0.450140177 sec

bash-3.2$ node -v && sh ./run.sh
v1.4.3
Version 1
Called v1, util.yo("man") 1.000.000 times in 0.005876669 sec
Called v1, util.yo("man") 10.000.000 times in 0.048846272 sec
Called v1, util.yo("man") 100.000.000 times in 0.493686805 sec
Called v1, util.yo("man") 1.000.000.000 times in 4.593861046 sec
Version 2
Called v2, util.yo("man") 1.000.000 times in 0.002398038 sec
Called v2, util.yo("man") 10.000.000 times in 0.006680743 sec
Called v2, util.yo("man") 100.000.000 times in 0.043834249 sec
Called v2, util.yo("man") 1.000.000.000 times in 0.434639794 sec
Version 3
Called v3, util.yo("man") 1.000.000 times in 0.001712278 sec
Called v3, util.yo("man") 10.000.000 times in 0.006150846 sec
Called v3, util.yo("man") 100.000.000 times in 0.043304706 sec
Called v3, util.yo("man") 1.000.000.000 times in 0.438791884 sec

➜  node-modules-benchmark git:(master) node -v && sh ./run.sh
v5.0.0
Version 1
Called v1, util.yo("man") 1.000.000 times in 0.006159096 sec
Called v1, util.yo("man") 10.000.000 times in 0.050355642 sec
Called v1, util.yo("man") 100.000.000 times in 0.502264655 sec
Called v1, util.yo("man") 1.000.000.000 times in 5.359900328 sec
Version 2
Called v2, util.yo("man") 1.000.000 times in 0.002152581 sec
Called v2, util.yo("man") 10.000.000 times in 0.0061409 sec
Called v2, util.yo("man") 100.000.000 times in 0.064918604 sec
Called v2, util.yo("man") 1.000.000.000 times in 0.563531867 sec
Version 3
Called v3, util.yo("man") 1.000.000 times in 0.001604179 sec
Called v3, util.yo("man") 10.000.000 times in 0.006018103 sec
Called v3, util.yo("man") 100.000.000 times in 0.044839102 sec
Called v3, util.yo("man") 1.000.000.000 times in 0.44347845 sec
```


##Visualised

- v0.10.36
- v0.12.0
- v1.4.3
- v5.0.0

###v1

<img width="338" alt="screen shot 2015-11-06 at 15 19 29" src="https://cloud.githubusercontent.com/assets/4569111/11000559/6772651a-849a-11e5-89a8-b50ad7ebc9e3.png">

###v2

<img width="305" alt="screen shot 2015-11-06 at 15 21 00" src="https://cloud.githubusercontent.com/assets/4569111/11000564/6b1a761c-849a-11e5-86e3-8e2fb3984eae.png">

###v3

<img width="307" alt="screen shot 2015-11-06 at 15 23 06" src="https://cloud.githubusercontent.com/assets/4569111/11000576/81a0c18e-849a-11e5-8cf3-858626fd89cf.png">

