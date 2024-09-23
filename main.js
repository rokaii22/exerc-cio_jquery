$(document).ready(function(){
    let imgAberta = '<img class="imagem-1" src="imagens/checkbox.png" alt="checkbox">';
    let imgConcluida = '<img class="imagem-2" src="imagens/checklist.png" alt="concluida">';
    let imgExcluir = '<img src="imagens/close.png" class="close-img" alt="imagem-excluir">'; 

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const nometarefa = $('#nome-Tarefa').val();
        if(nometarefa !== ""){
            let novaTarefa = $(`<li><div class="tarefa"><div>${imgAberta}</div>${nometarefa}</div><div class="imagem-excluir">${imgExcluir}</div></li>`);
            $('ul').append(novaTarefa);
            $('#nome-Tarefa').val('');
        }
    });

    
    $('ul').on('click', '.imagem-excluir', function(){
        $(this).parent().remove();
    });

    
    $('ul').on('click', '.tarefa', function(){
        let tarefaDiv = $(this);
        let tarefaTexto = tarefaDiv.text().trim();

        if (tarefaDiv.hasClass('tarefa-concluida')) {
        
            tarefaDiv.html(`${imgAberta}${tarefaTexto}`);
            tarefaDiv.removeClass('tarefa-concluida');
        } else {
            
            tarefaDiv.html(`${imgConcluida}${tarefaTexto}`);
            tarefaDiv.addClass('tarefa-concluida');
        }
    });
});