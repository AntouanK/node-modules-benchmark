#!/bin/bash
loopcnt=(1000000 10000000 100000000 1000000000)
echo "Version 1"
for i in "${loopcnt[@]}"
do
    node ./module-layout-v1.js $i
done

echo "Version 2"
for i in "${loopcnt[@]}"
do
    node ./module-layout-v2.js $i
done

echo "Version 3"
for i in "${loopcnt[@]}"
do
    node ./module-layout-v3.js $i
done

