import { Result } from './result.interface';
export interface Res {
    status: string,
    copyright: string ;
    has_more: any ;
    num_results: any ;
    results: Result[];

}
