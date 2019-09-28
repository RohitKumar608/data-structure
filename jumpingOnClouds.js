function jumpingOnClouds(c) {
    var count = 0;
    for(let i=0;i<c.length;)
    {
        if(i+2<c.length)
        {
            if (c[i + 1] == 0 && c[i + 2] == 0)
            {
                count++;
                i += 2;
            }
            else if(c[i + 1] == 0 && c[i + 2] == 1)
            {
                count++;
                i += 1;
            }
            else if (c[i + 1] == 1 && c[i + 2] == 0)
            {
                count++;
                i += 2;
            }
        }
        else
        {
            if(i<c.length-1)
            count++;
            i++;
        }
        
    }
  return count;
}
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0]));
 console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
