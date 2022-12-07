# Remove column from table
```
/**
 * Remove a column from a table
 * @param num - 1 based index of column (generally 1 is heading for your rows)
 * @param myTbody - refrence to table tbody
 */

function removeColumn(num , myTbody){
    myTbody.querySelector(`tr:nth-child(1) > th:nth-child(${num})`).remove() 
    for (let i = 2; i<=myTbody.querySelectorAll("tr").length; i++){
        myTbody.querySelector(`tr:nth-child(${i}) > td:nth-child(${num})`).remove()
    }
};

//for example for https://choosealicense.com/appendix/
let myTbody = document.querySelector("body > div.container > table > tbody")

//call to reverse becase otherwise each removal will affect numbering
[2,3,4,6,8,12,14].reverse().forEach(elem => removeColumn(elem, myTbody));
```