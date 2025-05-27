import { saveShortUrl } from '../dao/short_url.js';
import { generateNanoId } from '../utils/helper.js';

export const createShorturlWithoutUser = async (url)=>{
   try{
        const shortUrl = await generateNanoId(7);
   if(!shortUrl) throw new Error('Short URL not generated');
   await saveShortUrl(shortUrl,url);
   return shortUrl
   }
   catch(error){
       throw new Error('Error creating short URL: ' + error.message);
   }
 
}

export const createShorturlWithUser = async (url,user_id)=>{
   const shortUrl = await generateNanoId(7);
   await saveShortUrl(shortUrl,url,user_id);
   return shortUrl
}