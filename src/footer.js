import React from "react"
import "./footer.css";
 
const Footer = () =>  {
  return (
<div className="main-footer">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                {/* column1 */}
                <div><h4> COMPANY NAME </h4>
                </div>
                
            {/* column2 */}
                <div>
                    <h4> STUFF </h4>
                    <ul>
                        <li>DANK MEMES</li>
                        <li>INCORPORATED</li>
                        <li>GIGGITY</li>
                    </ul>
                </div>
            {/* /* column3 */}
            <div>
            &copy;{new Date().getFullYear()} THICC MEMES INC | ALL RIGHTS RESERVED | TERMS OF SERVICE | Privacy
            </div>
    </div>

     
</div>
  )
}

export default Footer;