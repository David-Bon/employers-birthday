import {EMPLOYEES_ON_LOAD, FILTER_EMPLOYEES} from "./Actions";

let initialState = {
    upperCaseAlp : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    filteredEmployers: [],
    employees: []
}
//
// const sortEmployers = (arr, allLetterArr) => {
//     const letters = findNotEmptyCharacters(arr);
//
//     allLetterArr.map((lt) => {
//         const firstCharts = lt;
//         if (!letters.includes(firstCharts)) {
//             let empObj = { [firstCharts]: "---" };
//             filteredEmployers.push(empObj);
//         } else {
//             let employeersGroup = [];
//             arr.map((item) => {
//                 if (item.lastName[0] === firstCharts) {
//                     employeersGroup.push(item);
//                 }
//             });
//             let empObj = { [firstCharts]: employeersGroup };
//             filteredEmployers.push(empObj);
//         }
//     });
//
//     console.log(filteredEmployers);
// };
//
// const findNotEmptyCharacters = (arr) => {
//     const characters = [];
//     arr.map((item) => {
//         let char = item.lastName[0];
//         if (!characters.includes(char)) {
//             characters.push(char);
//         }
//     });
//
//     return characters;
// };
//
// sortEmployers(employers, upperCaseAlp);



export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEES_ON_LOAD:
            return {
                ...state, employees: action.payload
            }
        case FILTER_EMPLOYEES:

        default:
            return state
    }
}
