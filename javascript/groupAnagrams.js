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
    map[str].sort();
  }
  return Object.values(map).sort(function(a, b){return a.length - b.length});
};

module.exports = groupAnagrams;
