import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mecha',
  templateUrl: './mecha.component.html',
  styleUrls: ['./mecha.component.scss'],
})
export class MechaComponent implements OnInit {

  @Output()
  public handleDeath: EventEmitter<any> = new EventEmitter<any>();

  public allSkills: string[] = [
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


  public availableSkills: string[] = [...this.allSkills];

  public addedSkills: string[] = [];

  private isDead = false;



  constructor() { }

  ngOnInit() {
    this.isDead = false;
  }

  public onDice() {
    const dice: number = Math.floor(Math.random() * this.availableSkills.length);
    this.addedSkills.push(this.availableSkills[dice]);
    this.availableSkills.splice(dice, 1);
  }

  public onUndo() {
    const lastSkill: string = this.addedSkills.pop();
    this.availableSkills.push(lastSkill);
  }

  public hasSkill(skill: string): boolean {
    return this.addedSkills.indexOf(skill) !== -1;
  }

  public onKill(): void {
    this.handleDeath.next();
    this.isDead = true;
  }

  public canDice() {
    return this.isDead === false && this.availableSkills.length > 0;
  }

  public canKill() {
    return this.isDead === false;
  }
}
