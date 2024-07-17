import { useState, useEffect } from 'react';

interface Company {
  id: number;
  name: string;
  // Add other relevant fields
}


export default function Companies() {

    const [companies, setCompanies] = useState<Company[]>([]);
    useEffect(() => {
        // Fetch companies data from your API
        // Example: fetchCompanies().then(data => setCompanies(data));
      }, []);
    
    return<>
    <div>
      <h1>Companies</h1>
      <ul>
        {companies.map(company => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
      {/* Add forms or buttons for adding/editing companies */}
    </div>
    
    </>
}