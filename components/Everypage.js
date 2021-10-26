import Meta from './Meta';
import Nav from './Nav';

const Everypage = ({children}) => {

    let a = -3; 

    return (
        <div>
            <Meta />
            <h1 style={a > 0 ? {color: 'red'} : {color: 'green'}}>Title on every page</h1>
            <p>text on every page</p>
            <hr />
            <Nav />
            {children}
        </div>
    )
}

export default Everypage
