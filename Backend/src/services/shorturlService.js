import { saveShortUrl } from '../dao/short_url.js';
import ShorturlModel from '../models/shortUrlModel.js';
import { generateNanoId } from '../utils/helper.js';

export const createShorturlWithoutUser = async (url)=>{
   const shortUrl = await generateNanoId(7);
   await saveShortUrl(shortUrl,url);
   return shortUrl
}

export const createShorturlWithUser = async (url,user_id)=>{
   const shortUrl = await generateNanoId(7);
   await saveShortUrl(shortUrl,url,user_id);
   return shortUrl
}