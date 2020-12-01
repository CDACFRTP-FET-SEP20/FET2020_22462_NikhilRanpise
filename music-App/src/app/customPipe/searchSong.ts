import { Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'search'
})
export class searchSong implements PipeTransform{
    
    transform(value: any[],args: any):any {
        if(!value) return null;
        if(!args) return value;
        let search= args.toLowerCase();
        return value.filter(music =>{
            let mname=music.name.toLowerCase();
            let data=mname.indexOf(search)!==-1;
            console.log(data);
            return data;
        })
    }
    
}