import { useEffect, useState } from "react";
import { useLazyGetSummaryByUrlQuery } from "../../services/summarize";

import SearchBar from '../../common/SearchBar'
import SummaryItem from "./SummaryItem";

//will save a list of [article_url, article_summary] to summaries = []

//DEV_ONLY: add persistent storage
//eventually turn this into a google drive of sort for code documentation
//can browse through categories and read brief summaries for each doc
//click dock to redirect to actual website

//save url/summary list based on user cookie or login info
//  will save to local storage temporarily for testing purposes
//later expand this project to be a chrome extension?
export function Summary(){
  const [activeSummary, setActiveSummary] = useState({
    url: "Not Set",
    summary: ""
  })

  const [allSummaries, setAllSummaries] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryByUrlQuery()

  const setActive = (summary) => {
    setActiveSummary(summary)
  }


  //getSummary can also take in a paragraph_length paramater
  const handleSubmit = async (url) => {
    const { data } = await getSummary({url: url});


    console.log("testing");
    console.log(data)

    if(error){
      console.log(`error: ${error}`)
    }

    if(data?.summary){
      console.log('test')
      const entry = {url: url, summary: data.summary}
      const updatedSummaries = [entry, ...allSummaries]

      setAllSummaries(updatedSummaries);

      localStorage.setItem(`storedSummaries`, JSON.stringify(updatedSummaries));
    }
  }

  //run on mount
  useEffect(() => {
    const storedSummaries = JSON.parse(localStorage.getItem('storedSummaries'))

    if(storedSummaries){
      setAllSummaries(storedSummaries);
    }

  }, [])

  const renderedSummaries = allSummaries.map((site, index) => {
    let active = (site.url.localeCompare(activeSummary.url) === 0)

    return <SummaryItem active={active} url={site.url} summary={site.summary} 
    index={index} onClick={() => setActive(site)} />
  })

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      {isFetching &&
        <div> 
         <h1>Loading...</h1> 
        </div>
      } 
      {error &&
        <div>
          <h1>Error</h1>
        </div>
      }
      {renderedSummaries}
    </div>
    
  )
}