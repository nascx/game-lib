import React, { SetStateAction, ChangeEvent } from "react"

type TextInputProps = {
    id: string
    label: string
    value: string,
    setValue: React.Dispatch<SetStateAction<string>>
}

const TextInput = ( { id, label, value, setValue } : TextInputProps ) => {
    return (
        <div className="inputs-container">
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                name={id}
                id={id}
                value={value}
                className="form-control"
                onChange={(ev: ChangeEvent<HTMLInputElement>) => setValue(ev.target.value)}
            />
        </div>
    )
}

export default TextInput