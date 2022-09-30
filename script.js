var btn = document.querySelector('#button')
btn.addEventListener('click', function() {

  var tn1 = document.querySelector('#number1')
  var tn2 = document.querySelector('#number2')
  var res = document.querySelector('#res')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 + n2
  res.innerHTML = `O seu resultado entre ${n1}+${n2} é igual a : <strong>${s}</strong>`
   console.log('oi')
})