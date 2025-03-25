let array = [4, 3,7,9,3,2,6,8,4,7,5,6,8];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array);
let array1 = [4, 3,7,9,3,2,6,8,4,7,5,6,8];

for (let i = 0; i< array1.length; i++){
    for( let j =0; j<array.length -1; j++){
        if(array1[j]>array1[j+1]){
            let temp = array1[j];
            array1[j]=array1[j+1];
            array1[j+1]=temp;
        }
    }
}
console.log(array1);

age =[10,20,25,19,54,30,76,36,65,22];

for (let s=0; s< age.length; s++){
    for (let t=0; t<age.length -1; t++){
        if (age[t]>age[t+1]){
            let temp =age[t];
            age[t]=age[t+1];
        }
    }

}
console.log(age);