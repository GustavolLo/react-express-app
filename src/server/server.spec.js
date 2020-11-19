import { addNewTask, updateTask } from './Server';

(async function myFunc() {
    await addNewTask({
        name: "My task",
        id: "123456" 
    });

    await updateTask({
        id: "123456",
        name: "My task updated!"
    })

}());

