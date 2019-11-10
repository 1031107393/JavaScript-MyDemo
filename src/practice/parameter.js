{
    function f(...a) {
        var sum = 0;
        a.forEach(v => {
            sum += v * 1;
        })
        return sum;
    }
    console.log(f(1,100,199,10000));
}
{
    var params = [1,'1000000',true,false];
    var other = [2,'2000',...params,'日你个贼',...params];
    console.table(other);
}