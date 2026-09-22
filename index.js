const charName=document.getElementById('char-name')
const initRoll=document.getElementById('init-roll')
const addBtn=document.getElementById('add-btn')
const combatantList=document.getElementById('combatant-list')

addBtn.addEventListener('click', function(){
    console.log(charName.value)
    console.log(Number(initRoll.value))
})