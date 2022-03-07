var groupAnagrams = function(strs) {
    let map = {};
    let str = '';
    let len = strs.length;
    for (let i = 0; i < len; i++) {
      str = strs[i].split('').sort().join('');
      if (!map[str]) {
          map[str] = [];
      }
      map[str].push(strs[i]);
    }
    return Object.values(map);
  };