const readline = require('readline-sync')
let isRunning = true;
console.log("Hello, your assets are a critical part of your business. Don't let them break! You're already running on core Maximo, but you should upgrade to OpenShift. Upgrading to OpenShift will increase your profits, but beware...you have some bad habits that will get in the way of obtaining new capabilities.. ")

const username = readline.question("What is your name? ")
console.log("Hi " + username + " !")

//the architect
function Ibm (name, hp) {
    this.name = name;
    this.hp = hp;
    this.capabilities = ['monitor', ' vi' , ' assist']
}

const maximoOpenShift = new Ibm ("Maximo", 100)

//the bad skills 
function Skill (name, hp) {
    this.name = name;
    this.hp = hp;
}

let fail = new Skill ("fear of failure", 75)
let procrasination = new Skill ("procrasination", 50)
let timeM = new Skill ("poor time management", 50)

let skills = [fail, procrasination, timeM]


while(isRunning) {
    const action = readline.keyIn(` ${username}, would you like to to [c] Search the internet for new capabilities, [p] Print Current Capabilities, or [q] Quit? You can also check your progress by typing [i]  `, {limit: 'cqpi'})
    if ( action === 'c') {
        walk();

    } else if (action === 'p') {
        printCapabilities();
    } else if (action === 'q') {
        isRunning = false 
        console.log(`You didn't care enough about your assets ${username}` );
    } else if (action === 'i') {
        console.log (`Player: ${username} | IBM System: ${maximoOpenShift.name} | Health Score: ${maximoOpenShift.hp}  | Current Capabilities: ${maximoOpenShift.capabilities}`)
    }
}


function walk() {

    const random = Math.floor(Math.random()* 3 )
    if (random === 0) {
        console.log("Your searching for the best skills via google...")
    } else if (random === 1) {
        console.log("Ah a bad habit is coming to break your assets!")
        SkillEncounter()
        
    
    } 

}


function printCapabilities() {
    console.log(`Here are your current capabilities: ${maximoOpenShift.capabilities}`)
}

function SkillEncounter() {
    let random = Math.floor(Math.random() * skills.length);
    let badHabit = skills[random];
    console.log("Oh no "  + badHabit.name + " is trying to take over!!!!")
    const choices = readline.keyIn(`What would you like to do? would you like to to [a] find another productive capability, [b] run away?`, {limit: 'ab'})
    
    if (choices === 'a') {
     
        console.log(`Great Job! ${badHabit.name} has been dogded. You also gained HP and a new capability. `)
        if (badHabit.hp =- 0) {
            console.log(`You dodged this bad habit entirely, now ${badHabit.name} hp is ${badHabit.hp} and they can't ruin anyone elese's work productivity..you also gained HP and a new capability.`)
            
            //use array method here to get rid of bad habit
            delete badHabit
            
        }
        
            gainHpAndCapability()
        
            skillBattle()
          
            maximoOnOpenShift()
            
        } else if ( choices === 'b') {
            maximoOpenShift.hp -= 10
            console.log("Your asset leaked oil as you let this bad habit take over...your HP is now " + maximoOpenShift.hp)
            skillBattle()
            if (maximoOpenShift.hp === 0) {
                isRunning = false
                console.log("You have been shutdown!")
            }
        }
        
        
        
    }
    
    
    function gainHpAndCapability() {
        maximoOpenShift.hp += 100
        maximoOpenShift.capabilities.push(" predict")
    }
    
    function skillBattle() {
        let random = Math.floor(Math.random() * skills.length);
        let badHabit = skills[random];
        fightCompetition(badHabit)

    }
    
    
function fightCompetition(Skill) {
    console.log(`${Skill.name} is coming to try to slow you down now`)
    const choices = readline.keyIn(`What would you like to do? would you like to [a] dodge bad habit, [b] start browsing in internet explorer for a better skill?`, {limit: 'ab'})
    
    while(Skill.hp > 0 && maximoOpenShift.hp > 0) {
        if (choices === 'a') {
            Skill.hp -= 15
            console.log(`You dodged ${Skill.name} and they lose 15 hp!`)
           
        } else if (choices === 'b') {
            maximoOpenShift.hp -= 15
        console.log("Really? Who browses in internet explorer...you lose 15 hp...")
        }

    }

}



function maximoOnOpenShift() {
    maximoOpenShift.name = "Maximo Running on OpenShift"
    console.log (`Player: ${username} | IBM System: ${maximoOpenShift.name} | Health Score: ${maximoOpenShift.hp}  | Current Capabilities: ${maximoOpenShift.capabilities}`)
    isRunning = false
    console.log(`Congrats ${username} you are now running on OpenShift!`)
}