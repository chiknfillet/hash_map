class HashMap {
  constructor(capacity, loadFactor) {
    this.capacity = capacity;
    this.loadFactor = loadFactor
    this.hashMap = [];
  }

  hash(key) {
   let hashCode = 0;
      
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
     hashCode %= 16;
   }

   return hashCode;
  } 

  set(key , value) {
    const index = this.hash(key);
    this.hashMap[index] = {[key]: value}
  }

  get(key) {
    const index = this.hash(key);
    if (this.hashMap[index] && this.hashMap[index].hasOwnProperty(key)) {
      return this.hashMap[index][key];
    }
    return null
  }

  has(key) {
    const index = this.hash(key);
    if (this.hashMap[index] && this.hashMap[index].hasOwnProperty(key)) {
      return true;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.hashMap[index] && this.hashMap[index].hasOwnProperty(key)) {
      delete this.hashMap[index][key];
      return true; 
    }
    return false; 
  }

  length() {
    let count = 0;
    for(let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i] != null) {
        count++;
      }
    }
    return count;
  }

  clear() {
    this.hashMap = [];
  }

  keys() {
    let keyArray = []
    for(let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i] != null) {
        keyArray.push(...Object.keys(this.hashMap[i]))
      }
    }
    return keyArray;
  }

  values() {
    let valueArray = []
    for(let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i] != null) {
        valueArray.push(...Object.values(this.hashMap[i]))
      }
    }
    return valueArray;
  }

  entries() {
    let entriesArray = []
    for(let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i] != null) {
        entriesArray.push(this.hashMap[i])
      }
    }
    return entriesArray;
  }
}

const test = new HashMap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.entries())
console.log(test.clear())
console.log(test.entries())
