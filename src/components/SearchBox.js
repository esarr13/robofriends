function SearchBox({ searchfield, searchChange }) {
    return (
        <div style={{ paddingBottom: '10px' }}>
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search Robots..."
                onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;