import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dayOneSample, tmp } from '../day-one.sample';

interface IKV {
  key: string,
  value: number
}

@Component({
  selector: 'app-day-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-one.component.html',
  styleUrl: './day-one.component.scss'
})
export class DayOneComponent implements OnInit {

  ngOnInit() {
    // this.partOne(tmp);
    // this.partTwo();
    // this.partTwoSolutionTwo();
    this.partTwoSolutionThree();
  }

  partOne(sample: string): void {
    // console.log(sample);
    let returnValue = 0;
    let splitted = sample.split('\n');
    let trueSampleSplitted = dayOneSample.split('\n');
    let i = 0;
    splitted.forEach(row => {
      const numbers = row.replace(/\D/g,'');
      let goal = numbers.charAt(0) + numbers.charAt(numbers.length - 1);
      returnValue += Number(goal);
      console.log(trueSampleSplitted[i++] + " => " + row + " => " + numbers + " => " + goal + " => " + returnValue);
      // console.log ('summarized: ', returnValue);
    });
    console.log ('summarized: ', returnValue);
  }

  partTwo(): void {
    console.log('partTwo started');
    let sample =  dayOneSample.repeat(1);
    console.log('sample.length: ', sample.length);
    let i = 0;
    while (true) {
      // console.log(i);
      let x3 = sample.slice(i, 3 + i);
      let x4 = sample.slice(i, 4 + i);
      let x5 = sample.slice(i, 5 + i);
      sample = this.checkWord(x3, x4, x5, sample);
      i++;
      if (i > sample.length) {
        break;
      }
    }
    // console.log(sample);
    this.partOne(sample);
  }

  checkWord(w3: string, w4: string, w5: string, sample: string): string {
    // console.log(w3,w4,w5);
    switch (w3) {
      case "one":
        // console.log('found one');
        sample = sample.replace("one","1");
        break;
      case "two":
        // console.log('found two');
        sample = sample.replace("two","2");
        break;
      case "six":
        // console.log('found six');
        sample = sample.replace("six","6");
        break;
    }
    switch (w4) {
      case "four":
        // console.log('found four');
        sample = sample.replace("four","4");
        break;
      case "five":
        // console.log('found five');
        sample = sample.replace("five","5");
        break;
      case "nine":
        // console.log('found nine');
        sample = sample.replace("nine","9");
        break;
    }
    switch (w5) {
      case "three":
        // console.log('found three');
        sample = sample.replace("three","3");
        break;
      case "seven":
        // console.log('found seven');
        sample = sample.replace("seven","7");
        break;
      case "eight":
        // console.log('found eight');
        sample = sample.replace("eight","8");
        break;
    }
    return sample;
  }

  partTwoSolutionTwo(): void {
    let sample =  dayOneSample.repeat(1);
    let sampleSplitted = sample.split('\n');
    sampleSplitted.forEach(row => {
      for (let i = 0; i < row.length; i++) {
        let x3 = row.slice(i, 3 + i);
        let x4 = row.slice(i, 4 + i);
        let x5 = row.slice(i, 5 + i);
        sample = this.checkWord(x3, x4, x5, sample);

      //   if (row =='stwonefourthree9twonine4six5bvxgkxf') {
      //     console.log('x3', x3);
      //     console.log('x4', x4);
      //     console.log('x5', x5);
      //   }
      }
      // if (row =='stwonefourthree9twonine4six5bvxgkxf') {
      //   console.log('sample: ', sample);
      //   return;
      // }
    });
    // console.log('sample', sample);
    // this.partOne(sample);
  }

  partTwoSolutionThree(): void {
    let sample =  dayOneSample.repeat(1);
    // let sampleSplitted = sample.split('\n');
    // sampleSplitted.forEach(row => {
    //   let foundNumbers: IKV[] = [];
    //   for (let i = 0; i < row.length; i++) {
    //     let x3 = row.slice(i, 3 + i);
    //     let x4 = row.slice(i, 4 + i);
    //     let x5 = row.slice(i, 5 + i);
    //     this.findWord(x3, x4, x5, foundNumbers);
    //   }
    //   //console.log('foundNumbers:', foundNumbers, row)

    //   foundNumbers.forEach((el) => {
    //     row = sample.replace(el.key, el.value.toString());
    //   })
    //   console.log('row: ', row);
    // })
    const numbers: any = {
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
    };

    const target = sample.split('\n');
    let sum = 0;
    let findex;
    let lindex;
    let fnumber: number;
    let lnumber: number;

    target.forEach((line) => {
      findex = line.length;
      lindex = -1;
      for (const number in numbers) {
        if (line.indexOf(number) !== -1 && line.indexOf(number) < findex) {
          fnumber = numbers[number];
          findex = line.indexOf(number);
        }
        if (line.lastIndexOf(number) !== -1 && line.lastIndexOf(number) > lindex) {
          lnumber = numbers[number];
          lindex = line.lastIndexOf(number);
        }
      }
      sum += Number(fnumber + lnumber);
    });

    console.log(sum);
  }

  findWord(w3: string, w4: string, w5: string, array: IKV[]): IKV[] {
    switch (w3) {
      case "one":
        // console.log('found one');
        array.push({key: 'one', value: 1});
        break;
      case "two":
        // console.log('found two');
        array.push({key: 'two', value: 2});
        break;
      case "six":
        // console.log('found six');
        array.push({key: 'six', value: 6});
        break;
    }
    switch (w4) {
      case "four":
        // console.log('found four');
        array.push({key: 'four', value: 4});
        break;
      case "five":
        // console.log('found five');
        array.push({key: 'five', value: 5});
        break;
      case "nine":
        // console.log('found nine');
        array.push({key: 'nine', value: 9});
        break;
    }
    switch (w5) {
      case "three":
        // console.log('found three');
        array.push({key: 'three', value: 3});
        break;
      case "seven":
        // console.log('found seven');
        array.push({key: 'seven', value: 7});
        break;
      case "eight":
        // console.log('found eight');
        array.push({key: 'eight', value: 8});
        break;
    }
    return array;
  }

}
