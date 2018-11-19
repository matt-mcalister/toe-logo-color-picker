import React from "react"

const Logo = ({ background, foreground }) => {
		return (
      <div className="logo outer" style={{
        backgroundColor: background
      }}>
        <div className="logo inner" style={{
          backgroundColor: foreground
        }}>
        </div>
      </div>
    )
}

export default Logo
