import React, {Component} from "react";
import {connect} from "react-redux";
import EmployersList from "./EmployersList";
import {getEmployeesData} from "../redux/Actions";


class EmployersListContainer extends Component {

    componentDidMount() {
        this.props.getEmployeesData()
    }

    e = this.props.employees.map(item => {
        return (
         item
        )
    })

    render() {
        const {employees} = this.props
        console.log(this.props.employees)
        return (
            <EmployersList employees={employees} item={this.e}/>
        )
    }
}

const mapStateToProps = (state) => ({
    employees: state.Reducer.employees
});

const mapDispatchToProps = {
    getEmployeesData
};


export default connect(mapStateToProps, mapDispatchToProps)(EmployersListContainer)