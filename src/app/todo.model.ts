export interface ITodo {
    id: number; 
    title: string;
    deadline?: string;
    important?: boolean;
    completed?: boolean;
}

// export const TODO: ITodo[] = [
//     { id: 1, title: 'Hit the gym', deadline: '01.04.2023', done: false },
//     { id: 2, title: 'Pay bills', deadline: '29.03.2023', done: true, important: true },
//     { id: 3, title: 'Meet John', done: false },
//     { id: 4, title: 'Buy eggs', deadline: '29.03.2023', important: true, done: false },
//     { id: 5, title: 'Read a book', done: true },
//     { id: 6, title: 'Organize office', done: false },
//     { id: 7, title: 'Eat dinner', done: false },
//     { id: 8, title: 'Buy apples', deadline: '05.03.2023', important: true, done: false },
//     { id: 9, title: 'Meet George', important: true, done: false },
//     { id: 10, title: 'Feed the cat', done: false },
//     { id: 11, title: 'Write a letter', done: true },
//     { id: 12, title: 'Run 1 km', deadline: '15.01.2022', done: false }
// ];
