import React, {useState} from 'react'
import p from './Message.module.css'

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message(props: MessagePropsType) {

    const [text, setText] = useState('');
    // const  [message, setMessage] = useState('Message #1');

    const [messages, setMessage] = useState<MessagePropsType[]>([])

    console.log(messages)

    let today= new Date().toString()

    const onClickHandler = () => {
        const newMessage: MessagePropsType = {
            avatar: props.avatar,
            name: 'Albina',
            message: text,
            time: (today.substring(0,25 ))
        }
        setMessage([...messages, newMessage])
        setText('')
    }








    return (
        <div className={p.main}>
            <div className={p.button}>
            <textarea value={text} className={p.textarea} onChange={(event) => {
                setText(event.target.value)
            }}>  </textarea>
                <div>
                <button className={p.btn} onClick={onClickHandler} type='submit'>Send message
                </button>
                </div>
                <div/>


                {messages.map((item) => {
                    return <div className={p.chat__message}>
                        <div className={p.message}>
                            <div className={p.name}> {item.name} </div>
                            <img className={p.img} src={item.avatar} width='100px' height='100'/>
                            <div className={p.time}> {item.time} </div>
                            <div className={p.message_item} >{item.message}</div>
                        </div>
                        {/*<div className={p.message}> {message ? text :props.message } </div>*/}

                    </div>
                })}

            </div>
        </div>
    )
}

export default Message
