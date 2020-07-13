export default class Getting {

    async getRes (url) {
        const res = await fetch(url);
        
        if( !res.ok){
            throw new Error(`couldnt fetch ${url}, status: ${res.status}`);
        }
    
        const some = await res.json();
        return some;
    };
    
    getRepos(url = 'https://api.github.com/users/Volkov17/repos?per_page=1000' ) {
        return this.getRes(url);
    } 
}
  