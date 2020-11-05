//This is a vanilla JS project with a custom webpack config
//run by typing "npm start" into the terminal!

const div = document.createElement('div'); 

div.innerHTML= "Hello World!"; 

const hellWordAppend = (content) => {
    let root = document.getElementById('root')
    root.appendChild(content)
}

hellWordAppend(div);