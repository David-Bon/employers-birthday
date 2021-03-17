import * as axios from 'axios'
export const EMPLOYEES_ON_LOAD = "EMPLOYEES_ON_LOAD";
export const FILTER_EMPLOYEES = "FILTER_EMPLOYEES"

export const EmployeesOnLoad = (data) => ({
    type: EMPLOYEES_ON_LOAD,
    payload: data
})


export const getEmployeesData = () => (dispatch) => {
    axios.get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
        .then(res => {
            dispatch(EmployeesOnLoad(res.data))
        })
}

// export const SortEmployers = ()