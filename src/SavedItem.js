import React from "react"

const SavedItem = ({ item, selectSaved }) => {
		return (<p
      onClick={() => selectSaved(item.background, item.foreground)}
      style={{
      border: "1px solid black",
      backgroundColor: item.background,
      color: item.foreground,
      padding: "5px",
      margin: "2px"
    }}>{item.note}</p>)
}

export default SavedItem
