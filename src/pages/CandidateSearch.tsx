import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  //create state variables for the candidates, the selected canditate, and loading
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //functions to fetch data from the API and set the candidates state variable
  const fetchCandidates = async () => {
    setLoading(true);
    const data = await searchGithub();
    setCandidates(data);
    setLoading(false);
  }

  //function to fetch a single candidate from the candidates array and set the currentCandidate state variable
  const fetchCandidate = async (login: string) => {
    const userName = candidates[0].login;
    const data = await searchGithubUser(userName);
  }

  //useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCandidates();
  }, []);

  //return the page
  return (
    <div>
      <h1>CandidateSearch</h1>
      <ul>

      </ul>
    </div>
  );
};

export default CandidateSearch;
