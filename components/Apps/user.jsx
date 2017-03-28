/*eslint-env node */
const React = require("react");
const fire= require ("../../fire");
const User = React.createClass({
	getInitialState:function(){
		return {};
	},
	fetchData:function(){
		const fetchData = fire.fetchData(
			(cb)=>{
				var user = fire.firebase.ref('users');
				user.on('value',function(d){
					return cb(d.val());
				});
			}
		);
		fetchData((data)=>{
			this.setState({data:data})
		});
	},
	componentDidMount:function(){
		this.fetchData();
	},
	render:function(){
		return <div className="container">
		{(()=>{
			console.log(this.state.data)
			const data = this.state.data;
			return (data)? <div>
		<h2 className="title"> User data </h2>	
		<table className="table">
		<tbody>
			<tr>
				<th>#</th>
				<th>Email</th>
				<th>Profile Picture Location</th>
				<th>Username</th>
			</tr>
			{data.map((k,v)=>{
				return <tr key={v}> 
				<td>{v+1}</td>
				<td>{k.email} </td>
				<td>{k.profile_picture}</td>
				<td>{k.username}</td>
			</tr>
			})}
			</tbody>
		</table>
		</div>
		:
		null;
		})()}
		
		<hr/>
		<h2 className="title">Add User Data</h2>
		{(()=>{
			return (this.state.notification)? <div className="notification">
			<div className="notification is-info">
				<button className="delete" onClick={()=>{this.setState({notification:null})}}></button>
				{this.state.notification}
			</div>
		</div>:null 
		})()}		
		<div className="columns">
			<div className="column is-one-quarter">
				<form onSubmit={this.submit}>
					<div className="field">
						<label className="label">Email</label>
						<p className="control">
							<input className="input" type="text" placeholder="email" onChange={(e)=>{this.setState({email:e.target.value})}} value={this.state.email||""}/>
						</p>
					</div>
					<div className="field">
						<label className="label">Profile</label>
						<p className="control">
					<input type="text" className="input" placeholder="profile" onChange={(e)=>{this.setState({profile_picture:e.target.value})}} value={this.state.profile_picture||""}/>
						</p>
					</div>
					<div className="field">
						<label className="label">User name</label>
						<p className="control">
		<input type="text" className="input" placeholder="username" onChange={(e)=>{this.setState({username:e.target.value})}} value={this.state.username||""}/>
						</p>
					</div>
					<a className="button is-primary is-loading" type="submit" onClick={this.submit}>Submit</a>
				</form>			
			</div>
		</div>
		
		</div>
	},
	submit:function(e){
		e.preventDefault();
		const data = this.state;
		if (!data.email || !data.profile_picture || !data.username){
			alert("You missed something"); return;
		}
		console.log("calling write")
        fire.writeUserData(this.state.data?this.state.data.length:1,data.username,data.email,data.profile_picture,()=>{
			console.log("callback event")
			this.setState({email:null,profile_picture:null,username:null,notification:'Data addedSuccesffully'});this.fetchData});

	},
});
module.exports = User; 
