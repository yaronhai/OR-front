import React from 'react';
import './homepage.styles.scss';
import PersonCardList from '../../components/person-card-list/person-card-list.component';
import Search from '../../components/search/search.component';

class HomePage extends React.Component{
    constructor(){
        super();

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

    render(){
        const { Workers, searchField} = this.state;
        const filteredWorkers= Workers.filter(worker => 
            worker.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

        return(
            <div className='test'>
                <h1>TEST hompage</h1>
                <Search placeholder="search worker" handleChange={this.handleChange}/>
                <PersonCardList persons={filteredWorkers}/>
            </div>
        );  
    }
} 

export default HomePage;