export const getGifs = async( category ) => {
    const apiKey = '1OkVXvrY4OA3fA3gMGtfFIoq9hqzNUMu';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=10`; 

    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    console.log( gifs );

    return gifs;

}