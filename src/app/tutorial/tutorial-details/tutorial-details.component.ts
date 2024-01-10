import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  selectedTarea: Tutorial = new Tutorial(0, "", "", "", false)

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.tutorialService.selectedTarea = this.selectedTarea
  }
}
