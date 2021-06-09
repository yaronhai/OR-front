import React from 'react';
import './homepage.styles.scss';
import PersonCardList from '../../components/person-card-list/person-card-list.component';
import Search from '../../components/search/search.component';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Workers: [],
            searchField:''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({Workers: users}))
      }

    handleChange = e => {
        this.setState({searchField: e.target.value});
    }

    render(props){
        const { Workers, searchField} = this.state;
        const filteredWorkers= Workers.filter(worker => 
            worker.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

        return(
            <div className='test'>
                {/* 2 ways of navigation to another page: Link and button */}
                <Link to='/Rooms'> ROOMS </Link>
                {/* <Link to={`${this.props.match.url}/Rooms`}> ROOMS </Link> */}
                <button onClick={() => this.props.history.push('/Rooms')}>ROOMS</button>

                <h1>TEST hompage</h1>
                <Search placeholder="search worker" handleChange={this.handleChange}/>
                <PersonCardList persons={filteredWorkers}/>
            </div>
        );  
    }
} 

export default HomePage;