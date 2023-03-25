let consoleWindow = document.getElementsByClassName("consoe_main_window")[0]


console.log(consoleWindow)

const startCursor = document.createElement("span")
startCursor.innerText = "_"
startCursor.className = "cursor"
consoleWindow.appendChild(startCursor)




const element = document.createElement("span")
element.className = "loadDots"
consoleWindow.appendChild(element)

function startAnimation () {
    return new Promise((resolve,reject) => {
        let sound  = document.createElement("audio")
        sound.src = "./sounds/bios.mp3"
        sound.autoplay = true
        startCursor.innerText = ""
        startCursor.className = "stable"
        function startProgram(char) {
          
            startCursor.innerText += char
        }
        let startLoad = setInterval(() => {startProgram(".")},100)
        setTimeout(() => { clearInterval(startLoad)},300)
        
        setTimeout(() => {startCursor.innerText = "_"},1000)
    
        setTimeout(()=> {startCursor.innerText= "[GNU GRUB version 24.03.22]"},2000)
    
    
        setTimeout(() => {
            startCursor.innerText = ""
            let startLoad = setInterval(() => {startProgram(":")},20)
            setTimeout(() => { clearInterval(startLoad)},1500)
        },4100)
        setTimeout(() => {
            startCursor.innerText = ""
            startCursor.innerText = "sudo init portfolio.md --force name = PAVEL PAVLOV"
            let cursor = document.createElement("span")
            cursor.className = "cursor"
            cursor.innerText = "_"
            consoleWindow.appendChild(cursor)
        },6200)
    })
    
}


let timeout = setTimeout(startAnimation,3000)
timeout()
clearTimeout(timeout)

startCursor.innerText = "55555555"

