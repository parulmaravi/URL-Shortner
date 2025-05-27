import { getShortUrl} from '../dao/short_url.js';
import {createShorturlWithoutUser} from '../services/shorturlService.js'
import  wrapperHandle from '../utils/wrapperHandler.js'

 export const createShortUrl =  wrapperHandle(async (req,res)=>{
   
        const {full_url} = req.body;
        if (!full_url) {
            return res.status(400).json({ error: "URL is required" });
        }
        
        const shortUrl = await createShorturlWithoutUser(full_url)
        res.status(201).json(process.env.APP_URL + shortUrl);

})

export const redirectFormShortUrl =  wrapperHandle(async (req,res)=>{
    const {id} = req.params;
    const url = await  getShortUrl(id)
    if(!url) throw new Error("Short Url not found")
    res.redirect(url.full_url);
      
})