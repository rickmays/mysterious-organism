// Returns a random DNA base - this function provided by Codecademy
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases - this function provided by Codecademy
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// Everything below this line is my work
// pAequor Factory
function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,
    // mutate method
    mutate() {
      const baseToMutate = Math.floor(Math.random() * 15);
      let randBase;
      while (true) {
        randBase = returnRandBase();
        if (randBase !== this.dna[baseToMutate]) {
          this.dna[baseToMutate] = randBase;
          return 'Mutation Successful';
        }
      } 
    },
    // compare dna method
    compareDNA(otherpAequor) {
      let countOfMatches = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] === otherpAequor.dna[i]) {
          countOfMatches++;
        }
      }
      const percentMatches = Math.round(countOfMatches / this.dna.length * 100);
      console.log(`Specimen #${this.specimenNum} and specimen #${otherpAequor.specimenNum} have ${percentMatches}% DNA in common`)
    },
    // will likely survive method
    willLikelySurvive() {
      const likelyToSurvive = this.dna.filter(base => base === 'C' || base === 'G').length / this.dna.length >= .60;
      return likelyToSurvive;
    }
  };
}
// test creating two strands of dna
console.log('** Begin test: creating two strands of dna **');
let specimen1 = pAequorFactory(1, mockUpStrand());
let specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen1);
console.log(specimen2);
console.log('** End test: creating two strands of dna **');
console.log('\n\n');

//test mutating dna
console.log('** Begin test: mutating dna **');
console.log('Before Mutation');
console.log(specimen1.dna);
console.log(specimen1.mutate());
console.log('After Mutation');
console.log(specimen1.dna);
console.log('** End test: mutating dna **');
console.log('\n\n');

// test comparing dna
console.log('** Begin test: comparing dna **');
console.log(specimen1.dna);
console.log(specimen2.dna);
specimen1.compareDNA(specimen2);
console.log('** End test: comparing dna **');
console.log('\n\n');

// test likelihood of survival
console.log('** Begin test: likelihood of survival **');
console.log(specimen1.dna);
console.log(specimen1.willLikelySurvive());
console.log('** End test: likelihood of survival **');
console.log('\n\n');

// create array of 30 dna samples for further examination
console.log('** Begin: Create array of 30 dna samples for further examination **');
const dnaStore = [];
for (i = 1; i <= 30; i++) {
  dnaStore.push(pAequorFactory(i, mockUpStrand()));
}
console.log(dnaStore);
console.log('** End: Create array of 30 dna samples for further examination **');
