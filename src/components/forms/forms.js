import React,{Component} from 'react';
import Getting from '../../services/getRep';
import Modal from '../modal'
import './forms.css'
export default class Form extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            repos: [],
            isModalOpen: false,
            currentState: {},
          }
          this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        const req = new Getting();
        req.getRepos().then(repos => {
          this.setState({ repos });
        })
    }

    sortByField (field) {
        return (obj_1, obj_2) => obj_1[field] < obj_2[field] ? 1 : -1;
    }

    sortRes(){
        let ar = new Getting();
        ar.getRepos().then ( res => { 
          res.sort(sortByField('updated_at'));
          return res; 
        })
    }

    handleClick(data) {
        this.setState({ isModalOpen: true, currentState: data });
    }

    checkLang(lang_url) {
        const req = new Getting();
        req.getRepos().then(repos => {
            return repos;
          })
    }

    render () {
        const { repos, isModalOpen } = this.state; 
        return (
            <> 
                {repos.map(({ name, language , updated_at, ...rest }) => 
                            <div className = "form" onClick={() => handleClick(rest)}>
                                <ul>
                                    <li>
                                        <span>name</span>
                                        <span>{name}</span>
                                    </li>
                                    <li>
                                        <span>language</span>
                                        <span>{languages_url}</span>
                                    </li>
                                    <li>
                                        <span>last update</span>
                                        <span>{updated_at}</span>
                                    </li>
                                </ul> 
                            </div> 
                )} 
                {isModalOpen && <Modal data={currentState} />} 
                </> )
    }

}