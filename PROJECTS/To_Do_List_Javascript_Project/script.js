const todos = ['Collect Chicken Eggs', 'Clean Litter Box '];
let command = prompt("What would you like to do?");
while (command !== 'quit' && command !== 'q') {
    switch (command) {
        case 'new':
            let list = prompt("What would you want to add?");
            console.log(`${list} is added.`)
            todos.push(list);
            break;
        case 'list':
            console.log("**************");
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);
            }
            console.log("**************");
            break;
        case 'delete':
            let index = parseInt(prompt("Select the number to delete.."));
            if (Number.isNaN(index)) {
                console.log("Index not Found");
            } else {
                console.log(`${todos[index]} is deleted on the list`)
                todos.splice(index, 1);
            }
    }
    command = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP")