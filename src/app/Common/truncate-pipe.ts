import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform{
    transform(value: string, limit=165, ellipsis="..."){
        if(value.length<=limit){
            return value;
        }
        else{
            return value.substring(0, limit-1)+ellipsis;
        }
        
    }
}