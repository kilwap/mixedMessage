// this project will generate random commentary from football action

// function to help cheose random message from list
const getRand = limit => {
    return Math.floor(Math.random() * limit);
}

//storing types of messages
const messageData = {
    player:['Drogba', 'Lampard', 'Hazard', 'Mata', 'Torres'],
    actionType:['attacking on the right', 'going down from the right', 'dribling in the middle'],
    actionResult:['what a goal!', 'hit the post', 'what a save from the keeper', 'oh no last second tackle stoped him from scoring']
}

// store messsage in array
let commentary = [];

//iterate over the object
for(part in messageData){
    let sentenceId = getRand(messageData[part].length)

    switch (part) {
        case 'player':
            commentary.push(`Chelsea got the ball and ${messageData[part][sentenceId]} is`);
            break;
        case 'actionType':
            commentary.push(`${messageData[part][sentenceId]} has great opportunities to shoot!`);
            break;
        case 'actionResult':
            commentary.push(`${messageData[part][sentenceId]}, great attack from Chelsea`);
            break;
        default:
            commentary.push('sorry for problems we will be back with broadcast soon')
            break;
    }
}

function formatMessage(commentary){
    console.log(commentary.join(' '))
};
formatMessage(commentary);