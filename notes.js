const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=>{
    return "Your Notes..."
}
const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Node Added!!"))
    }
    else{
        console.log(chalk.green.inverse("Note Title Alraedy Taken!!"))
    }
}
const removeNotes = (title)=>{
    const notes = loadNotes()
    const notesTokeep = notes.filter((note)=>note.title !== title )
    if(notes.length > notesTokeep.length)
    {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesTokeep)
    }
    else {
        console.log(chalk.red.inverse('Note Not Found'))
    }
}
const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your Notes'))
    notes.forEach(element => {
        console.log(element.title)
    });
}
const readNotes = (title)=>{
    const notes = loadNotes()
    const checkNode = notes.find((note)=>note.title === title)
    if(checkNode === undefined)
    {
        console.log(chalk.red.inverse("No Note Found!"))
    }else {
        console.log(chalk.inverse(checkNode.title))
        console.log((checkNode.body))
    }
}
const saveNotes = (notes)=>{
    const Json_data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',Json_data)
}
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    }catch(e) {
        return []
    } 
}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}