function cp(){
    const porcentagem = (np.value / nper.value) * Number(100);
    resultado.innerText = porcentagem + "%";

    if (resultado.style.display == 'none' ){
        resultado.style.display = 'block';
    }else {
            resultado.style.display = 'block';
    }
}

function devp(){
    const vd = (cd.value / Number(100)) * cvp.value;
    const vpad = "R$" + (cvp.value - vd);

    vddp.innerText = "R$" + vd;
    vdpad.innerText = vpad;
}