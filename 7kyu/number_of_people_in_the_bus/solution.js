var number = function(busStops){
    return busStops.reduce((people, [on,off]) => people + on - off, 0);
   }