import React from 'react'
import './../../../styles/Header.css';
const Link=({color,text})=>{
    return(
        <li style={{color}}><i>{text}</i></li>
    )
}
const items=[{
color:"#ad3",
text:"latest"
},{
color: "#f43",
text: "hot"
},
{
color: "#b760f0",
text: "TopList"
},
{
color: "#e73",
text:"Random"
},
{
color: "#d55",
text: "Upload"
},
{
color: "#fb3",
text: "Forums"
},
{
color: "#49f",
text: "More"
}
]
function NavLinks() {
return (
    <div className='top-menu'>
            <ul className='top-menu-primary'>
            {   items.map((item,index)=>{
                return <Link key={index} color={item.color} text={item.text}/>
            })}
            </ul>
        </div>
)
}

export default NavLinks
