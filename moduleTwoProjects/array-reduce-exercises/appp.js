var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(voters) {
const result = voters.reduce(function(final, voter){
    if(voter.age <=18 && voter.age <= 25){
        final.numYoungVotes++
        if(voter.voted){
            final.numYoungPeople++
        }
    } else if (voter.age <= 26 && voter.age <=35){
        final.numMidVotesPeople++
        if(voter.voted){
            final.numMidsPeople++
        }
        } else if (voter.age <= 36 && voter.age <=55){
            final.numOldVotesPeople++
            if(voter.voted){
                final.numOldsPeople++
            }
        }
        return final
}, {numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0 
  } ) 
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/