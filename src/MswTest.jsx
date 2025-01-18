import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import { useEffect, useState } from "react";

export const MswTest = () => {

    const [users, setUsers] = useState([]);
	const [content, setContent] = useState("");

	useEffect(() => {
		fetch("/api/users")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUsers(data);
			});
	}, []);

	const onSendClick = (e) => {
		e.preventDefault();
		fetch("/api/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "token123",
			},
			body: JSON.stringify({ content }),
		});
	};

  return (
    <CCard style={{ width: '18rem' }}>
    
      <CCardBody>
        <CCardTitle>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </CCardTitle>
        <form className="form-inline">
            <CCardText>            
                <input id="inputfld" className="form-control" value={content}	onChange={(e) => {setContent(e.target.value);	}}/>
            </CCardText>
            <CButton color="primary" href="#" onClick={onSendClick}>
                Send
            </CButton>
        </form> 
      </CCardBody>
    </CCard>
  )
}
