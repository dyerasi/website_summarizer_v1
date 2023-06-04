function SummaryItem({active, url, summary, index, onClick}){
  return (
    <div key={index} onClick={onClick}>
      <h1>{url}</h1>
      {active && 
        <h2>{summary}</h2>
      }
    </div>
  )
}

export default SummaryItem;