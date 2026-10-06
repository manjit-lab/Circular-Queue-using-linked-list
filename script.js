class Node {

    constructor(data) {

        this.data = data;

        this.next = null;
    }

}

let front = null;

let rear = null;

function insert() {

    let input = document.getElementById("valueInput");

    let value = input.value.trim();

    if (value === "") {

        showMessage("Please enter a value.");

        return;
    }


    value = Number(value);

    let newNode = new Node(value);

    if (front === null) {

        front = newNode;

        rear = newNode;

        rear.next = front;

        showMessage(value + " inserted into the queue.");

    }

    else {

        newNode.next = front;

        rear.next = newNode;

        rear = newNode;

        showMessage(value + " inserted into the queue.");

    }

    input.value = "";

    display();

}

function deleteNode() {

    if (front === null) {

        showMessage("Queue Underflow! Queue is empty.");

        return;
    }


    let deletedValue = front.data;

    if (front === rear) {

        front = null;

        rear = null;

    }

    else {

        front = front.next;

        rear.next = front;

    }


    showMessage(deletedValue + " deleted from the queue.");

    display();

}

function search() {

    let input = document.getElementById("valueInput");

    let value = input.value.trim();


    if (value === "") {

        showMessage("Please enter a value to search.");

        return;
    }


    value = Number(value);

    if (front === null) {

        showMessage("Queue is empty.");

        return;
    }


    let current = front;

    let position = 1;

    do {

        if (current.data === value) {

            showMessage(
                value + " found at position " + position + "."
            );

            return;
        }


        current = current.next;

        position++;


    } while (current !== front);


    showMessage(value + " not found in the queue.");

}

function display() {

    let queueContainer =
        document.getElementById("queueContainer");

    let frontValue =
        document.getElementById("frontValue");

    let rearValue =
        document.getElementById("rearValue")

    if (front === null) {

        queueContainer.innerHTML =
            '<p class="empty">Queue is empty</p>';

        frontValue.textContent = "-";

        rearValue.textContent = "-";

        return;
    }

    frontValue.textContent = front.data;

    rearValue.textContent = rear.data;

    let current = front;

    let html = "";

    let firstNode = true;

    do {

        html += '<div class="node">';

        html += '<div class="box">';
        html += current.data;
        html += '</div>';


        if (current.next !== front) {

            html += '<div class="arrow">→</div>';

        }


        html += '</div>';


        current = current.next;

        firstNode = false;


    } while (current !== front);

    html += '<div class="circular">↻ Front</div>';


    queueContainer.innerHTML = html;

}

function clearQueue() {

    front = null;

    rear = null;


    display();


    showMessage("Queue cleared.");

}

function showMessage(message) {

    document.getElementById("message").textContent =
        message;

}
