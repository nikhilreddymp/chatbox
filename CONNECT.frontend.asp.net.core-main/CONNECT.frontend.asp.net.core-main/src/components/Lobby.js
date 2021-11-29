import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import Card from "./Card";

const Lobby = ({ joinRoom }) => {
    const [user, setUser] = useState();
    const [room, setRoom] = useState();

    return <Form className='lobby'
        onSubmit={e => {
            
            e.preventDefault();
            joinRoom(user, room);
        }}>
        <Form.Group>
            <Form.Control placeholder='name' onChange={e => setUser(e.target.value)} />
            <Card title="React Programming" 
                text= 'Come join us to discuss react programming' 
                image = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' 
                joinRoom = {joinRoom}
                room='react' 
                user={user}/>
            <Card title="Python Programming" 
                text= 'Come join us to discuss python programming' 
                image = 'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
                joinRoom = {joinRoom}
                room='python' 
                user={user}/>
            <Card title="Java Programming" 
                text= 'Come join us to discuss java programming' 
                image = 'https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' 
                joinRoom = {joinRoom}
                room='java'     
                user={user}/>
            <Card title="C# Programming" 
                text= 'Come join us to discuss c# programming' 
                image = 'https://images.unsplash.com/photo-1523837084841-974e58314272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80' 
                joinRoom = {joinRoom}
                room='c#' 
                user={user}/>
            <Card title="Node Programming" 
                text= 'Come join us to discuss nodejs programming' 
                image = 'https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                joinRoom = {joinRoom}
                room='node js' 
                user={user}/>
        </Form.Group>
        
    </Form>

}

export default Lobby