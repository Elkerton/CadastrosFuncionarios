

var add = document.getElementById("btn-add");
var table = document.getElementById("table");
var inputs = document.getElementById("inputs");
var aux = 0;


add.addEventListener("click",function(){
  
  inputs.innerHTML = ' <ul><li><p>Nome Completo</p><input type="text" id="name" /></li><li><p>Cargo</p><input type="text" id="cargo" /></li><li><p>Salário</p><input type="text" id="cash" /></li><li><p>Carga Horária</p><input type="text" id="cargah" /></li><li><br><p>Benefícios</p><input type="text" id="ben" /></li><li><p>CPF</p><input type="number" id="cpf"/></li><li><p>Data de Nascimento</p><input type="date" id="birth" /></li><li><p>Telefone 1</p><input type="text" id="tel1" /></li><li><p>Telefone 2</p><input type="text" id="tel2" /></li><li><button type="submit" id="confirm" class="btn btn-success">Concluir cadastro</button><button type="submit" id="cancel" class="btn btn-danger">Cancelar Cadastro</button></li></ul>'
  
  var cancel = document.getElementById("cancel");
  var confirm = document.getElementById("confirm");
  
  var name = document.getElementById("name")
var cargo = document.getElementById("cargo")
var cash= document.getElementById("cash")
var cargah = document.getElementById("cargah")
var ben = document.getElementById("ben")
var cpf = document.getElementById("cpf")
var birth = document.getElementById("birth")
var tel1 = document.getElementById("tel1")
var tel2 = document.getElementById("tel2")
  
  confirm.addEventListener("click",function(){
    
     
    
      var newClient = '<table id="id'+aux+'"><tr><td class="active">'+name.value+'</td><td>'+cargo.value+'</td><td>'+cash.value+'</td><td>'+cargah.value+'</td><td>'+ben.value+'</td><td>'+cpf.value+'</td><td>'+birth.value+'</td><td>'+tel1.value+'</td><td>'+tel2.value+'</td><td id="td-btn"><button id="trash'+aux+'" type="submit"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button><button id="edit" type="submit"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></td></tr></table>'
      
      var id = 'id'+aux
      console.log(id)
      
      
      table.innerHTML += newClient;
      
      var edit = document.getElementById("edit");
      var trash = 'trash'+aux
 
      aux++;
    
    $('body').on('click', '#'+trash, function() {
      console.log(id)
   $(this).parents('table').remove();  
});
    
    

    
    
    
    
  });
  
  cancel.addEventListener("click",function(){
    
    inputs.style.display = 'none'
    
    
  
    add.addEventListener("click",function(){
      
      inputs.style.display = "block"
      
      
    }); //Fim do adicionar
    
  });//Fim cancel
  
}); //Fim do Adicionar
  
