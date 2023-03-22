import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import axios from 'axios'

const LinkResult = ({inputValue}) => {
    console.log(inputValue)
    const [shortenLink, setShortenLink] = useState("");
    console.log(shortenLink)
    const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try{
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setShortenLink(res.data.result.full_short_link)
        } catch(err) {
            setError(err)

        } finally{
          setLoading(false);
        }

    }

    useEffect(() => {
        if(inputValue.length) {
            fetchData();

        }
    },[inputValue])
    
    useEffect(() => {
        const timer = setTimeout(() =>{
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    },[copied]);

    if(loading) {
        return <NoData>Loading...</NoData>
    }
    if(error) {
        return <NoData>Something when wrong :(</NoData>
    };
    return (
        <>
        {shortenLink && ( <Result>
        <Ptag>{shortenLink}</Ptag>

        <CopyToClipboard text={shortenLink}
        onCopy={() => setCopied(true)}
        >
        <Button className={copied ? "copied" : ""}>Copy to clipboard</Button>
        </CopyToClipboard>
        
       </Result>)}
       
        </>
       
    )
}


const Result = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align:center;
padding: 0.5rem 1rem;
`;

const Ptag = styled.p`
color: White;
border: 1px solid #ffff00;
border-radius: 4px;
padding: 0.5rem 1rem;
margin: 1rem;
`



const Button = styled.button`
padding: 0.5rem 1rem;
font-size: 1.25rem;
color: white;
margin: 1rem;
cursor: pointer;
border: none;
border-radius: 4px;
background-color: orange;
`
const NoData = styled.p`
color: white;
font-size: 1rem;`



export default LinkResult;