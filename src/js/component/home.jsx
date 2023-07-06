import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
 

//create your first component
const Home = () => {
	const [color, setColor] = useState("secondary")
	return (
		<div className="text-center" style={{marginLeft: "800px", marginTop: "100px"}}>
			<div onClick={() => setColor("danger")} 
			className={"rounded-circle bg-"  + (color === "danger"?"danger":"secondary")} 
			style={{width: "150px", height: "150px"}}></div>

			<div onClick={() => setColor("warning")} 
			className={"rounded-circle bg-" + (color === "warning"?"warning":"secondary")}
			style={{width: "150px", height: "150px"}}></div>

			<div onClick={() => setColor("success")} 
			className={"rounded-circle bg-" + (color === "success"?"success":"secondary")}
			style={{width: "150px", height: "150px"}}></div>
		</div>
	);
};

export default Home;
