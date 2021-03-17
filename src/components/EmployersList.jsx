import React from "react";
import EmployerItem from "./EmployerItem";
import "./EmployersList.css"


const EmployersList = ({employees}) => {
    const upperCaseAlp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return (
        <div className="EmployersPage">
            <div className="AlpChild">
            {
                upperCaseAlp.map((i) => {
                    return (
                        <div className="Alphabet">
                                <h3>{i}</h3>
                                {
                                    employees.map(item => {
                                        if (i === item.lastName[0]) {
                                            return (
                                                <EmployerItem item={item}/>
                                            )
                                        }
                                    })
                                }
                        </div>
                    )
                })
            }
            </div>
            <div className="BirthdayList">
                Selected emp:
                {

                }
            </div>
        </div>

    )
}

export default EmployersList