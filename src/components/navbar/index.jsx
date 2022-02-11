const Navbar = ({ onChange, search }) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container">
                    <a href="/" className="navbar-brand">News App</a>
                    <form className="d-flex live-search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search news..."
                            aria-label="Search"
                            id="search"
                            value={search}
                            onChange={onChange}
                        />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar