import React, { useEffect, useState } from "react";
const ShowItem = (props) => {
	const dataList = props.dataList;

	return (
		<div className="container">
			<div className="row">
				{dataList.map((item) => {
					return (
						<div className="card col p-1 m-1" style={{ width: "15rem" }} key={item.id}>
							<div className="card-header">
								<h3>{item.name}</h3>
							</div>
							<div className="card-body row">
								<div className="col">
									<h5>{item.email}</h5>
								</div>
								<div className="col">
									<h5>Birthdate: {item.birthdate}</h5>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ShowItem;
