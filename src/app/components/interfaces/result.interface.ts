import {Link} from './link.interface';
import { Multi } from './multimedia.interface';

export interface Result{
    display_title: string;
    mpaa_rating: string ;
    critics_pick: any ;
    byline: string ;
    headline: string ;
    summary_short: string  ;
    publication_date: any ;
    opening_date: string ;
    date_updated: string  ;
    link: Link  ;
    multimedia: Multi;
}