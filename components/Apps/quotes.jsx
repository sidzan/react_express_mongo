/*eslint-env node */
const React = require("react");
const fire= require ("../../fire");
const Quote = React.createClass({
	getInitialState:function(){
		return {model:'quotes'};
	},
	fetchData:function(){
		const fetchData = fire.fetchData(
			(cb)=>{
				var quote = fire.firebase.ref('quotes');
				quote.once('value',function(d){
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
		<h2 className="title"> Quotes </h2>	
		<table className="table">
		<tbody>
			<tr>
				<th>#</th>
				<th>User</th>
				<th>Quote</th>
			</tr>
			{data.map((k,v)=>{
				return <tr key={v}> 
				<td>{v}</td>
				<td>{k.user} </td>
				<td>{k.quote}</td>
			</tr>
			})}
			</tbody>
		</table>
		</div>
		:
		null;
		})()}
		
		<hr/>
		<h2 className="title">Add Quote</h2>
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
						<label className="label"> 	</label>
						<p className="control">
							<input className="input" type="text" placeholder="user" onChange={(e)=>{this.setState({user:e.target.value})}} value={this.state.user||""}/>
						</p>
					</div>
					<div className="field">
						<label className="label">Quote</label>
						<p className="control">
					<input type="text" className="input" placeholder="quote" onChange={(e)=>{this.setState({quote:e.target.value})}} value={this.state.quote||""}/>
						</p>
					</div>
					<a className="button is-primary" type="submit" onClick={this.submit}>Submit</a>
				</form>			
			</div>
		</div>
		
		</div>
	},
	submit:function(e){
		e.preventDefault();
		const data = this.state;
		if (!data.user || !data.quote){
			alert("You missed something"); return;
		}
        fire.write('quotes',{user:data.user,quote:data.quote},()=>{
			this.setState({user:null,quote:null,notification:'Data addedSuccesffully'});this.fetchData});
	},
});
module.exports = Quote; 
