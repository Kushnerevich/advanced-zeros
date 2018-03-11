module.exports = function getZerosCount(number, base) {
    var bases = [];
    var a = 2;
    getPrimitives(base);
    bases.reverse();

    var j=1;
    result =[];

    for (i = 0; i < bases.length; i++)
    {
        var sum = 0;
        var n = number;
        while (n >= 1) {
            var temp = parseInt(n / bases[i]);
            n = temp;
            sum = sum + temp;

        }
        if (bases[i]==bases[i+1])
        {
            j++;
        }
        result.push(Math.floor(sum / j));

    }

    function getPrimitives(base) {
        while (a <= base) {
            if (base % a == 0) {
                bases.push(a);
                base = base / a;
            }
            else {
                a++
            }
            ;
        }
    }

    return Math.min.apply(null, result);


}