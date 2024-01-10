import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
  tareas: Tutorial[] = []
  selectedTarea: Tutorial = new Tutorial(0, "", "", "", false)

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.tutorialService.getJSON().subscribe(response => {
      this.tareas = response
    })
  }

  openForSee(tarea: Tutorial) {
    this.selectedTarea = tarea
    this.tutorialService.selectedTarea = tarea
  }
}
