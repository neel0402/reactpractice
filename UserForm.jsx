import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const intialData = {
    name: { firstname: "", lastname: "" },
    email: "",
    uHobby: { hobby: [] },
    city: "",
    gender: "",
    password: ""
}

export default function UserForm() {
    const [newUser, setNewUser] = useState(intialData)
    const [userName, setUserName] = useState({ firstname: "", lastname: "" })
    let [data, setData] = useState([])

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("user")) || []
        setData(userData)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('==>', newUser, userName)
        let maindata = { ...newUser, uHobby: userName }
        setData(...data, maindata)
        localStorage.setItem("user", JSON.stringify([...data, maindata]))
        setNewUser(intialData)
        setUserName({ firstname: "", lastname: "" })
    }

    const checkHandler = (name, ele) => {
        let selectedData = ele?.target?.checked
        if (selectedData) {
            let selected = { ...newUser, hobby: [...newUser?.uHobby?.hobby, name] }
            setNewUser(selected)
        } else {
            let filterdData = newUser?.uHobby?.filter((e) => e !== name)
            setNewUser({ ...newUser, hobby: filterdData })
        }
    };

    return (
        <>
            <div className='w-50 m-auto p-5'>
                <Form onSubmit={handleSubmit}
                    className='w-75 p-4' style={{
                        border: "2px solid black"
                    }}>
                    <h1>Register Form</h1>
                    <br />
                    <FormGroup>
                        <h5>
                            First Name
                        </h5>
                        <Input
                            id="firstname"
                            name="text"
                            value={userName?.firstname}
                            placeholder="Enter First Name"
                            type="text"
                            onChange={(e) => setUserName({ ...userName, firstname: e?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <h5>
                            Last Name
                        </h5>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Enter Last Name"
                            type="text"
                            value={userName?.lastname}
                            onChange={(e) => setUserName({ ...userName, lastname: e?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <h5>
                            Email
                        </h5>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            value={newUser?.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup className='d-flex gap-2'>
                        <h5>
                            Hobby :
                        </h5>
                        <FormGroup>
                            <Input
                                type="checkbox"
                                onChange={(e) => checkHandler("Cricket", e)}
                                checked={newUser?.uHobby?.hobby?.includes("Cricket")}

                            />
                            <Label >
                                Cricket
                            </Label>
                        </FormGroup>
                        <FormGroup cheak inline>
                            <Input
                                type="checkbox"
                                onChange={(e) => checkHandler("Horse-riding", e)}
                                checked={newUser?.uHobby?.hobby?.includes("Horse-riding")}
                            />
                            <Label check>
                                Horse-riding
                            </Label>

                        </FormGroup>
                        <FormGroup className='d-flex gap-2' cheak inline>
                            <Input
                                type="checkbox"
                                onChange={(e) => checkHandler("Searching", e)}
                                checked={newUser?.uHobby?.hobby?.includes("Searching")}
                            />
                            <Label check>
                                Searching
                            </Label>

                        </FormGroup>
                    </FormGroup>

                    <FormGroup>
                        <h5 >
                            City
                        </h5>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            placeholder='Choose City'
                            onChange={(e) => setNewUser({ ...newUser, city: e?.target?.value })}
                        >
                            <option>
                                Surat
                            </option>
                            <option>
                                Vadodara
                            </option>
                            <option>
                                Gandhinagar
                            </option>
                            <option>
                                Anand
                            </option>
                            <option>
                                Nadiyad
                            </option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <h5>
                            Gender
                        </h5>
                        <FormGroup check>
                            <Input
                                name="radio1"
                                type="radio"
                                value="male"
                                checked={newUser.gender === "male"}
                                onChange={(e) => setNewUser({ ...newUser, gender: e?.target?.value })}
                            />
                            {' '}
                            <Label check>
                                Male
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <FormGroup check>
                            <Input
                                name="radio1"
                                type="radio"
                                value="female"
                                checked={newUser.gender === "female"}
                                onChange={(e) => setNewUser({ ...newUser, gender: e?.target?.value })}
                            />
                            <Label check>
                                Female
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <h5>
                            Password
                        </h5>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="password"
                            value={newUser?.password}
                            onChange={(e) => setNewUser({ ...newUser, password: e?.target?.value })}
                        />
                    </FormGroup>
                    <Button>
                        Submit
                    </Button>
                    <br />
                </Form>
            </div>

        </>
    )
}
