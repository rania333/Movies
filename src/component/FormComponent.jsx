import React, {useState} from 'react';
//(\\s[a-zA-z]{3,}){1,}
//(?=rania) => (?=.*?[a-z])
export default function FormComponent() {
    const nameTest = new RegExp("^[a-zA-z]{1,}$");
    const emailTest = new RegExp("^[a-zA-z]{5,}@[a-zA-z]{3,}\.com$");
    const userNameTest = new RegExp("^[a-zA-z]{3,}$");
    const passTest = 
    new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    const [user, setUser] = useState({
        name: "",
        email: "",
        userName: "",
        pass:"",
        pass2: ""
    });
    const [err, setErr] = useState({
        nameErr:null,
        emailErr: null,
        userNameErr: null,
        passErr: null,
        pass2Err: null
    })
    const handler = (e) => {
        //values
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
        //errors
        if(e.target.id == "name") {
            setErr({
                ...err,
                nameErr: (!nameTest.test(e.target.value)) ? 'Name is required': null
            });
        } else if(e.target.id == "email") {
            setErr({
                ...err,
                emailErr: (!emailTest.test(e.target.value)) ? 'Email Not Valid': null
            });
        } else if(e.target.id == "userName") {
            setErr({
                ...err,
                userNameErr: (!userNameTest.test(e.target.value)) ? 
                "userName is required with no space": null
            });
        } else if(e.target.id == "pass") {
            setErr({
                ...err,
                passErr: (!passTest.test(e.target.value)) ?
                "Password required with lenght 8 and at least one upper case, one Lower case, one Digit, one special character": null
            });
        } else if(e.target.id == "pass2") {
            setErr({
                ...err,
                pass2Err: (e.target.value !== user.pass) ? 'two password are different': null
            });
        }
    }
    return (
        <div className="container">
            <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className=
                    {`form-control ${err.nameErr ?`border border-danger`:``}`} id="name"
                    value={user.name} onChange={(e) => handler(e)}/>
                    <small className='text-danger'>{err.nameErr}</small>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text"
                    className=
                    {`form-control ${err.emailErr ?`border border-danger`:``}`} 
                    id="email"
                    value={user.email} onChange={(e) => handler(e)}/>
                    <small className='text-danger'>{err.emailErr}</small>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="userName" className="col-sm-2 col-form-label">UserName</label>
                <div className="col-sm-10">
                    <input type="text"className={`form-control ${err.userNameErr ?`border border-danger`:``}`}
                    id="userName"
                    value={user.userName} onChange={(e) => handler(e)}/>
                    <small className='text-danger'>{err.userNameErr}</small>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="pass" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className={`form-control ${err.passErr ?`border border-danger`:``}`}
                    id="pass"
                    value={user.pass} onChange={(e) => handler(e)}/>
                    <small className='text-danger'>{err.passErr}</small>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="pass2" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="password" className={`form-control ${err.pass2Err ?`border border-danger`:``}`} 
                    id="pass2"
                    value={user.pass2} onChange={(e) => handler(e)}/>
                    <small className='text-danger'>{err.pass2Err}</small>
                </div>
            </div>
            <div className="mb-3 row">
                <button type="submit" className="btn btn-primary mb-3">
                    Submit</button>
            </div>
        </div>
    )
}
