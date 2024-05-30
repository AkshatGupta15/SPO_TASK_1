import React, { useEffect, useState } from 'react'

export const MoreInfo =  () => {
    const [data, setData] = useState(null);
    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch('https://spo.iitk.ac.in/_next/data/erqRoyIJE235QyuGuyOa6/insights/2023-placement-protyaydeep-shee-housingcom.json', {
              mode: 'no-cors'
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
        
              const text = await response.text();
              console.log('Raw response:', text);
        
              if (text) {
                jsonData = JSON.parse(text);
                success = true;
              } else {
                throw new Error('Empty JSON response');
              }
            // setPhotos(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(data)
    // const data = fetch("https://spo.iitk.ac.in/_next/data/erqRoyIJE235QyuGuyOa6/insights/2023-placement-protyaydeep-shee-housingcom.json")
    // console.log(data)
  return (
    <div>MoreInfo</div>
  )
}
