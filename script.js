function calcular(){
    var num = document.querySelector('input#num').value
    let tab = document.querySelector('select#slc')
    if (num == '') {
        window.alert('por favor digite algo!')
    } else {
    var n = Number(num)
    tab.innerHTML=''
    
        for (let i = 1; i < 11; i++) {
            var item = document.createElement('option')
            item.text = `${n} x ${i}= ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
        
    }

}