import React from "react";
import { Riple } from 'react-loading-indicators'

const Loading = () => {
  return (
		<div id='load'>
			<div className='container'>
				<div className='load'>
					<Riple color='#b5bef3' size='medium' style={{fontSize:50,marginBottom:280,marginTop:100,display:'flex',justifyContent:"center",alignItems:"center"}} textColor='#dd3737' />
				</div>
			</div>
		</div>
	)
};

export default Loading;
