function fibonacci(n) {
    const fibo = [0,1];
    if(n <=2) return 1;
    
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i-2]
    }

    return fibo[n]
}

fibonacci(11); // result will be 89
