let n1 = prompt("Ingrese el primer digito")
let n2 = prompt("Ingrese el segundo digito")
let n3 = prompt("Ingrese el tercer digito")
if (n1 == n2 && n2 == n3){
    alert("¡Los numero son iguales!")
}else{
    let mayor;
    if (n1 >= n2 && n1 > n3){
        mayor = n1
    }else if(n2 >=n1 && n2 >= n3){
        mayor = n2
    }else{
        mayor = n3
    }
    alert("El numero mayor es:" + "\n" + mayor)
}