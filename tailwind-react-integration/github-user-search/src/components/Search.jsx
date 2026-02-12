import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [searchParams, setSearchParams] = useState({ username: '', location: '', minRepos: '' });
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInput = (e) => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        try {
            const data = await fetchUserData(searchParams.username, searchParams.location, searchParams.minRepos);
            setResults(data.items); // Search API results are in 'items'
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input name="username" placeholder="Username" onChange={handleInput} className="border p-2 rounded" />
                    <input name="location" placeholder="Location" onChange={handleInput} className="border p-2 rounded" />
                    <input name="minRepos" type="number" placeholder="Min Repos" onChange={handleInput} className="border p-2 rounded" />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user</p>} 
            {results && results.map((user) => (
              <div key={user.id}>
                <img src={user.avatar_url} alt={user.login} />
                <h2>{user.login}</h2>
                <p>{user.location}</p>
                <a href={user.html_url}>View Profile</a>
              </div>

            ))}
        </div>
    );
};

export default Search;