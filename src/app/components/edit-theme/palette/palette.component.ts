import { Component, Input, OnInit } from '@angular/core';
import {
    PaletteOption
} from '../../../../../projects/theme-controller/src/app/layout/theme-thumbnail/theme-thumbnail.component';
import { pSBC } from './pSBC';


@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {
    @Input() palette: PaletteOption = {} as any;
    constructor() {
    }

    ngOnInit(): void {
    }
    public colorChange($event: string) {
        this.palette.darker = pSBC.adjust(-.5, $event) ?? "#fff";
        this.palette.lighter = pSBC.adjust(.5, $event) ?? "#fff";
    }
}
