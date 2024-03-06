let tr ='';
const adddata = (i) =>{
    tr += i;
    let a = tr.charAt(0)
    if ( a=='' || a=='*' || a=='+' || a=='/' || a=='%') {
        tr = '';
        return ;
    }else{
        document.getElementById("num").value = tr;
    }
    
}

function getans() {
    let data = document.getElementById("num").value;
    let ans = eval(data);
    document.getElementById("num").value = ans;
    tr = '';
}

function clearall() {
    document.getElementById("num").value = '';
    tr = '';
}

function backspace() {
    let data = document.getElementById("num").value;
    newdata = data.toString().slice(0,-1);
    tr = newdata;
    document.getElementById("num").value = tr;
}
