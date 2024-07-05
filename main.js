let a = prompt('');


for (let i = 0; i < a; i++) {
    if(i > 10) break
    let color;
if(i % 3 == 0){
    color = 'green'
}else if(i % 3 == 1){
    color = 'gold'
}else{
    color = 'red'
}
        document.write(`<div style=" width: 150px;height: 150px;margin: 5px; background: ${color}"></div>`)

    }
