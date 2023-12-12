class State {
    constructor(value) {
        this.value = value;
        this.subscribers = [];
    }
    subscribe(observer) {
        this.subscribers.push(observer);
    }

    setValue(newValue) {
        this.value = newValue;
        // notify our subscribers
        this.notify();
    }

    getValue() {
        return this.value;
    }

    notify() {
        this.subscribers.forEach(sub => sub(this.value));
    }
}


class ListState {
    constructor(value) {
        this.value = value;
        this.subscribers = [];
        this.onItemAddedCallbacks = [];
        this.onItemRemovedCallbacks = [];
        this.onItemChangedCallbacks = [];

    }
    subscribe(observer) {
        this.subscribers.push(observer);
    }

    push(item) {
        this.value.push(item);
        this.notify();
        this.notifyItemAdded(item, this.value.length - 1);
    }

    setValue(newValue) {
        this.value = newValue;
        // notify our subscribers
        this.notify();
    }


    getValue() {
        return this.value;
    }

    notify() {
        this.subscribers.forEach(sub => sub(this.value));
    }

    notifyItemAdded(newItem, index) {
        this.onItemAddedCallbacks.forEach(sub => sub(item, index))
    }
}