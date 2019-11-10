{
    var table = [1,10,100,100,1000];
    var newTable = table.map(v=>v+1);
    console.table(newTable);
}
{
    var f = function () {
        this.a = 'a';
        this.b = 'b';
        this.c = {
            a: 'a+',
            b: () => {
                return this.b;
            }
        }
    }
    console.log(new f().c.b())
}