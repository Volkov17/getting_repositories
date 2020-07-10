export default class Getting {

    async getRes (url) {
        const res = await fetch(url);
        
        if( !res.ok){
            throw new Error(`couldnt fetch ${url}, status: ${res.status}`);
        }
    
        const some = await res.json();
        return some;
    };
    
    getRepos() {
      return this.getRes('https://api.github.com/users/Volkov17/repos?per_page=1000');
    }
    
}
    /*
    const ar = new Getting();
    
    ar.getName().then(res=> {
      //let obj = JSON.stringify(res);
      //console.log(obj);
    
      res.forEach(item => console.log(item.name));
    });
    */