const eventQueue = [];
const eventListeners = {};


const addEventListener = (type, event) => {
    if (!eventListners[type]) {
        eventListeners[type] = [eventListeners];
    } else {
        eventListeners[type].push(eventListeners);
    }
}

class Looper {

    constructor() {
        setInterval(() => {
            // check if there are any events in the event queue and see if there are any listeners 
            this.processEvent();
        }, 1000);
    }
    processEvent() {
        if (eventQueue.length > 0) {
            const event = eventQueue.shift();
            if (eventListeners[event]) {
                for (const eventListener of eventListners[event]) {
                    eventListener();
                }
            }
        }
    } 
}

const performEvent = (event) => {
    eventQueue.push(event);
}

new Looper();