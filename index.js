const charName=document.getElementById('char-name')
const initRoll=document.getElementById('init-roll')
const addBtn=document.getElementById('add-btn')
const combatantList=document.getElementById('combatant-list')
const combatants = []

addBtn.addEventListener('click', function(){
    if (charName.value === '' || initRoll.value === ''){
        return
    }
    const combatant = {
        character: charName.value,
        initiative: Number(initRoll.value),
    }
    combatants.push(combatant)

    charName.value = ''
    initRoll.value = ''

    renderList()
})

function renderList(){
    let listItems=''
    for (let i=0; i<combatants.length; i++){
        listItems += `
            <li>${combatants[i].character} - ${combatants[i].initiative}</li>
        `
    }
    console.log(listItems)
    combatantList.innerHTML = listItems
}