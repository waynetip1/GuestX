/* Question 2
Represent a 6 string guitar (standard tuning, only the first 2 fret boards) and a 4 string bass
(standard tuning, only the first 3 frets) in a class structure. Create attributes, elements, functions
and any other components you feel they may have.
1. Consider where they are similar and where they are different.
2. Consider we want to identify if the note from one is equal to the other based on the fret
position and string played.
Please note this doesn’t need to be an executable application , only a collection of classes that
would represent the guitar , the bass in its commonality and its differences.
*/

class BassGuitar {
  constructor(make, model) {
    this.standard = {
      6: ["E", "F", "F#/Gb", "G"],
      5: ["A", "A#/Bb", "B", "C"],
      4: ["D", "D#/Eb", "E", "F"],
      3: ["G", "G#/Ab", "A", "A#/Bb"],
      2: ["B", "C", "C#/Db", "D"],
      1: ["E", "F", "F#/Gb", "G"]
    };
    this.make = make;
    this.model = model;
    this.type = "bass";
  }
  getNote(string, fret) {
    if (this.type == "bass") {
      string = string + 2;
      let fretNote = this.standard[string][fret];
      return fretNote;
    } else if (this.type === "guitar") {
      let fretNote = this.standard[string][fret];
      return fretNote;
    }
  }
}

class Guitar extends BassGuitar {
  constructor(make, model) {
    super(make, model);
    this.type = "guitar";
  }
}
