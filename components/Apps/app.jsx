/*eslint-env node */
const React = require("react");
const RPC = require ("../../RPC");
const App = React.createClass({
	getInitialState:function(){
		return {};
	},
	componentDidMount:function(){
		RPC.execute("list_quote",{},function(err,data){
			if (err){
				alert (err);
				return;
			}
			this.setState({data:data});
		}.bind(this));
	},
	render:function(){
		const data = this.state.data;
		if (!data) {
			return <div> Loading </div>;
		}
		return <div className="container">
			{data.map((d,i)=>{return <div key={d._id}>{i+1}. {d.name} > {d.quote}</div>;})}
			<form>
			<input type="text" placeholder="name" name="name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
			<input type="text" placeholder="quote" name="quote"  onChange={(e)=>{this.setState({quote:e.target.value})}}/>
			<button onClick={this.submit} type="submit">Submit</button>
			</form>
		</div>;
	},
	submit:function(e){
		e.preventDefault();
		console.log(this.state.name,this.state.quote);
		const name = this.state.name;
		const quote = this.state.quote;
		if (!name || !quote){
			alert("Data Missing");
			return;
		}
		const val = {
			name:name,
			quote:quote
		};
		RPC.execute("add_quote",val,function(err,data){
			if (err){
				alert (err);
				return;
			}
			console.log(data);
		}.bind(this));
	}
});
module.exports = App; 
