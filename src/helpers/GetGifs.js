export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=fxEI0krse37Qq3Gv37NfjpkCvo6yuMyM&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
  
    const gifts = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
  
    console.log(gifts);
  };
  