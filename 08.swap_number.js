//method 1

function swap1(a, b) {
    console.log("before swap a=" + a + ", b=" + b); // a = 10 & b = 20
    temp = a;
    a = b;
    b = temp;
    console.log("After swap a=" + a + ", b=" + b);  // a = 20 & b = 10
}

function swap2(a, b) {
    console.log("before swap a=" + a + ", b=" + b); // a = 10 & b = 20
    a = a + b;  // 10 + 20 =30
    b = a - b;  // 30 - 20 = 10;
    a = a - b;  // 30 - 10 = 20;
    console.log("After swap a=" + a + ", b=" + b); // a = 20 & b = 10
}

function swap3(a, b) {
    console.log("Before swap a=" + a + ", b=" + b); // a =10 & b =20
    [a, b] = [b, a];
    console.log("After swap a=" + a + ", b=" + b); // a = 20 & b = 10
}
