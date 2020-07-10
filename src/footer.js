import React from "react"
import "./footer.css";
 
const Footer = () =>  {
  return (
<div className="main-footer">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                {/* column1 */}
                <div><h4 style={{marginLeft: "100px"}}><a style={{ color: '#FFF' }} href="https://github.com/philb53">Github</a></h4>
                </div>
                
            {/* column2 */}
                <div>
                    <h4 style={{marginLeft: "100px"}}> CONTACT &nbsp;&nbsp;|&nbsp; <a style={{ color: '#FFF' }} href="https://www.linkedin.com/in/philip-baker-32915464/">LinkedIn</a>&nbsp;|&nbsp;<a style={{ color: '#FFF' }} href="https://twitter.com/Philip_Baker1">@Philip_Baker1</a></h4>
                     
                </div>
            {/* /* column3 */}
            <div style={{marginLeft: "30px", marginTop: "20px"}}>
            &copy;{new Date().getFullYear()} | PHILIP BAKER | Available for employment opportunities
            </div>
    </div>

     
</div>
  )
}

export default Footer;