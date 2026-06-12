var tela = document.getElementById("display");
var btns = document.getElementsByTagName("button");

function pressed(v) {
    tela.innerHTML += v;
}

function clearAll() {
    tela.innerHTML = "";
}

function backspace() {
    var textoAtual = tela.innerHTML;
    tela.innerHTML = textoAtual.substring(0, textoAtual.length - 1);
}

function calculate() {
    try {
        var resultado = eval(tela.innerHTML);
        tela.innerHTML = resultado;
    } catch (erro) {
        tela.innerHTML = "Erro";
    }
}

function pintarBotao(botao) {
    botao.style.setProperty("background-image", "linear-gradient(gray, red)", "important");
    botao.style.setProperty("color", "white", "important");
}

function restaurarBotao(botao) {
    botao.style.removeProperty("background-image");
    botao.style.removeProperty("color");
}

document.addEventListener("keydown", function(event) {
    var tecla = event.key;
    
    for (var i = 0; i < btns.length; i++) {
        var textoDoBotao = btns[i].innerText.trim();
        var ehOBotaoCerto = false;

        if (textoDoBotao === tecla) ehOBotaoCerto = true;
        else if (textoDoBotao === "=" && tecla === "Enter") ehOBotaoCerto = true;
        else if (textoDoBotao === "<" && tecla === "Backspace") ehOBotaoCerto = true;
        else if (textoDoBotao === "C" && (tecla === "Escape" || tecla === "c" || tecla === "C")) ehOBotaoCerto = true;

        if (ehOBotaoCerto) {
            event.preventDefault();
            
            pintarBotao(btns[i]);
            
            if (textoDoBotao === "=") calculate();
            else if (textoDoBotao === "C") clearAll();
            else if (textoDoBotao === "<") backspace();
            else pressed(tecla);
        }
    }
});

document.addEventListener("keyup", function(event) {
    var tecla = event.key;
    
    for (var i = 0; i < btns.length; i++) {
        var textoDoBotao = btns[i].innerText.trim();
        var ehOBotaoCerto = false;

        if (textoDoBotao === tecla) ehOBotaoCerto = true;
        else if (textoDoBotao === "=" && tecla === "Enter") ehOBotaoCerto = true;
        else if (textoDoBotao === "<" && tecla === "Backspace") ehOBotaoCerto = true;
        else if (textoDoBotao === "C" && (tecla === "Escape" || tecla === "c" || tecla === "C")) ehOBotaoCerto = true;

        if (ehOBotaoCerto) {
            restaurarBotao(btns[i]);
        }
    }
});

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mousedown", function() {
        pintarBotao(this);
    });

    btns[i].addEventListener("mouseup", function() {
        restaurarBotao(this);
    });

    btns[i].addEventListener("mouseleave", function() {
        restaurarBotao(this); 
    });
}