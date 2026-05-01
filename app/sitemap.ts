import { MetadataRoute } from 'next';
const base='https://www.playkite.com';
export default function sitemap(): MetadataRoute.Sitemap {return ['','/kite-lessons-hurghada','/kitesurfing-courses-egypt','/prices','/kite-spot-hurghada','/about','/blog','/contact'].map((p)=>({url:`${base}${p}`,lastModified:new Date()}));}
