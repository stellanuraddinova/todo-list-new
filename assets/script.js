const taskAdd = document.querySelector('#taskAdd');
const btnAdd = document.querySelector('#btnAdd');
const list = document.querySelector('#list');

const tasks = [];

const taskList = (index) => {
    return `
        <li class="flex justify-between items-center border p-[8px] mb-[6px]">
            <div class="flex items-center gap-[5px]">
                <input class="size-[15px]" type="checkbox" id="checkbox-${index}" onchange="toggleTask(${index})">
                <span id="task-${index}" class="text-[12px]">${tasks[index]}</span>
            </div>
            <div class="flex items-center gap-x-[5px]">
                <button class="size-[20px] bg-blue-500 text-white items-center flex justify-center rounded-lg">
                    <i class="fa-solid fa-pen text-[10px]"></i>
                </button>
                <button onclick="deleteTask(${index})" class="size-[20px] bg-red-500 text-white items-center flex justify-center rounded-lg">
                    <i class="fa-solid fa-trash text-[10px]"></i>
                </button>
            </div>
        </li>
    `
}

const creatUI = () => {
    console.log(list);
    list.innerHTML = '';
    for (let index in tasks) {
        list.innerHTML += taskList(index);
    } 
}
creatUI();

btnAdd.addEventListener('click', () =>{
    tasks.push(taskAdd.value);
    taskAdd.value = ''
    creatUI();
})
function deleteTask (index){
    tasks.splice(index, 1)
    creatUI();
}
const toggleTask = (index) => {
    const checkbox = document.getElementById(`checkbox-${index}`);
    const taskText = document.getElementById(`task-${index}`);
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
};

