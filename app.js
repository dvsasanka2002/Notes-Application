const note = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"Body of Note",
            demandOption: true,
            type:'string'
        }
    }, 
    handler(argv){
        note.addNote(argv.title,argv.body)
    }

})
yargs.command({
    command: 'remove',
    describe: 'Remove a new Note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        note.removeNotes(argv.title)
    }

})
yargs.command({
    command: 'list',
    describe: 'Listing the Notes',
    handler(){
        note.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading the Notes',
    builder :{
        title:{
            describe: 'Reading Notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        note.readNotes(argv.title)
    }
})
yargs.parse()