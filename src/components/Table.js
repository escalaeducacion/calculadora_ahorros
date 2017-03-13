import React from 'react';

export default ({headings, rows, totals, className, style})=> (
	<table className={className} style={style}>
		<thead>
			<tr>
				{headings.map((d,i)=><th key={i}>{d}</th>)}
			</tr>
		</thead>
		<tbody>
			{rows.map((row,index)=>(
					<tr key={index}>
						{row.map((d,i)=><td key={i}>{d.toLocaleString()}</td>)}
					</tr>)
				)
			}
		</tbody>
		<tfoot>
			<tr>
				{totals.map((d,i)=><td key={i}>{d.toLocaleString()}</td>)}
			</tr>
		</tfoot>
	</table>
);
