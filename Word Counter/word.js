function Count(){
    let a = document.getElementById("text").value;
    a.trimStart();
    let c =0;
    for(let i=0;i<a.length;i++){
        let b = a.charAt(i);
        if(b==' '){
            c++;
        }
    }
    let d = document.getElementById("output");
    c = c+1;
    d.innerHTML = c + " words";
}