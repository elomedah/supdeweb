const elt = document.getElementById('valider');

elt.addEventListener('click', function(event){
  console.log(event);
  const nomArticle = document.getElementById('tva');
  console.log(nomArticle.value)
});
