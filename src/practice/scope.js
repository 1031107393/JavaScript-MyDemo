{
    const table = [];
    for (let i =0; i <= 3; i++) {
        table[i] = i * 3;
    }
    console.table(table);
}
{
    function f() {
        return 1;
    }
    console.log(f() === 1);
    {
        function f() {
            return 3;
        }
        console.log(f() === 3);
    }
    console.log(f() === 1);
}