var packman = document.querySelector('#packman')
var pos = 0
var limite_derecho = window.innerWidth 
var img_width = packman.width


var imagenes_packman = [
    ['./PacMan1.png', './PacMan2.png'],
    ['./PacMan3.png', './PacMan4.png']
]

var direction = 0
var focus = 0



function run() {

    focus = (focus + 1) % 2
    direction = checkearDireccion(direction,img_width,pos,limite_derecho)
    if (direction == 0) {

        pos = pos + 20
        packman.style.left = pos + 'px'
        packman.src = imagenes_packman[direction][focus]
        
    }else {
        pos = pos - 20
        packman.style.left = pos + 'px'
        packman.src = imagenes_packman[direction][focus]
        
    }
}

function checkearDireccion(direction,img_width,pos,pagewidth) {
    if (pos+img_width >= pagewidth) {
        direction = 1;
    }else if (pos <= 0){
        direction = 0;
    }
    return direction;
}



setInterval(run,80)