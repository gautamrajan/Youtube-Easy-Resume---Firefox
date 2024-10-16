import { h, Component } from 'preact';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.inputRef = null;
    }

    componentDidMount() {
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        this.props.onSearchChange(value);
    }

    render() {
        const { onBack, value } = this.props;
        return (
            <div className="search-bar-container">
                <div className='button-wrapper search-back'>
                    <button type="button" className="back-button top-bar-button" onClick={onBack}>
                        <i class="fas fa-arrow-left"></i>
                    </button>

                </div>
                <input
                    ref={(input) => { this.inputRef = input; }}
                    type="text"
                    placeholder="Search videos..."
                    value={value}
                    onInput={this.handleInputChange}
                />
                <style jsx>{`
                    .search-bar-container {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        padding-top: 4px;
                        padding-bottom:2px;

                    }
                
                    input {
                        flex-grow: 1;
                        padding: 4px 12px;
                        font-size: 1em;
                        border: none;
                        border-radius: 15px;
                        background-color: #3a3a3a;
                        color: #ffffff;
                        margin-bottom: 3px;
                    }
                    input::placeholder {
                        color: #999999;
                    }
                    input:focus {
                        outline: none;
                    }
                    
                `}</style>
            </div>
        );
    }
}

export default SearchBar;