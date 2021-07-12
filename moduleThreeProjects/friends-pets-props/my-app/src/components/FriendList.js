import React from "react"
import Friend from "./Friend"
import Pet from "./Pet"
import friendsData from "./friendsData"

function FriendList (){
    const friendsNPets = friendsData.map(function(friend){
        //console.log(friend)
        return (
            <div class="friendContainer">
            <Friend name={friend.name} age={friend.age}  />
            {friend.pets.map(function(pet){
                return(
               <Pet name={pet.name} breed={pet.breed} />
                )
                

            })}
            </div>
        )
    })

return (
    <div>
    {friendsNPets}
    </div>
)
}

export default FriendList 