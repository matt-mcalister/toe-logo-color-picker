import React from "react"
import SavedItem from "./SavedItem"

const SavedList = ({ saved, selectSaved }) => {

		return (<div>{saved.map(i => <SavedItem key={i.id} item={i} selectSaved={selectSaved}/>)}</div>)
}

export default SavedList
