import { useState } from "react"

import TextInput from "./TextInput"

type NewGameFormProps = {
  addGame: (title: string, cover:string) => void
}

const NewGameForm = ({ addGame } : NewGameFormProps ) => {

  const [title, setTitle] = useState<string>('')
  const [cover, setCover] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addGame(title, cover)
    setTitle('')
    setCover('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput  id="title" label="Title:" value={title} setValue={setTitle}/>
      <TextInput id="cover" label="Cover:" value={cover} setValue={setCover}/>
      <button
        className="btn btn-dark"
        type="submit">
        Add to library
      </button>
    </form>
  )
}

export default NewGameForm