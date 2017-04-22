const React = require ('react')
const renderer = require('react-test-renderer')
const App = require ('../Apps/app')

test('This contains List of datas including an input box',()=>{
    const component = renderer.create(
        <div>
            <div key="1">1. Sijan > This is awesome</div>
            <div key="2">1. Beer > This is awesome beer</div>
            <form>
               <input type="text" placeholder="name" name="name"/> 
               <input type="text" placeholder="quot" name="quote"/> 
               <button type="submit">Submit</button>
            </form>
        </div>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.submit();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
