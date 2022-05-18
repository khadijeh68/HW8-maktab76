let site = {
    siteName: "W3Docs",
    bookName: "Javascript",
    get fullName(){
        return`welcome to ${this.siteName}, ${this.bookName} book`;
    },
    set fullName(value){
        [this.siteName , this.bookName] = value.split(" ");
    }
    };
    
    Object.defineProperty(this , 'fullName' , {
        get: function(){
            return`${this.siteName}, ${this.bookName} book`;
        },
        set: function(value){
            [this.siteName , this.bookName] = value.split(" ");
        }
    });

    console.log(site.fullName);

    site.fullName = "W3 CSS"
    console.log(site.fullName);
    console.log(site.siteName);
    console.log(site.bookName);

    for (let key in site){
        console.log(key);
    };