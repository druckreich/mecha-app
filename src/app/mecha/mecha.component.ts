import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mecha',
  templateUrl: './mecha.component.html',
  styleUrls: ['./mecha.component.scss'],
})
export class MechaComponent implements OnInit {

  private availableSkills: string[] = [
    'Flying',
    'First strike',
    'Deathtouch',
    'Hexproof',
    'Lifelink',
    'Menace',
    'Reach',
    'Trample',
    'Vigilance',
    '+1/+1'
  ];

  public addedSkills: string[] = [

  ]


  constructor() { }

  ngOnInit() {}

  onDice() {
    const dice: number = Math.floor(Math.random() * this.availableSkills.length);
    this.addedSkills.push(this.availableSkills[dice]);
    this.availableSkills.splice(dice, 1);

    console.log(dice);
    console.log(this.addedSkills);
    console.log(this.availableSkills);

  }
}
