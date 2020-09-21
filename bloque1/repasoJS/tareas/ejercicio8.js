let vector1 = [];
let vector2 = [];
let vectorSuma = [];

for(let i = 0; i < 5; i++){
    vector1[i] = Math.floor(Math.random() * 10);
    vector2[i] = Math.floor(Math.random() * 10);
    vectorSuma[i] = vector1[i] + vector2[i];

    console.log(vector1[i]);
    console.log(vector2[i]);
}

for(let i = 0; i < 5; i++){
    console.log(`${vector1[i]} + ${vector2[i]} = ${vectorSuma[i]}`);
}