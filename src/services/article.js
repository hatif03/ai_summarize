import axios from "axios";

const getSummary = async (get_url, setFetching) => {

    const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: get_url,
          length: '3'
        },
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': "3c062c1b06msh689503a5652a7eap160b05jsn295453b022f7",
          'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
      };
      
    try {
        setFetching(true);
        const response = await axios.request(options);
        setFetching(false);
        return response.data;
    } catch (error) {
        setFetching(false);
        return error;
    }
};

export default getSummary;
